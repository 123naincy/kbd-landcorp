import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Reveal from "./animations/Reveal";
import { submitToSheet } from "../components/utils/submitToSheet";

export default function Contact() {
  // ✅ Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // ✅ UI State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // ✅ Handle Submit (Google Sheet)
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await submitToSheet({
        formName: "KBD Contact Form",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });

      // ✅ Success
      setSubmitStatus("success");

      // ✅ Reset Form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Form Submit Error:", error);

      // ❌ Error
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);

      // Hide message after 5 sec
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* ✅ Header */}
        <Reveal className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#293066] mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to find your dream property? Get in touch with KBD Group today
            and let's make it happen.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ✅ Left Side Info */}
          <Reveal>
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-[#D2B563] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-[#293066]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#293066] mb-2">
                    Email Us
                  </h3>
                  <a
                    href="mailto:enquiry@kbdlandcorp.in"
                    className="text-gray-600 hover:text-[#D2B563] transition-colors"
                  >
                    enquiry@kbdlandcorp.in
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-[#D2B563] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-[#293066]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#293066] mb-2">
                    Call Us
                  </h3>
                  <a
                    href="tel:+918448220334"
                    className="text-gray-600 hover:text-[#D2B563] transition-colors"
                  >
                    +91 8448220334
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-[#D2B563] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-[#293066]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#293066] mb-2">
                    Visit Us
                  </h3>
                  <p className="text-gray-600">
                    Chandigarh-Manali Highway,
                    <br />
                    Mohali, Punjab, 140301
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="KBD Group office"
                className="w-full h-64 object-cover"
              />
            </div>
          </Reveal>

          {/* ✅ Right Side Form */}
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 p-8 rounded-lg shadow-lg"
            >
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-[#293066] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D2B563] focus:ring-2 focus:ring-[#D2B563] outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-[#293066] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D2B563] focus:ring-2 focus:ring-[#D2B563] outline-none transition-all"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-[#293066] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D2B563] focus:ring-2 focus:ring-[#D2B563] outline-none transition-all"
                    placeholder="+91 8448220334"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-[#293066] mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D2B563] focus:ring-2 focus:ring-[#D2B563] outline-none transition-all resize-none"
                    placeholder="Tell us about your dream property..."
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#293066] text-white py-4 rounded-lg font-semibold hover:bg-[#D2B563] hover:text-[#293066] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 transform hover:scale-105"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                {/* ✅ Success */}
                {submitStatus === "success" && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                    ✅ Thank you! We'll get back to you soon.
                  </div>
                )}

                {/* ❌ Error */}
                {submitStatus === "error" && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                    ❌ Something went wrong. Please try again.
                  </div>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
