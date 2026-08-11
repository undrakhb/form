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
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setPhoneNumber(e.target.value);
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
    const value = password.trim();
    if (value.length === 0) {
      return "Password Required";
    } else if (value.length < 8) {
      return "Password at least 8 characters";
    }
    return "";
  };

  const validateConfirmPassword = (confirmPass) => {
    const value = confirmPass.trim();
    if (value.length === 0) {
      return "Please confirm your password";
    } else if (value !== password) {
      return "Passwords do not match";
    }
    return "";
  };

  const handleNextStep = () => {
    const emailErr = validateEmail(email);
    const phoneErr = validatePhone(phoneNumber);
    const passwordErr = validatePassword(password);
    const confirmPasswordErr = validateConfirmPassword(confirmPassword);

    setEmailError(emailErr);
    setPhoneError(phoneErr);
    setPasswordError(passwordErr);
    setConfirmPasswordError(confirmPasswordErr);

    if (!emailErr && !phoneErr && !passwordErr && !confirmPasswordErr) {
      if (props.handleNextStep) {
        props.handleNextStep();
      }
    }
  };

  const handleBackButton = () => {
    if (props.handleBackButton) {
      props.handleBackButton();
    }
  };

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
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="border-gray-300 border-1 py-2 px-2"
            placeholder="Enter email"
          />
          {emailError && (
            <span className="text-red-600 text-xs">{emailError}</span>
          )}

          <span>
            Phone number<span className="text-red-700">*</span>
          </span>
          <input
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneChange}
            className="border-gray-300 border-1 py-2 px-2"
            placeholder="Enter phone number"
          />
          {phoneError && (
            <span className="text-red-600 text-xs">{phoneError}</span>
          )}

          <span>
            Password<span className="text-red-700">*</span>
          </span>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="border-gray-300 border-1 py-2 px-2"
            placeholder="Enter password"
          />
          {passwordError && (
            <span className="text-red-600 text-xs">{passwordError}</span>
          )}

          <span className="flex">
            Confirm password <span className="text-red-700">*</span>
          </span>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="border-gray-300 border-1 py-2 px-2"
            placeholder="Re-enter password"
          />
          {confirmPasswordError && (
            <span className="text-red-600 text-xs">{confirmPasswordError}</span>
          )}
        </div>

        <div className="flex gap-2 w-[416px] h-[44px]">
          <button
            type="button"
            onClick={handleBackButton}
            className="w-[128px] h-[44px] border-1 border-gray-400 items-center justify-center flex"
          >
            <LeftArrow /> Back
          </button>
          <button
            type="button"
            onClick={handleNextStep}
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

// "use client";
// import { useState } from "react";
// import { Pinecone } from "../Icons/Pinoconelogo";
// import { RightArrow } from "../Icons/RightArrow";
// import { LeftArrow } from "../Icons/LeftArrow";

// export const StepTwo = (props) => {
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const [emailError, setEmailError] = useState("");
//   const [phoneError, setPhoneError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [confirmPasswordError, setConfirmPasswordError] = useState("");

//   const handleEmailChange = (e) => setEmail(e.target.value);
//   const handlePhoneChange = (e) => setPhone(e.target.value);
//   const handlePasswordChange = (e) => setPassword(e.target.value);
//   const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

//   const validateEmail = (email) => {
//     const value = email.trim();
//     if (value.length === 0) {
//       return "Email is required";
//     } else if (!value.includes("@") || !value.includes(".")) {
//       return "Please enter valid email address";
//     }
//     return "";
//   };

//   const validatePhone = (phone) => {
//     const value = phone.trim();
//     if (value.length === 0) {
//       return "Phone number required";
//     } else if (value.length < 8) {
//       return "Phone number must be at least 8 digits";
//     }
//     return "";
//   };

//   const validatePassword = (password) => {
//     if (value.length === 0) {
//       return "Password Required";
//     } else if (value.length < 8) {
//       return "Password at least 8 characters";
//     }
//     return "";
//   };
//   const validateConfirmPassword = (confirmpassword) => {
//     const value = confirmPassword.trim();
//     if (value === 0) {
//       return "Please confirm your password";
//     } else if (value !== password) {
//       return "Password do not match"
//     }
//     return ""
//   };

//   const handleNextStep = () => {
//     const emailError = validateEmail(email)
//     const phoneError = validatePhone(phone)
//     const passwordError = validatePassword(password)
//     const confirmPassword = validateConfirmPassword(confirmPassword)

//     setEmailError(emailError)
//     setPhoneError(phoneError)
//     setPasswordError(passwordError)
//     setConfirmPasswordError(confirmPasswordError)

//     if (!emailError && !phoneError && !passwordError && !confirmPassword ) {
//       props.handleNextStep()
//     }
//   }

//    const handleBackButton = () => {
//       if (props.handleBackButton) {
//         props.handleBackButton()
//       }
//     }

//   return (
//     <div>
//       <div className="w-120 h-163.75 bg-amber-50 flex justify-between flex-col items-center py-8">
//         <div className="w-96.25 h-104 flex justify-evenly flex-col">
//           <div className="w-96.25 h-32.25 flex flex-col">
//             <Pinecone />
//             <span className="text-2xl">Join Us! 😎 </span>
//             <p className="text-gray-400">
//               Please provide all current information accurately.
//             </p>
//           </div>
//           <span className="flex">
//             Email <span className="text-red-700">*</span>
//           </span>
//           <input
//             className="border-gray-300 border-1 py-2"
//             placeholder="Enter email"
//           />
//           <span>
//             Phone number<span className="text-red-700">*</span>
//           </span>
//           <input
//             className="border-gray-300 border-1 py-2"
//             placeholder="Enter phone number"
//           />
//           <span>
//             Password<span className="text-red-700">*</span>
//           </span>
//           <input
//             className="border-gray-300 border-1 py-2"
//             placeholder="Enter password"
//           />
//           <span className="flex">
//             Confirm password <span className="text-red-700">*</span>
//           </span>
//           <input
//             className="border-gray-300 border-1 py-2"
//             placeholder="Re-enter password"
//           />
//         </div>
//         <div className="flex gap-2 w-[416px] h-[44px]">
//           <button
//             onChange={handleBackButton}
//             className="w-[128px] h-[44px] border-1 border-gray-400 items-center justify-center flex"
//           >
//             <LeftArrow></LeftArrow> Back
//           </button>
//           <button
//             onChange={handleNextStep}
//             className="bg-black flex justify-center items-center w-[280px] h-[44px]"
//           >
//             <div className="text-white text-1.5xl">Continue 2/3</div>
//             <RightArrow />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
