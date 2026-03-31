import React from "react";
import { useNavigate } from "react-router-dom";


const ThankYou: React.FC = () => {

  const navigate = useNavigate();

  return (

    <div className="thankyou-wrapper">

      <div className="thankyou-card">

        <div className="success-icon">
          ✓
        </div>

        <h1 className="thankyou-title">
          Thank You for Your Enquiry
        </h1>

        <p className="thankyou-text">
          Your interest in <strong>Eden Street Commercial SCO Plots in Mohali</strong> 
          has been successfully received.
        </p>

        <p className="thankyou-subtext">
          Our team will contact you shortly with project details, pricing and 
          site visit information.
        </p>

        <button
          className="thankyou-btn"
          onClick={() => navigate("/")}
        >
          Back to Homepage
        </button>

      </div>

    </div>

  );
};

export default ThankYou;