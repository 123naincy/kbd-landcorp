import React, { useState } from 'react';
import {
  MapPin,
  Star,
  Phone,
  Mail,
  Car,
  Zap,
  Trees,
  Shield,
  Building2,
  TrendingUp,
  Award,
  Users,
  ChevronLeft,
  ChevronRight,
  Clock,
  Gift,
  Facebook,
  Instagram,
  Linkedin,
  MessageSquare

} from 'lucide-react';
import bg1 from "../assets/Eden-web-banner-new.png";
import bg2 from "../assets/pop-up-Web-Banner.png";
import properties_one from "../assets/properties-one.jpeg";
import properties_two from "../assets/properties-one.jpeg";
import properties_three from "../assets/properties-two.jpeg";
import properties_four from "../assets/properties-three.jpeg";
import properties_five from "../assets/properties-four.jpeg";
import properties_six from "../assets/properties-six.jpeg";
import properties_seven from "../assets/properties-seven.jpeg";
import log from "../assets/kbd logo.png";
import gallery from "../assets/gallery.jpg";
import { Heart, BookOpen, Utensils, Leaf } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {edenStreetFaqData } from "../data/Faq";
import FAQ from '../components/Faq';
import { Helmet } from "react-helmet-async";
function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const propertyImages = [
    properties_one, properties_four, properties_five, properties_seven, properties_two, properties_three, properties_six
  ];
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % propertyImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + propertyImages.length) % propertyImages.length);
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbx1S9l2a3s_gbdPoEtLhF22dKUWYYO1DCmB9LCFahdBeNT7dADPRkHqWglZAsQ1llQ/exec"; // <- Replace with your Apps Script URL

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);

    try {
      await fetch(scriptURL, { method: "POST", body: formDataToSend });
      alert("✅ Thank you! We Will Contact You soon.");
      setFormData({ name: "", email: "", phone: "", });
    } catch (error) {
      console.error("Error!", error);
      alert("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false); // stop loader
    }
  };
  const activities = [
    {
      id: 'cows-food',
      title: "Gaushala Sewa",
      description:
        'Supporting gaushalas and providing nutritious food for cows, ensuring their well-being and protection.',
      icon: <Leaf className="w-8 h-8" />,
      color: 'text-emerald-700',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      image:
        'https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'child-education',
      title: 'Child Education',
      description:
        'Empowering underprivileged children with quality education, books, and learning resources for a brighter future.',
      icon: <BookOpen className="w-8 h-8" />,
      color: 'text-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      image:
        'https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'food-distribution',
      title: 'Food Distribution',
      description:
        'Providing nutritious meals to those in need, fighting hunger and malnutrition in our communities.',
      icon: <Utensils className="w-8 h-8" />,
      color: 'text-orange-700',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      image:
        'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'tree-plantation',
      title: 'Tree Plantation',
      description:
        'Creating greener spaces by planting trees, contributing to environmental conservation and cleaner air.',
      icon: <Trees className="w-8 h-8" />,
      color: 'text-green-700',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      image:
        'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800',
    }

  ];
  return (
    <>
    <Helmet>
        <title>KBD Eden Street | Premium Commercial Property in Kharar</title>
        <meta
          name="description"
          content="Discover KBD Eden Street commercial showrooms on Kharar–Kurali Highway. A prime retail destination with strategic location and strong business potential."

        />
        <meta
          name="keywords"
          content="KBD Eden Street, commercial showrooms Kharar, retail property Mohali, Kharar real estate "
        />

      </Helmet>
    <div className="min-h-screen bg-white">
      {/* Daily Offers Banner */}
      <div className="bg-gradient-to-r from-[#FCAF2E] to-[#e89d1a] text-white py-3 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-center text-center">
          <div className="flex items-center space-x-3">
            <Gift className="w-5 h-5 animate-bounce" />
            <span className="font-bold text-lg">🔥 Limited Period OFFER!</span>
            <Clock className="w-5 h-5" />

            <button
              onClick={() => setIsOpen(true)}
              className="bg-white text-[#FCAF2E] px-4 py-1 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors ml-4"
            >
              View Offer
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg relative max-w-md w-full">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
            <img
              src={bg2} // <-- Replace with your image path
              alt="Offer"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      )}
      {/* Hero Section  */}
      <section className="relative h-screen flex items-center" id="contact" >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${bg1})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 w-full h-full flex items-center">
          <div className="grid lg:grid-cols-2 w-full max-w-7xl mx-auto px-6 lg:px-12">

            {/* Left Side - Empty (can use for text/hero later if needed) */}
            <div className="hidden lg:flex"></div>

            {/* Right Side - Lead Form */}
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md ml-auto">
              <h3 className="text-2xl font-bold text-[#2A3674] mb-2">Get Exclusive Access</h3>
              <p className="text-gray-600 mb-6">Book your free site visit today</p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A3674] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A3674] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A3674] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  onClick={() => {
                    if (typeof (window as any).gtag !== "undefined") {
                      (window as any).gtag("event", "conversion", {
                        send_to: "AW-17594155586/YdHyCPmLhKIbEMKExsVB",
                      });
                    }
                  }}
                  disabled={loading}
                  className={`w-full bg-[#FCAF2E] hover:bg-[#e89d1a] text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform ${loading ? "opacity-70 cursor-not-allowed" : "hover:scale-105"
                    }`}
                >
                  {loading ? "Submitting..." : "Book Free Site Visit"}
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                *No spam calls. Your information is completely secure.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Key Highlights Section */}
      <section className="py-20 bg-gray-50" id="properties">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2A3674] mb-4">
              Why Choose Eden Street?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience Premium Shopping Arena with  exceptional returns on your investment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-[#2A3674] rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2A3674] mb-4">Prime Location on NH205 </h3>
              <p className="text-gray-600">
                Strategic location with excellent connectivity to major business hubs and educational institutions
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-[#2A3674] rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2A3674] mb-4">Unique Elevation Concept</h3>
              <p className="text-gray-600">
                A striking architectural identity that sets the project apart, designed to create a lasting impression.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-[#2A3674] rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2A3674] mb-4">High ROI</h3>
              <p className="text-gray-600">
                Exceptional appreciation potential with projected returns of 15-20% annually
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-[#2A3674] rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2A3674] mb-4">Day-1 Assured Returns</h3>
              <p className="text-gray-600">
                Start earning from the very first day with guaranteed assured returns on your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Property Section */}
      <section className="py-20 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#2A3674] mb-8">
                30+ Years of Commercial Real Estate Excellence
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Eden Street is envisioned as a modern shopping and business destination, designed to cater to the needs of today’s entrepreneurs and investors. With independent SCO (Shop-Cum-Office) spaces, it ensures unmatched visibility and excellent frontage. Direct access from the Chandigarh–Manali Highway makes it a highly strategic and convenient location.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Blending retail, dining, and commercial opportunities under one roof, Eden Street creates a vibrant hub for growth. Its prime location, high footfall potential, and premium infrastructure make it more than just a marketplace. It’s a smart investment that supports businesses to thrive and expand successfully.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2A3674]">1000+</div>
                  <div className="text-gray-600">Properties Sold</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2A3674]">98%</div>
                  <div className="text-gray-600">Customer Satisfaction</div>
                </div>
              </div>

              <a
                href="tel:+91-8448220334"  // <-- replace with your URL
                className="bg-[#FCAF2E] hover:bg-[#e89d1a] text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105 inline-block text-center"
              >
                Schedule a Call
              </a>

            </div>

            {/* Image Slider */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={propertyImages[currentSlide]}
                  alt="Property"
                  className="w-full h-full object-cover transition-transform duration-500"
                />

                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6 text-[#2A3674]" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6 text-[#2A3674]" />
                </button>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {propertyImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentSlide === index ? 'bg-[#FCAF2E]' : 'bg-white bg-opacity-50'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA Section */}
      <section className="py-20 bg-[#2A3674] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2A3674] to-[#1a2558]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Limited Units Available
            </h2>
            <p className="text-xl lg:text-2xl text-white opacity-90 mb-8">
              Don't miss your chance to own a premium property in the most sought-after location.
              Early bird prices ending soon!
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#FCAF2E] mb-2">50%</div>
                <div className="text-white">Construction  Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#FCAF2E] mb-2">Only 40% </div>
                <div className="text-white">Units Left</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#FCAF2E] mb-2">Limited offers</div>
                <div className="text-white">IPhone, MacBook & Many More</div>
              </div>

            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href='#contact'><button className="bg-[#FCAF2E] hover:bg-[#e89d1a] text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg">
                Book Site Visit Now
              </button></a>
              <a
                href="https://wa.me/918448220334?text=Hello!%20I%20received%20your%20query.%20Could%20you%20please%20let%20me%20know%20a%20suitable%20time%20to%20connect%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border-2 border-white text-white hover:bg-white hover:text-[#2A3674] font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg">
                  Get Details
                </button>
              </a>

            </div>

            <p className="text-white opacity-75 mt-6">
              Call now: <a href="tel:+91-8448220334" className="text-[#FCAF2E] font-bold">+91-8448220334</a>
            </p>
          </div>
        </div>
      </section>
      {/* Amenities Section */}
      <section className="py-20 bg-gray-50" id="amenities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2A3674] mb-4">
              Essential Amenities for Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Smartly designed facilities to support your business operations and enhance customer experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#FCAF2E] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <Car className="w-6 h-6 text-[#FCAF2E]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A3674] mb-2">Ample Parking</h3>
              <p className="text-gray-600 text-sm">
                Spacious parking for employees and visitors with easy access.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#FCAF2E] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-[#FCAF2E]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A3674] mb-2">High Visibility</h3>
              <p className="text-gray-600 text-sm">
                Designed to get high visibilty and footfall.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#FCAF2E] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-[#FCAF2E]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A3674] mb-2">Security & Surveillance</h3>
              <p className="text-gray-600 text-sm">
                CCTV monitoring, access control, and round-the-clock security.
              </p>
            </div>

            {/* <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#FCAF2E] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-[#FCAF2E]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A3674] mb-2">High-Speed Internet</h3>
              <p className="text-gray-600 text-sm">
                Wi-Fi and broadband connectivity for uninterrupted business communication.
              </p>
            </div> */}

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#FCAF2E] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#FCAF2E]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A3674] mb-2">Common Area Facilities</h3>
              <p className="text-gray-600 text-sm">
                Shared lounges, waiting areas, and conference rooms for convenience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#FCAF2E] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-[#FCAF2E]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A3674] mb-2">Easy Accessibility</h3>
              <p className="text-gray-600 text-sm">
                Well-connected roads and public transport options for staff and clients.
              </p>
            </div>

            {/* <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#FCAF2E] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#FCAF2E]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A3674] mb-2">Flexible Office Spaces</h3>
              <p className="text-gray-600 text-sm">
                Modular office layouts suitable for startups and expanding businesses.
              </p>
            </div> */}

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#FCAF2E] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <Trees className="w-6 h-6 text-[#FCAF2E]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A3674] mb-2">Green Surroundings</h3>
              <p className="text-gray-600 text-sm">
                Landscaped areas and open spaces to create a pleasant work environment.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-500 to-orange-500 rounded-full mb-6 shadow-lg">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Corporate Social Responsibility
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Committed to making a positive impact in society through meaningful
              initiatives that touch lives and create lasting change.
            </p>
          </div>

          {/* Swiper Slider */}
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={30}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {activities.map((activity) => (
              <SwiperSlide key={activity.id}>
                <div
                  className={`group relative bg-white rounded-2xl border-2 ${activity.borderColor} overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div
                      className={`absolute bottom-4 left-4 inline-flex items-center justify-center w-14 h-14 ${activity.bgColor} ${activity.color} rounded-xl shadow-lg`}
                    >
                      {activity.icon}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {activity.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* Location Advantage Section */}
      <section className="py-20 bg-white" id='location'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2A3674] mb-4">
              Unbeatable Location Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategically located on Chandigarh-Manali Highway with unparalleled connectivity
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-gradient-to-br from-[#2A3674] to-[#3a4785] p-8 rounded-2xl text-white">
                <div className="flex items-center mb-6">
                  <MapPin className="w-8 h-8 text-[#FCAF2E] mr-3" />
                  <h3 className="text-2xl font-bold">Prime Connectivity</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#FCAF2E] rounded-full mr-4"></div>
                    <span>5 minutes to Chandigarh University</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#FCAF2E] rounded-full mr-4"></div>
                    <span>10 minutes to IT Park and Business District</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#FCAF2E] rounded-full mr-4"></div>
                    <span>15 minutes to Airport and Railway Station</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#FCAF2E] rounded-full mr-4"></div>
                    <span>Walking distance to shopping malls and hospitals</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#FCAF2E] rounded-full mr-4"></div>
                    <span>Surrounded by thousands of residents and professionals</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {/* Replace the image with a Google Map iframe */}
              <div className="w-full h-96 rounded-2xl shadow-2xl overflow-hidden">
                <iframe
                  title="Property Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.1800434002353!2d76.62599829999999!3d30.769525899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffb006e11b2f5%3A0x7f77ce946faec923!2sKBD%20Eden%20Street!5e0!3m2!1sen!2sin!4v1758872301535!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2A3674] mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join hundreds of satisfied homeowners who chose to invest in their future
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#FCAF2E] fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "The quality of construction and attention to detail exceeded our expectations.
                The location is perfect for our family, with schools and offices nearby."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Customer"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-bold text-[#2A3674]">Karan sharma</div>
                  <div className="text-gray-600 text-sm">Supermart owner</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#FCAF2E] fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "Best investment decision we've made. The property value has already appreciated
                significantly, and the amenities are world-class."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Customer"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-bold text-[#2A3674]">Rajesh Kumar</div>
                  <div className="text-gray-600 text-sm">Investor</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#FCAF2E] fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "The team was professional throughout the entire process. From booking to
                possession, everything was handled smoothly. Highly recommend!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Customer"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-bold text-[#2A3674]">Haneet kaur</div>
                  <div className="text-gray-600 text-sm">Happy Customer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* gallery section */}
      <section className="py-16 bg-gray-50" id='gallery'>

        <h2 className="text-4xl font-bold text-center text-[#2A3674] mb-12">
          Our Gallery
        </h2>
        <div className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            src={gallery} // replace singleImage with your image import or URL
            alt="Gallery"
            className="w-full object-cover"
          />
        </div>
      </section>
{/* faq */}
<FAQ
   data={edenStreetFaqData}
      />
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <img src={log} alt="logo" className="img-fluid" style={{ height: '80px' }} />
              <p className="text-gray-300 mb-6 leading-relaxed">
                Eden Street is envisioned as a modern shopping and business destination, designed to cater to the needs of today’s entrepreneurs and investors.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-[#FCAF2E] rounded-full flex items-center justify-center hover:bg-[#e89d1a] transition-colors">
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://wa.me/918448220334?text=Hello!%20I%20received%20your%20query.%20Could%20you%20please%20let%20me%20know%20a%20suitable%20time%20to%20connect%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#FCAF2E] rounded-full flex items-center justify-center hover:bg-[#e89d1a] transition-colors"
                >
                  <MessageSquare className="w-5 h-5 text-white" />
                </a>

                <a href="https://www.instagram.com/kbdlandcorp_?igsh=ZWFyenE1bWVlNGN3" className="w-10 h-10 bg-[#FCAF2E] rounded-full flex items-center justify-center hover:bg-[#e89d1a] transition-colors">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href="https://www.linkedin.com/in/kbd-landcorp/" className="w-10 h-10 bg-[#FCAF2E] rounded-full flex items-center justify-center hover:bg-[#e89d1a] transition-colors">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-300 hover:text-[#FCAF2E] transition-colors">About Us</a></li>
                <li><a href="#properties" className="text-gray-300 hover:text-[#FCAF2E] transition-colors">Properties</a></li>
                <li><a href="#amenities" className="text-gray-300 hover:text-[#FCAF2E] transition-colors">Amenities</a></li>
                <li><a href="#location" className="text-gray-300 hover:text-[#FCAF2E] transition-colors">Location</a></li>
                <li><a href="#gallery" className="text-gray-300 hover:text-[#FCAF2E] transition-colors">Gallery</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-[#FCAF2E] mr-3" />
                  <a href="tel:+918448220334" className="text-gray-300">
                    +91-8448220334
                  </a>
                </div>

                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-[#FCAF2E] mr-3" />
                  <a href="mailto:kbdes@gmail.com" className="text-gray-300">
                    kbdes@gmail.com
                  </a>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#FCAF2E] mr-3 mt-1" />
                  <span className="text-gray-300">
                    Chandigarh-Manali Highway,<br />
                    Mohali, Punjab 140301
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-12 text-center">
            <p className="text-gray-400">
              © 2025 KBD Edenstreet. All rights reserved. | Privacy Policy | Terms & Conditions
            </p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}

export default App;