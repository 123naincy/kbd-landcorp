import { Ruler, Layout, Building, MapPinned } from 'lucide-react';

export default function BridalSpecification() {
  return (
    <section id="specs" className="py-20 px-4 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Specifications
          </h2>
          <div className="w-24 h-1 bg-rose-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Detailed information about unit sizes and property configuration
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mr-4">
                <Building className="w-6 h-6 text-rose-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">SCO Units</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Total SCO Units</span>
                <span className="text-2xl font-bold text-rose-500">103</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Available Sizes</span>
                <span className="text-lg font-semibold text-gray-900">16/60, 16/66</span>
              </div>
              <div className="bg-rose-50 p-4 rounded-lg mt-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Shop-Cum-Office units ideal for businesses requiring both retail and office space.
                  Perfect for bridal boutiques, designer studios, and service providers.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mr-4">
                <Layout className="w-6 h-6 text-rose-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Showrooms</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Total Showrooms</span>
                <span className="text-2xl font-bold text-rose-500">309</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Available Sizes</span>
                <span className="text-lg font-semibold text-gray-900">16/60, 16/66</span>
              </div>
              <div className="bg-rose-50 p-4 rounded-lg mt-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Premium retail spaces with large display areas, perfect for fashion retailers,
                  jewelry stores, and specialty bridal shops.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-rose-500 to-pink-500 p-6 rounded-xl text-white text-center">
            <Ruler className="w-10 h-10 mx-auto mb-3" />
            <div className="text-3xl font-bold mb-2">6 Acres</div>
            <div className="text-white/90">Total Area</div>
          </div>

          <div className="bg-gradient-to-br from-rose-500 to-pink-500 p-6 rounded-xl text-white text-center">
            <MapPinned className="w-10 h-10 mx-auto mb-3" />
            <div className="text-3xl font-bold mb-2">1 Acre</div>
            <div className="text-white/90">Highway Frontage</div>
          </div>

          <div className="bg-gradient-to-br from-rose-500 to-pink-500 p-6 rounded-xl text-white text-center">
            <Building className="w-10 h-10 mx-auto mb-3" />
            <div className="text-3xl font-bold mb-2">309</div>
            <div className="text-white/90">Total Units</div>
          </div>

          <div className="bg-gradient-to-br from-rose-500 to-pink-500 p-6 rounded-xl text-white text-center">
            <Layout className="w-10 h-10 mx-auto mb-3" />
            <div className="text-3xl font-bold mb-2">2 Sizes</div>
            <div className="text-white/90">16/60 & 16/66</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Unit Size Details</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-rose-200 rounded-xl p-6 hover:border-rose-400 transition-colors">
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-rose-500 mb-2">16/60</div>
                <div className="text-gray-600">Size Configuration</div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-rose-500 mr-2">•</span>
                  <span>16 feet frontage width</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-500 mr-2">•</span>
                  <span>60 feet depth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-500 mr-2">•</span>
                  <span>Ideal for boutique stores and specialized shops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-500 mr-2">•</span>
                  <span>Excellent street visibility</span>
                </li>
              </ul>
            </div>

            <div className="border-2 border-rose-200 rounded-xl p-6 hover:border-rose-400 transition-colors">
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-rose-500 mb-2">16/66</div>
                <div className="text-gray-600">Size Configuration</div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-rose-500 mr-2">•</span>
                  <span>16 feet frontage width</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-500 mr-2">•</span>
                  <span>66 feet depth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-500 mr-2">•</span>
                  <span>Perfect for larger showrooms and flagship stores</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-500 mr-2">•</span>
                  <span>Extra space for display and storage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
