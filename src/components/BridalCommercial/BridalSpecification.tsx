import { Ruler, Layout, Building, MapPinned } from "lucide-react";

export default function BridalSpecification() {
  return (
    <section
      id="specs"
      className="py-20 px-4 bg-gradient-to-b from-[#FFF6DA] to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Specifications
          </h2>

          {/* Gold Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-[#B8962E] to-[#F5E6B3] mx-auto mb-6"></div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Detailed information about unit sizes and property configuration
          </p>
        </div>

        {/* SCO + Showroom */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* SCO */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8962E] rounded-lg flex items-center justify-center mr-4">
                <Building className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                SCO Units
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-gray-600 font-medium">
                  Total SCO Units
                </span>
                <span className="text-2xl font-bold text-[#D4AF37]">
                  103
                </span>
              </div>

              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-gray-600 font-medium">
                  Available Sizes
                </span>
                <span className="text-lg font-semibold text-gray-900">
                  16/60, 16/66
                </span>
              </div>

              <div className="bg-[#FFF6DA] p-4 rounded-lg mt-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Shop-Cum-Office units ideal for businesses requiring both
                  retail and office space. Perfect for bridal boutiques,
                  designer studios, and service providers.
                </p>
              </div>
            </div>
          </div>

          {/* Showrooms */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8962E] rounded-lg flex items-center justify-center mr-4">
                <Layout className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Showrooms
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-gray-600 font-medium">
                  Total Showrooms
                </span>
                <span className="text-2xl font-bold text-[#D4AF37]">
                  309
                </span>
              </div>

              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-gray-600 font-medium">
                  Available Sizes
                </span>
                <span className="text-lg font-semibold text-gray-900">
                  16/60, 16/66
                </span>
              </div>

              <div className="bg-[#FFF6DA] p-4 rounded-lg mt-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Premium retail spaces with large display areas, perfect for
                  fashion retailers, jewelry stores, and specialty bridal
                  shops.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Ruler, value: "6 Acres", label: "Total Area" },
            { icon: MapPinned, value: "1 Acre", label: "Highway Frontage" },
            { icon: Building, value: "309", label: "Total Units" },
            { icon: Layout, value: "2 Sizes", label: "16/60 & 16/66" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-gradient-to-br from-[#B8962E] to-[#D4AF37] p-6 rounded-xl text-white text-center shadow-lg"
              >
                <Icon className="w-10 h-10 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">
                  {item.value}
                </div>
                <div className="text-white/90">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Unit Size Details */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Unit Size Details
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                size: "16/60",
                points: [
                  "16 feet frontage width",
                  "60 feet depth",
                  "Ideal for boutique stores and specialized shops",
                  "Excellent street visibility",
                ],
              },
              {
                size: "16/66",
                points: [
                  "16 feet frontage width",
                  "66 feet depth",
                  "Perfect for larger showrooms and flagship stores",
                  "Extra space for display and storage",
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border-2 border-[#F5E6B3] rounded-xl p-6 hover:border-[#D4AF37] transition-colors"
              >
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-[#D4AF37] mb-2">
                    {item.size}
                  </div>
                  <div className="text-gray-600">
                    Size Configuration
                  </div>
                </div>

                <ul className="space-y-3 text-gray-700">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#D4AF37] mr-2">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
