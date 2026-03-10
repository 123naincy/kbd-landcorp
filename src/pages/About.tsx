import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const About = lazy(() => import("../components/About"));

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About KBD Landcorp | Trusted Real Estate Experts in North India</title>

        <meta
          name="description"
          content="Learn about KBD Landcorp, a trusted real estate developer delivering quality residential and commercial projects in Mohali, Kharar, and North India."
        />

        <meta
          name="keywords"
          content="KBD Landcorp, real estate developer India, property developer Mohali, builder in Kharar, North India real estate company"
        />

        {/* Open Graph */}
        <meta property="og:title" content="About KBD Landcorp | Trusted Real Estate Experts in North India" />
        <meta property="og:description" content="Trusted real estate developer in Mohali and Kharar delivering premium residential and commercial projects." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kbdlandcorp.in/about" />
        <meta property="og:image" content="https://kbdlandcorp.in/og-image.jpg" />
      </Helmet>

      <motion.div
        id="about"
        className="min-h-screen bg-gray-50 pt-20"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.4 }}
      >
        <Suspense fallback={<div className="p-6">Loading…</div>}>
          <About />
        </Suspense>

        <Footer />
      </motion.div>
    </>
  );
}

