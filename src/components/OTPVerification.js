import React, { useState } from "react";
import "./PhoneNumberForm.css";

const OTPVerification = ({ phoneNumber, onVerify }) => {
  const [otp, setOTP] = useState("");

  const handleVerify = (e) => {
    e.preventDefault();
    onVerify(otp);
  };

  return (
    <div>
      <img
        src="https://res.cloudinary.com/daqtrti8f/image/upload/v1695730907/undraw_confirmed_81ex_mtcdwy.svg"
        alt="verify"
      />
      <h6>Please verify Mobile number</h6>
      <p>An OTP is sent to {phoneNumber}</p>
      <form onSubmit={handleVerify}>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
          required
        />
        <p>Didn’t receive the code? Resend</p>
        <button type="submit" className="button-style">
          Verify
        </button>
      </form>
    </div>
  );
};

export default OTPVerification;
