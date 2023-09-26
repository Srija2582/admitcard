import React, { useState } from "react";
import "./PhoneNumberForm.css";

const PhoneNumberForm = ({ onSubmit }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(phoneNumber);
  };

  return (
    <div>
      <img
        src="https://res.cloudinary.com/daqtrti8f/image/upload/v1695730828/AK_logo_o56fkj.svg"
        alt="logo"
      />
      <div className="para">
        <h2 className="para-heading">Welcome Back</h2>
        <p className="para-des">Please sign in to your account</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter Contact Number</label>
          <input
            type="tel"
            placeholder="Enter Contact Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>

        <p className="description">
          We will send you a one time SMS message. Charges may apply.
        </p>
        <button type="submit" className="button-style">
          Sign In with OTP
        </button>
      </form>
    </div>
  );
};

export default PhoneNumberForm;
