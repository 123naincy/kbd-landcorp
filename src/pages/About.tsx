import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";


const About = lazy(() => import("../components/About"));

export default function AboutPage() {
  return (
    <>
     <Helmet>
        <title>About KBD Landcorp | Trusted Real Estate Experts in North India </title>
        <meta
          name="description"
          content="KBD Landcorp builds modern residential and commercial properties in Mohali and Kharar. Explore premium real estate projects with long-term investment potential."
        />
      </Helmet>
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
    </>
  );
}
