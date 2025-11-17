import { Mail } from 'lucide-react';
import { mockAgents } from '../data/mockData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Reveal from './animations/Reveal';

export default function Agents() {
  return (
    <section id="agents" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <Reveal className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#293066] mb-4">
            Meet Our Expert 
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Work with experienced professionals dedicated to finding your perfect property.
          </p>
        </Reveal>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {mockAgents.map((agent, index) => (
            <SwiperSlide key={agent.id}>
              <div
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 text-center"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Agent Image */}
                <div className="flex justify-center mb-6">
  <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-[#D2B563] shadow-lg bg-gray-100">
    <img
      src={agent.image}
      alt={agent.name}
      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
    />
  </div>
</div>


                {/* Agent Info */}
                <h3 className="text-2xl font-semibold text-[#293066] mb-1">
                  {agent.name}
                </h3>
                <p className="text-[#D2B563] mb-3">{agent.role}</p>
                <p className="text-gray-600 mb-5 text-sm">{agent.bio}</p>

                {/* Contact */}
                <a
                  href={`mailto:${agent.email}`}
                  className="inline-flex items-center gap-3 text-gray-700 hover:text-[#D2B563] transition-colors group"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#D2B563] transition-colors">
                    <Mail className="w-5 h-5 group-hover:text-white" />
                  </div>
                  <span className="text-sm">{agent.email}</span>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
