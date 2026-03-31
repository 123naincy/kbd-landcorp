import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitToSheet } from "../components/utils/submitToSheet";
import ReCAPTCHA from "react-google-recaptcha";

type FormDataType = {
  name: string;
  phone: string;
  email: string;
  type: string;
};

type ErrorType = {
  name: string;
  phone: string;
  email: string;
};

const PopupLeadForm: React.FC = () => {

  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    phone: "",
    email: "",
    type: "commercial",
  });

  const [errors, setErrors] = useState<ErrorType>({
    name: "",
    phone: "",
    email: "",
  });

  // Handle captcha
  const handleCaptcha = (value: string | null) => {
    setCaptchaValue(value);
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const { name, value } = e.target;

    if (name === "name" && !/^[A-Za-z\s]*$/.test(value)) return;

    if (name === "phone" && !/^[0-9]*$/.test(value)) return;

    if (name === "phone" && value.length > 10) return;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // Validation
  const validateForm = (): boolean => {

    let valid = true;

    const newErrors: ErrorType = {
      name: "",
      phone: "",
      email: "",
    };

    const nameRegex = /^[A-Za-z\s]{3,}$/;

    if (!nameRegex.test(formData.name)) {
      newErrors.name = "Name must contain only letters";
      valid = false;
    }

    const phoneRegex = /^[0-9]{10}$/;

    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
      valid = false;
    }

    if (!captchaValue) {
      alert("Please verify that you are not a robot.");
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  };

  // Submit form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {

      await submitToSheet({
        formName: "Eden Street Lead Form",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        extra: formData.type,
      });

      alert("✅ Thank you! Our team will contact you shortly.");

      setFormData({
        name: "",
        phone: "",
        email: "",
        type: "commercial",
      });

      setIsOpen(false);

      navigate("/thank-you");

    } catch (error) {

      console.error("Lead submit error:", error);
      alert("Something went wrong. Please try again.");

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
    >
      ✕
    </button>

    <div className="lead-header">

      <span className="lead-badge">
        Premium Commercial Project
      </span>

      <h2 className="lead-title">
        Book Site Visit – Mohali
      </h2>

      <p className="lead-subtitle">
        Register your interest for premium SCO plots in Mohali.
        Our team will contact you shortly.
      </p>

    </div>

    <form
      className="lead-form"
      onSubmit={handleSubmit}
    >

      {/* Name */}

      <div className="lead-field">

        <label>Name</label>

        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
        />

        {errors.name && (
          <span className="error">{errors.name}</span>
        )}

      </div>

      {/* Phone */}

      <div className="lead-field">

        <label>Phone Number</label>

        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          maxLength={10}
          inputMode="numeric"
        />

        {errors.phone && (
          <span className="error">{errors.phone}</span>
        )}

      </div>

      {/* Email */}

      <div className="lead-field">

        <label>Email Address</label>

        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleChange}
        />

        {errors.email && (
          <span className="error">{errors.email}</span>
        )}

      </div>

      {/* Google reCAPTCHA */}

      <div style={{ marginBottom: "15px" }}>
        <ReCAPTCHA
          sitekey="6Lf8lYUsAAAAAMTXSi3VzVAYlPCBmvyMfPJT_AXt"
          onChange={handleCaptcha}
        />
      </div>

      {/* Submit Button */}

      <button
        type="submit"
        className="lead-submit"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Book Site Visit"}
      </button>

      <p className="lead-note">
        🔒 Your information is safe with us
      </p>

    </form>

  </div>

</div>

  );
};

export default PopupLeadForm;