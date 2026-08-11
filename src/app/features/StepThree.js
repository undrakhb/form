"use client";
import { useState, useRef } from "react";
import { Pinecone } from "../Icons/Pinoconelogo";
import { Imageupload } from "../Icons/Imageupload";
import { LeftArrow } from "../Icons/LeftArrow";
import { RightArrow } from "../Icons/RightArrow";

export const StepThree = (props) => {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const [imagePreview, setImagePreview] = useState(null);

  const [dateError, setDateError] = useState("");
  const [imageError, setImageError] = useState("");

  const fileInputRef = useRef(null);

  const handleDateChange = (e) => {
    setDateOfBirth(e.target.value);
    setDateError("");
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);

      setImagePreview(URL.createObjectURL(file));
      setImageError("");
    }
  };

  const validateDate = (date) => {
    if (!date) {
      return "Date of birth is required";
    }
    return "";
  };

  const validateImage = (image) => {
    if (!image) {
      return "Profile image is required";
    }
    return "";
  };

  const handleStep = () => {
    const dError = validateDate(dateOfBirth);
    const imgError = validateImage(profileImage);

    setDateError(dError);
    setImageError(imgError);

    if (!dError && !imgError) {
      if (props.handleNextStep) {
        props.handleNextStep({
          dateOfBirth,
          profileImage,
        });
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
      <div className="w-120 h-163.75 bg-amber-50 flex justify-between flex-col items-center py-[32px]">
        <div className="w-96.25 flex justify-evenly flex-col">
          <div className="w-96.25 h-32.25 flex flex-col">
            <Pinecone />
            <span className="text-2xl">Join Us! 😎 </span>
            <p className="text-gray-400">
              Please provide all current information accurately.
            </p>
          </div>

          <span className="flex mb-1">
            Date of Birth <span className="text-red-700">*</span>
          </span>
          <input
            className="border-gray-300 border-1 py-2 w-full mb-1 px-2"
            placeholder="--/--/--"
            type="date"
            value={dateOfBirth}
            onChange={handleDateChange}
          />
          {dateError && (
            <span className="text-red-600 text-xs mb-3">{dateError}</span>
          )}

          <span className="mb-2">
            Profile image<span className="text-red-700">*</span>
          </span>

          <div className="w-[385px] h-[180px] border-1 border-gray-400 flex flex-col items-center justify-center relative overflow-hidden">
            <button
              type="button"
              onClick={handleImageClick}
              className="flex flex-col items-center justify-center cursor-pointer w-full h-full"
            >
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Profile Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <>
                  <Imageupload />
                  <span className="text-sm text-gray-500 mt-2">Add image</span>
                </>
              )}
            </button>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              hidden
            />
          </div>
          {imageError && (
            <span className="text-red-600 text-xs mt-1">{imageError}</span>
          )}
        </div>

        <div className="flex gap-2 w-[416px] h-[44px]">
          <button
            type="button"
            onClick={handleBackButton}
            className="w-[128px] h-[44px] border-1 border-gray-400 items-center justify-center flex"
          >
            <LeftArrow></LeftArrow> Back
          </button>
          <button
            type="button"
            onClick={handleStep}
            className="bg-black flex justify-center items-center w-[280px] h-[44px]"
          >
            <div className="text-white text-1.5xl">Submit 3/3</div>
            <RightArrow />
          </button>
        </div>
      </div>
    </div>
  );
};
