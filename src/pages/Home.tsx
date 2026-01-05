import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import PopupLeadForm from "../components/PopupLeadForm";


// Lazy-load heavy sections to prevent big JS blocking the main thread
const Hero = lazy(() => import("../components/Hero"));
const Properties = lazy(() => import("../components/Properties"));
const AboutSection = lazy(() => import("../components/About"));    // alias to avoid confusion with pages
const Agents = lazy(() => import("../components/Agents"));
const ContactSection = lazy(() => import("../components/Contact"));
const Footer = lazy(() => import("../components/Footer"));
const RightSideContactWidget = lazy(() => import("../components/RightSideContactWidget"));
export default function Home() {
  return (
    <motion.div
      id="home"
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Suspense fallback={<div style={{ padding: 24 }}>Loading…</div>}>
      
        <Hero />
        <Properties />
        <AboutSection />
        <Agents />
        <ContactSection />
        <Footer />
        <RightSideContactWidget />
        <PopupLeadForm />
      </Suspense>
    </motion.div>
  );
}
