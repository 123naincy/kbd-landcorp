import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { motion, useAnimation, Variants } from "framer-motion";

type RevealProps = PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
  className?: string;
  variants?: Variants;
}>;

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Reveal({
  as: Component = "div",
  delay = 0,
  className,
  variants = defaultVariants,
  children,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            controls.start("visible");
            setHasAnimated(true);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [controls, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ delay: delay / 1000 }}
      className={className}
      as={Component as any}
    >
      {children}
    </motion.div>
  );
}


