import { Award, Users, Home, TrendingUp, CheckCircle } from 'lucide-react';
import Reveal from './animations/Reveal';
import { eden_two,panipat, swanrav_two,  sindhdurg_two } from "../data/images";
export default function About() {
  const stats = [
    { icon: Home, value: '30+', label: 'Years Experience' },
    { icon: Users, value: '2,500+', label: 'Happy Clients' },
    { icon: Award, value: '10+', label: 'Projects Completed' },
    { icon: TrendingUp, value: '₹3500Cr+', label: 'Property Value' },
  ];

  const values = [
    'Transparency in all dealings',
    'Customer-first approach',
    'Quality construction standards',
    'Timely project delivery',
    'Innovative designs',
    'Long-term value creation'
  ];

  return (
    <section id="about" >
      <div className="container mx-auto px-4 py-4">
        {/* Header */}
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#293066] mb-4">
            About KBD Group
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building Dreams, Creating Legacies
          </p>
        </Reveal>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <Reveal>
            <h3 className="text-3xl font-bold text-[#293066] mb-6">
             Delivering Unmatched Excellence in Construction
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              For over three decades, KBD Group has been a symbol of trust, innovation, and quality in North India's real estate landscape. From luxurious residential towers to large-scale townships and commercial spaces, every project we undertake reflects our unwavering commitment to precision, aesthetics, and long-term value creation.
            </p>
            <p className="text-lg text-gray-600 mb-8">
             Guided by integrity and customer-centric values, we blend cutting-edge design with superior craftsmanship to create spaces that inspire and endure. Whether it's for families, investors, or businesses, KBD Group continues to redefine excellence — building not just structures, but lasting relationships and legacies.
            </p>
          </Reveal>

          <div className="relative animate-fade-in animation-delay-300">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src={eden_two}
                  alt="KBD construction project"
                  className="rounded-lg shadow-lg w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <img
                  src={panipat}
                  alt="Modern construction"
                  className="rounded-lg shadow-lg w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src={sindhdurg_two}
                  alt="Property development"
                  className="rounded-lg shadow-lg w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <img
                  src={swanrav_two}
                  alt="Luxury project"
                  className="rounded-lg shadow-lg w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#D2B563] opacity-20 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#293066] opacity-20 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Reveal
              key={index}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              <stat.icon className="w-8 h-8 text-[#D2B563] mb-3 mx-auto" />
              <div className="text-3xl font-bold text-[#293066] mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </Reveal>
          ))}
        </div>

        {/* Our Values */}
        <div className="bg-gradient-to-br from-[#293066] to-[#1F265A] rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-8 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Reveal key={index} className="flex items-center gap-4">
                <CheckCircle className="w-6 h-6 text-[#FCAF2E] flex-shrink-0" />
                <span className="text-lg">{value}</span>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-[#293066] mb-4 flex items-center gap-2">
              <Award className="w-8 h-8 text-[#D2B563]" />
              Our Mission
            </h3>
            <p className="text-gray-600 text-lg">
             Our mission is to deliver exceptional real estate solutions that go beyond customer expectations, driven by innovation, quality, and integrity. We aim to create sustainable value for our customers, investors, and communities through thoughtful design and responsible development. Every project we undertake reflects our commitment to excellence, transparency, and long-term trust. By blending modern vision with ethical practices, we strive to shape spaces that enhance lifestyles and contribute positively to society.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-[#293066] mb-4 flex items-center gap-2">
              <TrendingUp className="w-8 h-8 text-[#D2B563]" />
              Our Vision
            </h3>
            <p className="text-gray-600 text-lg">
             Our vision is to become a trusted leader in the real estate industry by redefining how people experience living and investing. We aspire to create landmark developments that combine modern design, sustainability, and community well-being. Through continuous innovation and a customer-first approach, we aim to set new standards of excellence in every project we deliver. Our ultimate goal is to build a legacy of trust, transparency, and lasting value that inspires generations to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
