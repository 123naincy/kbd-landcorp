import {
  Store,
  Car,
  Shield,
  Zap,
  Users,
  Building2,
  Leaf,
  Clock,
} from "lucide-react";

export default function BridalFeatures() {
  const features = [
    {
      icon: Store,
      title: "Premium Showrooms",
      description:
        "309 beautifully designed showrooms with modern architecture and excellent natural lighting",
    },
    {
      icon: Building2,
      title: "103 SCO Units",
      description:
        "Shop-Cum-Office spaces perfect for businesses seeking multi-functional retail premises",
    },
    {
      icon: Car,
      title: "Ample Parking",
      description:
        "Multi-level parking facilities ensuring convenient access for thousands of visitors daily",
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description:
        "State-of-the-art security systems with CCTV surveillance and trained personnel",
    },
    {
      icon: Zap,
      title: "Power Backup",
      description:
        "Uninterrupted power supply with advanced backup systems for all units",
    },
    {
      icon: Users,
      title: "High Footfall Area",
      description:
        "Located on a major tourist route ensuring consistent customer traffic year-round",
    },
    {
      icon: Leaf,
      title: "Green Spaces",
      description:
        "Landscaped gardens and green areas creating a pleasant shopping environment",
    },
    {
      icon: Clock,
      title: "Extended Hours",
      description:
        "Facilities designed to support extended shopping hours for maximum business potential",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* ---------- HEADER ---------- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            World-Class Amenities
          </h2>

          {/* Gold Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F5E6B3] mx-auto mb-6"></div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every detail has been carefully planned to create the perfect
            environment for retail success and customer satisfaction
          </p>
        </div>

        {/* ---------- FEATURES GRID ---------- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group p-6 rounded-xl bg-gradient-to-br from-[#FFF6DA] to-white hover:from-[#F3E2B8] hover:to-[#FFF6DA] transition-all duration-300 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#B8962E] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* ---------- CTA SECTION ---------- */}
        <div className="mt-16 bg-gradient-to-r from-[#B8962E] via-[#D4AF37] to-[#F5E6B3] rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Designed for the Bridal Industry
          </h3>

          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            From wedding dress boutiques to jewelry stores, makeup studios to
            event planners, Bridal Square is purpose-built to serve every aspect
            of the wedding shopping experience.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold">
            {[
              "Bridal Wear",
              "Jewelry",
              "Accessories",
              "Beauty & Makeup",
              "Photography",
              "Event Planning",
              "Catering",
              "Decor",
            ].map((item, idx) => (
              <span
                key={idx}
                className="px-6 py-3 bg-white/25 backdrop-blur-sm border border-white/30 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
