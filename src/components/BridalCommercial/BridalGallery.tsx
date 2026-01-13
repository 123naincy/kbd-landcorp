import galleryOne from "../../assets/gallery/bridal-gallery (1).jpg";
import galleryTwo from "../../assets/gallery/bridal-gallery (2).jpg";
import galleryThree from "../../assets/gallery/bridal-gallery (3).jpg";
import galleryFour from "../../assets/gallery/bridal-gallery (4).jpg";
import galleryFive from "../../assets/gallery/bridal-gallery (5).jpg";
import gallerySix from "../../assets/gallery/bridal-gallery (6).jpg";

export default function BridalGallery() {
  const images = [
    { url: galleryOne, title: "Bridal Fashion", category: "Showroom" },
    { url: galleryTwo, title: "Luxury Shopping", category: "Interior" },
    { url: galleryThree, title: "Premium Retail", category: "Space" },
    { url: galleryFour, title: "Wedding Collections", category: "Display" },
    { url: galleryFive, title: "Elegant Interiors", category: "Design" },
    { url: gallerySix, title: "Fashion Showcase", category: "Retail" },
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visual Gallery
          </h2>

          {/* Gold Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-[#B8962E] to-[#F5E6B3] mx-auto mb-6"></div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the elegance and sophistication of Bridal Square
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-80"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-[#D4AF37] text-sm font-semibold">
                    {image.category}
                  </span>
                  <h3 className="text-white text-2xl font-bold mt-1">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#FFF6DA] to-[#F5E6B3] rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Schedule a Site Visit
          </h3>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            See the property in person and discover why Bridal Square is the
            perfect location for your business.
          </p>

          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-[#B8962E] to-[#D4AF37] text-white rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-xl"
          >
            Book Your Visit
          </a>
        </div>
      </div>
    </section>
  );
}
