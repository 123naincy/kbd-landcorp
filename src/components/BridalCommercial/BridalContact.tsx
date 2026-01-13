import { useState, FormEvent } from "react";
import { Phone, Mail, MessageSquare, Send } from "lucide-react";

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

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch("http://localhost:5000/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        unitType: "SCO",
        message: "",
      });

      setTimeout(() => setSubmitted(false), 3000);
    } else {
      alert(data.message || "Something went wrong");
    }
  } catch (error) {
    alert("Server error. Please try again later.");
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

          {/* Gold Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-[#B8962E] to-[#F5E6B3] mx-auto mb-6"></div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to invest in your business future? Contact us today to learn
            more about available units and schedule a site visit.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left */}
          <div>
            {/* Contact Info */}
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
                        <div className="font-semibold mb-1">
                          {item.title}
                        </div>
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

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/25 backdrop-blur-sm rounded-lg flex items-center justify-center mr-4">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">
                      Business Hours
                    </div>
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

            {submitted && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                Thank you! We'll contact you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { label: "Full Name", type: "text", key: "name", placeholder: "Your name" },
                { label: "Email", type: "email", key: "email", placeholder: "your@email.com" },
                { label: "Phone", type: "tel", key: "phone", placeholder: "+91 1234567890" },
              ].map((field, i) => (
                <div key={i}>
                  <label className="block text-gray-700 font-medium mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    required
                    value={(formData as any)[field.key]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field.key]: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#F5E6B3] outline-none transition-all"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Interested In
                </label>
                <select
                  value={formData.unitType}
                  onChange={(e) =>
                    setFormData({ ...formData, unitType: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#F5E6B3]"
                >
                  <option value="SCO">SCO Units</option>
                  <option value="Showroom">Showrooms</option>
                  <option value="Both">Both SCO & Showroom</option>
                  <option value="Information">General Information</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#F5E6B3] resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
  type="submit"
  disabled={loading}
  className="w-full bg-gradient-to-r from-[#B8962E] to-[#D4AF37] hover:opacity-90 text-white font-semibold py-4 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-70"
>
  {loading ? (
    "Sending..."
  ) : (
    <>
      <Send className="w-5 h-5" />
      Send Message
    </>
  )}
</button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
