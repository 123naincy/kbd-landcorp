import { MapPin, Navigation, Mountain, Palmtree } from 'lucide-react';

export default function BridalLocation() {
  return (
    <section id="location" className="py-20 px-4 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Prime Location
          </h2>
          <div className="w-24 h-1 bg-rose-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategically positioned on the Chandigarh-Manali National Highway,
            connecting major cities and tourist destinations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-rose-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Address</h3>
              </div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Bridal Square Commercial Complex<br />
                Chandigarh-Manali National Highway<br />
                Near Chandigarh, India
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Navigation className="w-5 h-5 text-rose-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">1 Acre Highway Frontage</div>
                    <div className="text-gray-600 text-sm">Maximum visibility from the National Highway</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mountain className="w-5 h-5 text-rose-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Scenic Route</div>
                    <div className="text-gray-600 text-sm">On the famous Chandigarh to Manali tourist corridor</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Palmtree className="w-5 h-5 text-rose-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Destination Wedding Hub</div>
                    <div className="text-gray-600 text-sm">Prime location for destination wedding shoppers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-video bg-gray-200 relative">
              <img
                src="https://images.pexels.com/photos/2437299/pexels-photo-2437299.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Highway Location"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h4 className="text-2xl font-bold">Chandigarh-Manali Highway</h4>
                <p className="text-white/90">One of India's Most Scenic Routes</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-4xl font-bold text-rose-500 mb-2">100K+</div>
            <div className="text-gray-600 font-medium">Daily Traffic</div>
            <p className="text-sm text-gray-500 mt-2">High footfall location</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-4xl font-bold text-rose-500 mb-2">5+</div>
            <div className="text-gray-600 font-medium">Major Cities Connected</div>
            <p className="text-sm text-gray-500 mt-2">Excellent connectivity</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-4xl font-bold text-rose-500 mb-2">Year-Round</div>
            <div className="text-gray-600 font-medium">Tourist Traffic</div>
            <p className="text-sm text-gray-500 mt-2">Consistent customers</p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-3xl p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Connectivity Advantage
            </h3>
            <p className="text-xl text-white/90 mb-8">
              Easily accessible from Chandigarh, Delhi, Amritsar, Shimla, and other major
              North Indian cities. Perfect for businesses targeting both local and tourist markets.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full font-semibold">Chandigarh: 30 mins</span>
              <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full font-semibold">Delhi: 4.5 hours</span>
              <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full font-semibold">Manali: 6 hours</span>
              <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full font-semibold">Shimla: 3 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
