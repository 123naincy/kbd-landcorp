import React from "react";
import { Sparkles, MapPin, TrendingUp } from "lucide-react";
import About_Image from "../../assets/bridal-about.png";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-gradient-to-b from-white to-rose-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Where Dreams Meet Reality
          </h2>
          <div className="w-24 h-1 bg-rose-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A landmark bridal shopping destination on the prestigious
            Chandigarh-Manali Highway, designed to create the perfect retail
            experience for wedding shoppers and businesses alike.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-rose-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Premium Location
            </h3>
            <p className="text-gray-600">
              1 acre frontage on the National Highway with exceptional visibility
              and connectivity to major cities across North India.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-rose-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Strategic Hub
            </h3>
            <p className="text-gray-600">
              Positioned on one of India's most scenic routes, attracting
              destination wedding shoppers and tourists throughout the year.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-rose-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              High ROI Potential
            </h3>
            <p className="text-gray-600">
              Tap into the thriving bridal industry with a property designed for
              maximum footfall and business success.
            </p>
          </div>
        </div>

        {/* Content + Image */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                An Unmatched Investment Opportunity
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Bridal Square represents the perfect convergence of location,
                design, and opportunity. With 6 acres of thoughtfully planned
                commercial space, this development is set to become the region's
                premier bridal shopping destination.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                The project features 103 SCOs and 309 showrooms, offering flexible
                spaces that cater to businesses of all sizes.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <Stat value="6" label="Acres Total Area" />
                <Stat value="103" label="SCO Units" />
                <Stat value="309" label="Showrooms" />
                <Stat value="1" label="Acre Highway Front" />
              </div>
            </div>

            <div className="relative min-h-[400px]">
              <img
                src={About_Image}
                alt="Luxury Bridal Shopping"
                className="w-full h-5rem object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Reusable Stat Component */
const Stat = ({ value, label }: { value: string; label: string }) => (
  <div>
    <div className="text-4xl font-bold text-rose-500 mb-2">{value}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);
