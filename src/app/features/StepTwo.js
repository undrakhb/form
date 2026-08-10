"use client";
import { useState } from "react";
import { Pinecone } from "../Icons/Pinoconelogo";
import { RightArrow } from "../Icons/RightArrow";
import { LeftArrow } from "../Icons/LeftArrow";

export const StepTwo = (props) => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordErrorm, setConfirmPasswordError] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const validateEmail = (email) => {
    const value = email.trim();
    if (value.length === 0) {
      return "Email is required";
    } else if (!value.includes("@") || !value.includes(".")) {
      return "Please enter valid email address";
    }
    return "";
  };

  const validatePhone = (phone) => {
    const value = phone.trim();
    if (value.length === 0) {
      return "Phone number required";
    } else if (value.length < 8) {
      return "Phone number must be at least 8 digits";
    }
    return "";
  };

  const validatePassword = (password) => {
    if (value.length === 0) {
      return "Password Required"
    } else if (value.length < 8) {
      return "Password at least 8 characters"
    }
    return ""
  }
  const validateConfirmPassword = (confirmpassword) => {
    
  }

  return (
    <div>
      <div className="w-120 h-163.75 bg-amber-50 flex justify-between flex-col items-center py-8">
        <div className="w-96.25 h-104 flex justify-evenly flex-col">
          <div className="w-96.25 h-32.25 flex flex-col">
            <Pinecone />
            <span className="text-2xl">Join Us! 😎 </span>
            <p className="text-gray-400">
              Please provide all current information accurately.
            </p>
          </div>
          <span className="flex">
            Email <span className="text-red-700">*</span>
          </span>
          <input
            className="border-gray-300 border-1 py-2"
            placeholder="Enter email"
          />
          <span>
            Phone number<span className="text-red-700">*</span>
          </span>
          <input
            className="border-gray-300 border-1 py-2"
            placeholder="Enter phone number"
          />
          <span>
            Password<span className="text-red-700">*</span>
          </span>
          <input
            className="border-gray-300 border-1 py-2"
            placeholder="Enter password"
          />
          <span className="flex">
            Confirm password <span className="text-red-700">*</span>
          </span>
          <input
            className="border-gray-300 border-1 py-2"
            placeholder="Re-enter password"
          />
        </div>
        <div className="flex gap-2 w-[416px] h-[44px]">
          <button
            onChange={handleBackButton}
            className="w-[128px] h-[44px] border-1 border-gray-400 items-center justify-center flex"
          >
            <LeftArrow></LeftArrow> Back
          </button>
          <button
            onClick={handleStep}
            className="bg-black flex justify-center items-center w-[280px] h-[44px]"
          >
            <div className="text-white text-1.5xl">Continue 2/3</div>
            <RightArrow />
          </button>
        </div>
      </div>
    </div>
  );
};
