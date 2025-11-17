import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const About = lazy(() => import("../components/About"));

export default function AboutPage() {
  return (
    <motion.div
      id="about"
      className="min-h-screen bg-gray-50"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4 }}
    >
      <div style={{ paddingTop: '80px' }}>
        <Suspense fallback={<div style={{ padding: 24 }}>Loading…</div>}>
          <About />
          <Footer />
        </Suspense>
      </div>
    </motion.div>
  );
}
