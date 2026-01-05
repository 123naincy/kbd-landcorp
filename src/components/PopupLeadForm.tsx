import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 add this
import "./PopupLeadForm.css";

const PopupLeadForm = () => {
  const [isOpen, setIsOpen] = useState(true); // show popup on refresh

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    type: "commercial",
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // 👈 for /eden-street navigation

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbx1S9l2a3s_gbdPoEtLhF22dKUWYYO1DCmB9LCFahdBeNT7dADPRkHqWglZAsQ1llQ/exec"; // ✅ your Apps Script URL

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("type", formData.type); // 👈 also send property type

    try {
      await fetch(scriptURL, { method: "POST", body: formDataToSend });

      alert("✅ ThankYou. Emjoy the Projects Details");

      // reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        type: "commercial",
      });

      // optional: close popup
      setIsOpen(false);

      // 👇 navigate to /eden-street page
      navigate("/eden-street");
    } catch (error) {
      console.error("Error!", error);
      alert("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="lead-overlay">
      <div className="lead-modal">
        <button
          className="lead-close"
          onClick={() => setIsOpen(false)}
          aria-label="Close"
        >
          ×
        </button>

        <div className="lead-header">
          <span className="lead-badge">Limited Time</span>
          <h2 className="lead-title">Get Project Details & Pricing</h2>
          <p className="lead-subtitle">
            Share your details and we’ll send you the brochure, pricing, and
            special launch offers.
          </p>
        </div>

        <form className="lead-form" onSubmit={handleSubmit}>
          <div className="lead-field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="lead-field">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your WhatsApp number"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="lead-field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="lead-field">
            <label>Property Type</label>
            <div className="lead-radio-group">
              <label
                className={
                  "lead-radio-pill" +
                  (formData.type === "commercial" ? " active" : "")
                }
              >
                <input
                  type="radio"
                  name="type"
                  value="commercial"
                  checked={formData.type === "commercial"}
                  onChange={handleChange}
                />
                Commercial
              </label>

              <label
                className={
                  "lead-radio-pill" +
                  (formData.type === "residential" ? " active" : "")
                }
              >
                <input
                  type="radio"
                  name="type"
                  value="residential"
                  checked={formData.type === "residential"}
                  onChange={handleChange}
                />
                Residential
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="lead-submit"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Get Details Now"}
          </button>

          <p className="lead-note">
            🔒 We respect your privacy. Your details are safe with us.
          </p>
        </form>
      </div>
    </div>
  );
};

export default PopupLeadForm;
