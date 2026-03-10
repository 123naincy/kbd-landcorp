import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const Contact = lazy(() => import("../components/Contact"));

export default function ContactPage() {
  return (
   <>
   <Helmet>
        <title>Contact KBD Landcorp | Mohali & Kharar Property Experts </title>
        <meta
          name="description"
          content="Get in touch with KBD Landcorp for residential and commercial property enquiries in Mohali and Kharar. Connect with our real estate specialists today."

        />
        <meta
          name="keywords"
          content="contact KBD Landcorp, real estate enquiries Mohali, commercial property Kharar, property experts "
        />
      </Helmet>
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
    </>
  );
}
