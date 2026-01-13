import { MapPin, Navigation, Mountain, Palmtree } from "lucide-react";

export default function BridalLocation() {
  return (
    <section
      id="location"
      className="py-20 px-4 bg-gradient-to-b from-white to-[#FFF6DA]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Prime Location
          </h2>

          {/* Gold Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-[#B8962E] to-[#F5E6B3] mx-auto mb-6"></div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategically positioned on the Chandigarh-Manali National Highway,
            connecting major cities and tourist destinations
          </p>
        </div>

        {/* Map + Info */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8962E] rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Address
                </h3>
              </div>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Bridal Square Commercial Complex
                <br />
                Chandigarh-Manali National Highway
                <br />
                Near Chandigarh, India
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: Navigation,
                    title: "1 Acre Highway Frontage",
                    desc: "Maximum visibility from the National Highway",
                  },
                  {
                    icon: Mountain,
                    title: "Scenic Route",
                    desc: "On the famous Chandigarh to Manali tourist corridor",
                  },
                  {
                    icon: Palmtree,
                    title: "Destination Wedding Hub",
                    desc: "Prime location for destination wedding shoppers",
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start">
                      <Icon className="w-5 h-5 text-[#D4AF37] mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">
                          {item.title}
                        </div>
                        <div className="text-gray-600 text-sm">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-video relative">
              <img
                src="https://images.pexels.com/photos/2437299/pexels-photo-2437299.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Highway Location"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h4 className="text-2xl font-bold">
                  Chandigarh-Manali Highway
                </h4>
                <p className="text-white/90">
                  One of India's Most Scenic Routes
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              value: "100K+",
              title: "Daily Traffic",
              desc: "High footfall location",
            },
            {
              value: "5+",
              title: "Major Cities Connected",
              desc: "Excellent connectivity",
            },
            {
              value: "Year-Round",
              title: "Tourist Traffic",
              desc: "Consistent customers",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg p-8 text-center"
            >
              <div className="text-4xl font-bold text-[#D4AF37] mb-2">
                {item.value}
              </div>
              <div className="text-gray-600 font-medium">
                {item.title}
              </div>
              <p className="text-sm text-gray-500 mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#B8962E] via-[#D4AF37] to-[#F5E6B3] rounded-3xl p-12 text-white shadow-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Connectivity Advantage
            </h3>

            <p className="text-xl text-white/90 mb-8">
              Easily accessible from Chandigarh, Delhi, Amritsar, Shimla, and
              other major North Indian cities. Perfect for businesses targeting
              both local and tourist markets.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold">
              {[
                "Chandigarh: 30 mins",
                "Delhi: 4.5 hours",
                "Manali: 6 hours",
                "Shimla: 3 hours",
              ].map((item, i) => (
                <span
                  key={i}
                  className="px-6 py-3 bg-white/25 backdrop-blur-sm border border-white/30 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
