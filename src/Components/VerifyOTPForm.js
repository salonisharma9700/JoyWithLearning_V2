import React, { useState } from 'react';
import axios from 'axios';

const VerifyOTPForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpEntered, setOtpEntered] = useState('');
  const [verificationError, setVerificationError] = useState('');

  const handleVerifyOTP = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/verify-otp', {
        phoneNumber: phoneNumber,
        otpEntered: otpEntered
      });
      
      // Assuming backend returns a success message
      alert(response.data.message); // Replace with actual handling
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setVerificationError(error.response.data.error);
      } else {
        setVerificationError('Failed to verify OTP');
      }
    }
  };

  return (
    <div>
      <h2>Verify OTP</h2>
      <form>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input 
            type="text" 
            id="phoneNumber" 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor="otpEntered">Enter OTP:</label>
          <input 
            type="text" 
            id="otpEntered" 
            value={otpEntered} 
            onChange={(e) => setOtpEntered(e.target.value)} 
          />
        </div>
        {verificationError && <div style={{ color: 'red' }}>{verificationError}</div>}
        <button type="button" onClick={handleVerifyOTP}>Verify OTP</button>
      </form>
    </div>
  );
};

export default VerifyOTPForm;
