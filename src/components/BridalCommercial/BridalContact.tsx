import { useState, FormEvent } from "react";
import { Phone, Mail, MessageSquare, Send } from "lucide-react";
import { submitToSheet } from "../utils/submitToSheet"; // ✅ Universal Excel Sheet

export default function BridalContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    unitType: "SCO",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ Updated Submit Handler (Excel Sheet)
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await submitToSheet({
        formName: "Bridal Contact Form",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.unitType, // ✅ unitType goes in Subject column
        message: formData.message,
      });

      setSubmitted(true);

      // ✅ Reset Form
      setFormData({
        name: "",
        email: "",
        phone: "",
        unitType: "SCO",
        message: "",
      });

      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      alert("❌ Something went wrong. Please try again later.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-[#B8962E] to-[#F5E6B3] mx-auto mb-6"></div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to invest in your business future? Contact us today to learn
            more about available units and schedule a site visit.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Side Info */}
          <div>
            <div className="bg-gradient-to-br from-[#B8962E] via-[#D4AF37] to-[#F5E6B3] rounded-3xl p-8 lg:p-12 text-white mb-8 shadow-2xl">
              <h3 className="text-3xl font-bold mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    value: "+91 123 456 7890",
                    link: "tel:+911234567890",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    value: "info@bridalsquare.com",
                    link: "mailto:info@bridalsquare.com",
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start">
                      <div className="w-12 h-12 bg-white/25 backdrop-blur-sm rounded-lg flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">{item.title}</div>
                        <a
                          href={item.link}
                          className="text-white/90 hover:text-white"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  );
                })}

                {/* Business Hours */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/25 backdrop-blur-sm rounded-lg flex items-center justify-center mr-4">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Business Hours</div>
                    <div className="text-white/90">
                      Monday - Saturday: 9:00 AM - 7:00 PM
                      <br />
                      Sunday: 10:00 AM - 5:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose */}
            <div className="bg-[#FFF6DA] rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Bridal Square?
              </h4>

              <ul className="space-y-3 text-gray-700">
                {[
                  "Prime location on National Highway",
                  "Purpose-built for bridal industry",
                  "High footfall tourist destination",
                  "Modern amenities and infrastructure",
                  "Excellent ROI potential",
                ].map((text, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#D4AF37] mr-2 text-xl">✓</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h3>

            {/* ✅ Success Message */}
            {submitted && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                ✅ Thank you! We'll contact you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name */}
              <input
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
              />

              {/* Email */}
              <input
                required
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
              />

              {/* Phone */}
              <input
                required
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
              />

              {/* Unit Type */}
              <select
                value={formData.unitType}
                onChange={(e) =>
                  setFormData({ ...formData, unitType: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
              >
                <option value="SCO">SCO Units</option>
                <option value="Showroom">Showrooms</option>
                <option value="Both">Both SCO & Showroom</option>
                <option value="Information">General Information</option>
              </select>

              {/* Message */}
              <textarea
                rows={4}
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-gray-300 resize-none"
              />

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#B8962E] to-[#D4AF37] text-white font-semibold py-4 rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                {loading ? "Sending..." : <>Send Message <Send size={18} /></>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
