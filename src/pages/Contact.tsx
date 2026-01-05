import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";


const Contact = lazy(() => import("../components/Contact"));

export default function ContactPage() {
  return (
    <motion.div
      id="contact"
      className="min-h-screen bg-gray-50"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4 }}
    >
      <div style={{ paddingTop: '80px' }}>
        <Suspense fallback={<div style={{ padding: 24 }}>Loading…</div>}>
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </motion.div>
  );
}
