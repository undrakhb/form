"use client";
import { useState } from "react";
import { Pinecone } from "../Icons/Pinoconelogo";
import { RightArrow } from "../Icons/RightArrow";

const ALREADY_TAKEN_USER_NAME = ["bat", "bold", "test"];

const letters = "qwertyuioplkjhgfdaszxcvbnm";

const checkEachCharacter = (value) => {
  for (let i = 0; i < value.length; i++) {
    if (!letters.includes(value[i])) {
      return false;
    }
  }
  return true;
};

export const StepOne = (props) => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const handleFirstNameInputChange = (e) => {
    setFirstName(e.target.value);
  };
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const handleLastNameInputChange = (e) => {
    setLastName(e.target.value);
  };

  const [userName, setUsername] = useState("");
  const [userNameError, setUsernameError] = useState("");
  const handleUsernameInputChange = (e) => {
    setUsername(e.target.value);
  };

  const validateFirstName = (firstName) => {
    const allLowerFirstName = firstName.trim().toLowerCase();
    if (allLowerFirstName === "") {
      return "First Name Required";
    }
    if (!checkEachCharacter(allLowerFirstName)) {
      return "First name cannot contain special characters or numbers";
    } else {
      return "";
    }
  };

  const validateLastName = (lastName) => {
    const allLowerLastName = lastName.trim().toLowerCase();
    if (allLowerLastName.length === 0) {
      return "Last Name Required";
    }
    if (!checkEachCharacter(allLowerLastName)) {
      return "Last name cannot contain special characters or numbers";
    } else {
      return "";
    }
  };

  const validateUsername = (userName) => {
    const allLowerUserName = userName.trim().toLowerCase();
    if (allLowerUserName.length === 0) {
      return "Username required";
    }
    if (!checkEachCharacter(allLowerUserName)) {
      return "Username only contain letters";
    }
    if (ALREADY_TAKEN_USER_NAME.includes(allLowerUserName)) {
      return "This username is already taken.";
    }
    return "";
  };

  const handleNextButtonClick = () => {
    const firstError = validateFirstName(firstName);
    const lastError = validateLastName(lastName);
    const userError = validateUsername(userName);

    setFirstNameError(firstError);
    setLastNameError(lastError);
    setUsernameError(userError);

    if (firstError === "" && lastError === "" && userError === "") {
      props.handleNextStep();
    }
  };

  return (
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
          First Name <span className="text-red-700">*</span>
        </span>
        <input
          className="border p-2 rounded-lg mt-2 w-full "
          placeholder="Enter First name"
          value={firstName}
          onChange={handleFirstNameInputChange}
        />
        <span className="text-red-600 text-sm">{firstNameError}</span>
        <span>
          Last Name<span className="text-red-700">*</span>
        </span>
        <input
          className="border p-2 rounded-lg mt-2 w-full"
          placeholder="Enter Last name"
          onChange={handleLastNameInputChange}
        />
        <span className="text-red-600 text-sm">{lastNameError}</span>
        <span>
          Username<span className="text-red-700">*</span>
        </span>
        <input
          className="border p-2 rounded-lg mt-2 w-full"
          placeholder="Enter Username"
          value={userName}
          onChange={handleUsernameInputChange}
        />
        <span className="text-red-600 text-sm">{userNameError}</span>
      </div>
      <button
        onClick={handleNextButtonClick}
        className="w-104 h-11 bg-black flex justify-center items-center"
      >
        <div className="text-white text-1.5xl" onClick={handleNextButtonClick}>
          Continue {props.steps}/3
        </div>
        <RightArrow />
      </button>
    </div>
  );
};
