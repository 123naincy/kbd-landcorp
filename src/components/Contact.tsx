import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Reveal from './animations/Reveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', phone: '', message: '' });

    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <Reveal className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#293066] mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to find your dream property? Get in touch with KBD Group today and let's make it happen
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Reveal>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-[#D2B563] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-[#293066]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#293066] mb-2">Email Us</h3>
                  <a href="mailto:enquiry@kbdlandcorp.in" className="text-gray-600 hover:text-[#D2B563] transition-colors">
                    enquiry@kbdlandcorp.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-[#D2B563] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-[#293066]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#293066] mb-2">Call Us</h3>
                  <a href="tel:+918448220334" className="text-gray-600 hover:text-[#D2B563] transition-colors">
                    +91 8448220334
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-[#D2B563] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-[#293066]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#293066] mb-2">Visit Us</h3>
                  <p className="text-gray-600">
                    Chandigarh-Manali Highway,
                    <br />
                    Mohali, Punjab, 140301

                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="KBD Group office"
                className="w-full h-64 object-cover"
              />
            </div>
          </Reveal>

          <Reveal>
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#293066] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D2B563] focus:ring-2 focus:ring-[#D2B563] focus:ring-opacity-20 outline-none transition-all"
                    placeholder="Kbd Group"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#293066] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D2B563] focus:ring-2 focus:ring-[#D2B563] focus:ring-opacity-20 outline-none transition-all"
                    placeholder="enquiry@kbdlandcorp.in"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#293066] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D2B563] focus:ring-2 focus:ring-[#D2B563] focus:ring-opacity-20 outline-none transition-all"
                    placeholder="+91 8448220334"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#293066] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D2B563] focus:ring-2 focus:ring-[#D2B563] focus:ring-opacity-20 outline-none transition-all resize-none"
                    placeholder="Tell us about your dream property..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#293066] text-white py-4 rounded-lg font-semibold hover:bg-[#D2B563] hover:text-[#293066] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg animate-fade-in">
                    Thank you! We'll get back to you soon.
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
