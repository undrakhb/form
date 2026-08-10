"use client";
import Image from "next/image";
import { Pinecone } from "./Icons/Pinoconelogo";
import { RightArrow } from "./Icons/RightArrow";
import { useState, useRef } from "react";
import { LeftArrow } from "./Icons/LeftArrow";
import { Dateofbirth } from "./Icons/Dateofbirth";
import { Imageupload } from "./Icons/Imageupload";
import { StepOne } from "./features/StepOne";
import { StepTwo } from "./features/StepTwo";

export default function Home() {
  const [steps, setSteps] = useState(1);
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  const firstStep = steps === 1;
  const secondStep = steps === 2;
  const thirdStep = steps === 3;
  const final = steps === 4;

  const handleNextStep = () => {
    setSteps(steps + 1);
  };

  const handleBackButton = () => {
    setSteps(steps - 1);
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(e.target.files[0]);
    }
  };

  return (
    <div className="w-screen h-screen justify-center items-center flex bg-black">
      {firstStep && <StepOne steps={steps} handleNextStep={handleNextStep} />}

      {secondStep && (<StepTwo steps={steps} handleNextStep={handleNextStep} handleBackButton={handleBackButton}/>)}
        
      

      {thirdStep && (
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
                className="border-gray-300 border-1 py-2 w-full mb-4"
                placeholder="--/--/--"
                type="date"
              />
              <span className="mb-2">
                Profile image<span className="text-red-700">*</span>
              </span>

              <div className="w-[385px] h-[180px] border-1 border-gray-400 flex flex-col items-center justify-center relative">
                <button
                  type="button"
                  onClick={handleImageClick}
                  className="flex flex-col items-center justify-center cursor-pointer"
                >
                  <Imageupload />
                  <span className="text-sm text-gray-500 mt-2">
                    {profileImage ? profileImage.name : "Add image"}
                  </span>
                </button>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  hidden
                />
              </div>
            </div>

            <div className="flex gap-2 w-[416px] h-[44px]">
              <button
                onClick={handleBackButton}
                className="w-[128px] h-[44px] border-1 border-gray-400 items-center justify-center flex"
              >
                <LeftArrow></LeftArrow> Back
              </button>
              <button
                onClick={handleStep}
                className="bg-black flex justify-center items-center w-[280px] h-[44px]"
              >
                <div className="text-white text-1.5xl">Continue 3/3</div>
                <RightArrow />
              </button>
            </div>
          </div>
        </div>
      )}

      {final && (
        <div>
          <div className="w-120 h-[193px] bg-amber-50 flex justify-between flex-col items-center py-[32px]">
            <div className="w-96.25 h-104 flex justify-evenly flex-col">
              <div className="w-96.25 h-32.25 flex flex-col">
                <Pinecone />
                <span className="text-3xl">You're All Set 🔥 </span>
                <p className="text-gray-400">
                  We have received your submission. Thank you!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
