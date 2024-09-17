import CoverImg from '../asset/cover_img.jpeg';
import React, { useState } from "react";
import axios from 'axios';

const colors = {
  primary: '#060606',
  background: '#f5f5f5',
  disabled: '#D9D9D9'
}

const Login = () => {
    const [mobileNumber, setMobileNumber] = useState("");
    const [otp, setOtp] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [isOtpVerified, setIsOtpVerified] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // function to send OTP
    const sendOtp = async () => {
      if (!mobileNumber || mobileNumber.length !== 10) {
        setErrorMessage('Please enter a valid 10-digit mobile number.');
        return;
      }

      try {
        const response = await axios.post('http://localhost:5000/send-otp', { mobileNumber });
        if (response.data.success) {
          setIsOtpSent(true);
          setErrorMessage('');
        } else {
          alert('Failed to send OTP');
        }
      } catch (error) {
        console.error('Error sending OTP', error);
        setErrorMessage('error sending OTP.')
      }
    };

    // function to verify OTP
    const verifyOtp = async () => {
      try {
        const response = await axios.post('http://localhost:5000/verify-otp', { mobileNumber, otp });
        if (response.data.success) {
          setIsOtpVerified(true);
          setErrorMessage('');
          alert('OTP Verified Successfully!');
        } else {
          alert('Invalid OTP');
        }
      } catch (error) {
        console.error('Error verifying OTP', error);
        setErrorMessage('Error verifying OTP.');

      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // Submit logic for the mobile number
      console.log("Mobile Number Submitted:", mobileNumber);
    };
  
  return (
  
    <form onSubmit={handleSubmit} className="mobile-number-form">
    <div className='w-full h-screen flex items-start'>
      <div className='relative w-1/2 h-full flex flex-col'>
        <div className='absolute top-[25%] left-[10%] flex flex-col'>
          <h1 className='text-4xl text-white font-bold my-4'> Turn your ideas into reality</h1>
          <p className='text-base text-white font-semibold'>Let's plan your next Event Together</p>
        </div>
        <img src={CoverImg} className='w-full h-full object-cover' />
      </div>

      {/* right side */}
      <div className= ' w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between'>
        <h1 className='text-xl text-[#060606] font-semibold'>Interactive Brand</h1>
        <div className='w-full flex flex-col max-w-[550px]'>
          <div className='w-full flex flex-col mb-2'>
            <h3 className='text-3xl font-semibold mb-2'>Login</h3>
            <p className='text-base mb-2'>Welcome back! Please enter your mobile number.</p>
          </div>
           
          <div className='w-full flex flex-col'>
            {errorMessage && <p style={{color:'red'}}> {errorMessage}</p>}
            {!isOtpSent ? (
            <>
             <input 
            type="tel"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
            className='w-full text-black py-2 my-4 bg-transparent border-b border-black outline-none focus:outline-none'/>  
             <button onClick={sendOtp} className='w-full my-2 items-center justify-center'>Send OTP</button>
           </>
            ) : (
              <>
              <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={verifyOtp}>Verify OTP</button>
          </>
          )}
          {isOtpVerified && <p>Welcome! You are logged in.</p>}

          </div>
          <div  className='w-full flex flex-col'>
           <button type='submit' className='w-full text-white my-2 bg-[#060606] rounded-md p-4 text-center flex items-center justify-center hover:opacity-75'>
             Continue
           </button>
          </div>
        </div>
        <div className='w-full flex items-center justify-center'>
          <p className='text-sm font-normal text-[#060606]'>Dont have a account? <span className="font-semibold underline underline-offset-2 cursor-pointer">sign up for free</span> </p>
        </div>
      </div>
    </div>
    </form>
  )
}
export default Login;