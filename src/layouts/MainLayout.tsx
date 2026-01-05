import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isBridal = location.pathname === "/bridal-shopping-commercial";
  const hideNavbar = location.pathname === "/eden-street";

  const isTransparentPage = isHome || isBridal;

  useEffect(() => {
    const nav = document.querySelector("nav");

    if (nav && !hideNavbar && !isTransparentPage) {
      document.documentElement.style.setProperty(
        "--navbar-height",
        `${nav.offsetHeight}px`
      );
    } else {
      document.documentElement.style.setProperty("--navbar-height", "0px");
    }
  }, [hideNavbar, isTransparentPage]);

  return (
    <>
      {!hideNavbar && <Navbar />}

      <main
        style={{
          paddingTop:
            hideNavbar || isTransparentPage ? "0px" : "var(--navbar-height)",
        }}
      >
        <Outlet />
      </main>
    </>
  );
}
