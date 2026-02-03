import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PopupLeadForm.css";

import { submitToSheet } from "../components/utils/submitToSheet"; // ✅ Universal Sheet Function

const PopupLeadForm = () => {
  const [isOpen, setIsOpen] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    type: "commercial",
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // ✅ Handle Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Handle Submit → Excel Sheet
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await submitToSheet({
        formName: "Popup Lead Form",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        extra: formData.type, // ✅ Commercial/Residential saved in Extra
      });

      alert("✅ Thank you! Enjoy the project details.");

      // ✅ Reset Form
      setFormData({
        name: "",
        email: "",
        phone: "",
        type: "commercial",
      });

      // ✅ Close Popup
      setIsOpen(false);

      // ✅ Navigate
      navigate("/eden-street");
    } catch (error) {
      console.error("Submit Error:", error);
      alert("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ If Popup Closed
  if (!isOpen) return null;

  return (
    <div className="lead-overlay">
      <div className="lead-modal">
        {/* Close Button */}
        <button
          className="lead-close"
          onClick={() => setIsOpen(false)}
          aria-label="Close"
        >
          ×
        </button>

        {/* Header */}
        <div className="lead-header">
          <span className="lead-badge">Limited Time</span>
          <h2 className="lead-title">Get Project Details & Pricing</h2>
          <p className="lead-subtitle">
            Share your details and we’ll send you the brochure, pricing, and
            special launch offers.
          </p>
        </div>

        {/* ✅ Form */}
        <form className="lead-form" onSubmit={handleSubmit}>
          {/* Name */}
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

          {/* Phone */}
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

          {/* Email */}
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

          {/* Property Type */}
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

          {/* Submit Button */}
          <button type="submit" className="lead-submit" disabled={loading}>
            {loading ? "Submitting..." : "Get Details Now ✅"}
          </button>

          {/* Footer Note */}
          <p className="lead-note">
            🔒 We respect your privacy. Your details are safe with us.
          </p>
        </form>
      </div>
    </div>
  );
};

export default PopupLeadForm;
