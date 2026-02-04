import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import { submitToSheet } from "../components/utils/submitToSheet";
export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const blog = blogs.find((b) => b.id === Number(id));

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
const [loading , setLoading] = useState(false);
const handleSubmit = async (e : React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
 try {
      await submitToSheet({
        formName: "Free Consultation Sidebar Form",
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
      });

      alert("✅ Request Submitted! Our team will call you back soon.");

      // ✅ Reset Form
      setFormData({
        name: "",
        phone: "",
        email: "",
      });
    } catch (error) {
      console.log(error);
      alert("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!blog) {
    return <h2 className="text-center mt-10">Blog Not Found ❌</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <div className="relative">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[450px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 px-6 -mt-28 relative z-10">

        {/* ✅ Blog Content Section */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-10">
          {/* Date */}
          <p className="text-gray-500 text-sm">{blog.date}</p>

          {/* Title */}
          <h1 className="text-4xl font-extrabold mt-3 leading-snug">
            {blog.title}
          </h1>

          {/* Share Buttons */}
          <div className="flex gap-3 mt-6">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">
              Share
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm">
              WhatsApp
            </button>
            <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm">
              Copy Link
            </button>
          </div>

          {/* Blog Markdown */}
          <div className="prose prose-lg max-w-none mt-4 prose-img:rounded-xl prose-img:shadow-lg">
            <ReactMarkdown components={{
              img: ({ node, ...props }) => <img {...props} className="w-full h-[250px] object-cover rounded-xl shadow-lg"
              />
            }}>{blog.content}</ReactMarkdown>
          </div>

          {/* CTA Box */}
          <div className="mt-10 p-6 bg-[#FCAF2E]/20 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900">
              Want Property Investment Guidance?
            </h2>
            <p className="text-gray-700 mt-2">
              Contact our experts to explore the best projects in Mohali & Kharar.
            </p>
          </div>
        </div>

        {/* ✅ Right Side Lead Form */}
        <div className="sticky top-24 h-fit bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Get Free Consultation
          </h2>

          <p className="text-sm text-gray-500 mt-2">
            Fill details & our team will call you back.
          </p>

         {/* ✅ Form */}
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input
          type="text"
          required
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className="w-full p-3 border rounded-lg outline-none focus:border-[#FCAF2E]"
        />

        <input
          type="tel"
          required
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
          className="w-full p-3 border rounded-lg outline-none focus:border-[#FCAF2E]"
        />

        <input
          type="email"
          required
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className="w-full p-3 border rounded-lg outline-none focus:border-[#FCAF2E]"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#FCAF2E] text-black font-semibold py-3 rounded-lg hover:bg-black hover:text-white transition disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Request Callback →"}
        </button>
      </form>

          {/* Extra Info */}
          <p className="text-xs text-gray-400 mt-4 text-center">
            ✅ Trusted Builders | ✅ Fast Response | ✅ Free Site Visit
          </p>
        </div>
      </div>

      {/* ✅ Related Blogs Section */}
      <div className="max-w-7xl mx-auto px-6 mt-20 pb-20">
        <h2 className="text-3xl font-bold mb-8">Related Blogs</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="p-6 bg-white shadow-md rounded-2xl hover:shadow-xl transition"
            >
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
