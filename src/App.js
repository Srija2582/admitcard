import React, { useState } from "react";
import "./App.css";
import PhoneNumberForm from "./components/PhoneNumberForm";
import OTPVerification from "./components/OTPVerification";

function App() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const [verifiedOTP, setVerifiedOTP] = useState("");
  const [page, setPage] = useState(1);

  const handlePhoneNumberSubmit = (number) => {
    const otp = Math.floor(1000 + Math.random() * 9000);
    console.log(`OTP generated: ${otp}`);

    setPhoneNumber(number);
    setVerifiedOTP("");
    setPage(2);
  };

  const handleOTPVerify = (enteredOTP) => {
    const isOTPVerified = enteredOTP === verifiedOTP;
    if (isOTPVerified) {
      setPage(3);     // Success page
    } else {
      alert("OTP verification failed. Please try again.");
    }
  };

  return (
    <div className="App">
      {page === 1 && <PhoneNumberForm onSubmit={handlePhoneNumberSubmit} />}
      {page === 2 && (
        <OTPVerification phoneNumber={phoneNumber} onVerify={handleOTPVerify} />
      )}
      {page === 3 && <h1>OTP Verified - Success Page</h1>}
    </div>
  );
}

export default App;
