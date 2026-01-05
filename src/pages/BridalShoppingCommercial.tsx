import Hero from "../components/BridalCommercial/BridalHero";
import About from "../components/BridalCommercial/BridalAbout";
import BridalFeatures from "../components/BridalCommercial/BridalFeatures";
import BridalSpecification from "../components/BridalCommercial/BridalSpecification";
import BridalGallery from "../components/BridalCommercial/BridalGallery";
import BridalLocation from "../components/BridalCommercial/BridalLocation";
import BridalContact from "../components/BridalCommercial/BridalContact";
import Footer from "../components/Footer";
export default function BridalShoppingCommercial() {
  return (
    <>
      <Hero />
      <About />
      <BridalFeatures />
      <BridalSpecification />
      <BridalGallery />
      <BridalLocation />
      <BridalContact />
      <Footer />
    </>
  );
}
