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
import { StepThree } from "./features/StepThree";

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
        
      

      {thirdStep && (<StepThree steps={steps} handleNextStep={handleNextStep} handleBackButton={handleBackButton}/> )}

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
