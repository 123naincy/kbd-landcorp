import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import Eden from "./pages/EdenStreet";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Gallery from "./pages/Gallery";
import BridalShoppingCommercial from "./pages/BridalShoppingCommercial";
import "./index.css";
import MainLayout from "./layouts/MainLayout";

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Pages WITH Navbar */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route
            path="/bridal-shopping-commercial"
            element={<BridalShoppingCommercial />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/Terms-and-condition" element={<TermsAndConditions />} />
        </Route>

        {/* Page WITHOUT Navbar */}
        <Route path="/eden-street" element={<Eden />} />

        <Route
          path="*"
          element={<div style={{ padding: 24 }}>Not Found</div>}
        />
      </Routes>
    </AnimatePresence>
  );
}
