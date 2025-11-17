import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import Eden from "./pages/EdenStreet";
import Navbar from "./components/Navbar";

export default function App() {
  const location = useLocation();

  // Hide Navbar on Eden page
  const hideNavbar = location.pathname === "/eden-street";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/eden-street" element={<Eden />} />
          <Route
            path="*"
            element={<div style={{ padding: 24 }}>Not Found</div>}
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}
