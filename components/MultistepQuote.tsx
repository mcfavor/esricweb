"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const MultistepQuote = () => {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [insuranceType, setInsuranceType] = useState("");
  const [selectedNeed, setSelectedNeed] = useState("");
  const [showError, setShowError] = useState(false);
  const [showInsuranceError, setShowInsuranceError] = useState(false);
  const [showProductOptionError, setShowProductOptionError] = useState(false);
  const [funeralInsuranceType, setFuneralInsuranceType] = useState("");

  const handleNext = () => {
    if (step === 2 && !firstName.trim()) {
      setShowError(true); // Show error if the input is empty
      return;
    }
    setShowError(false);

    if (step === 3) {
      if (!insuranceType) {
        setShowInsuranceError(true);
        return;
      }
      setShowInsuranceError(false);

      if (step === 3 && insuranceType === "business") {
        // End the flow for "Insurance for my Business"
        alert(
          "Thank you for your interest! Business insurance is not currently available."
        );
        return;
      }
    }

    if (step === 4 && insuranceType === "me") {
      if (!selectedNeed) {
        setShowProductOptionError(true);
        return;
      }
      setShowProductOptionError(false);
    }

    setStep(step + 1);
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("First Name:", firstName);
    console.log("Insurance Type:", insuranceType);
    console.log("Selected Insurance:", selectedNeed);
  };

  const needs = [
    "Funeral Insurance",
    "Investments",
    "Home Insurance",
    "Lifestyle Insurance",
    "Car Insurance",
    "Retirement Annuity",
  ];

  return (
    <div className="form-container">
      {/* <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${(step / 4) * 100}%` }}
        ></div>
      </div> */}

      <AnimatePresence mode="wait">
        {step === 1 && (
          <div className="flex items-center justify-center p-4">
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              }}
              exit={{
                opacity: 0,
                x: -100,
                transition: { duration: 0.6, ease: "easeIn" },
              }}
              className="step flex flex-col items-start text-center max-w-lg mx-auto"
            >
              <h1 className="bold-40 text-blue-50">
                We're so glad you're here!
              </h1>
              <p className="bold-20 text-gray-700">
                Get a quote from us in these three easy steps:
              </p>
              <ol className="regular-20 text-blue-70">
                <li>You'll Tell Us About Yourself</li>
                <li>We Will Recommend a Product</li>
                <li>You Get Your Quote in 2 minutes*</li>
              </ol>
              <div className="flex items-center gap-2">
                <button
                  className="btn_blue_outline rounded-full"
                  onClick={handleNext}
                >
                  Get My Quote
                </button>
                {/* <span className="text-gray-500 text-sm">
                  press <b>Enter ↵</b>
                </span> */}
              </div>
            </motion.div>
          </div>
        )}

        {step === 2 && (
          <div className="flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              }}
              exit={{
                opacity: 0,
                x: -100,
                transition: { duration: 0.6, ease: "easeIn" },
              }}
              className="max-w-lg w-full text-left"
            >
              <p className="text-blue-50 text-sm flex items-center">
                <span className="bold-40">
                  Before we start, may we get your first name?*
                </span>
              </p>
              <p className="text-blue-70 regular-18 mt-2">
                We'll use this on all future communications.
              </p>
              <div className="relative">
                {/* Added a relative wrapper */}
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  placeholder="Type your answer here..."
                  className="peer regular-24 border-none mt-4 w-full bg-transparent py-2 text-gray-700 placeholder-gray-400 focus:outline-none"
                />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-300 transition-all duration-300 peer-focus:h-[2px] peer-focus:bg-yellow-500 peer-focus:font-bold"></div>
              </div>
              <AnimatePresence>
                {showError && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-sm mt-2"
                  >
                    Please enter your name to continue
                  </motion.p>
                )}
              </AnimatePresence>
              <button
                className="btn_blue_outline rounded-full mt-6"
                onClick={handleNext}
              >
                Next
              </button>
            </motion.div>
          </div>
        )}

        {step === 3 && (
          <div className="flex items-start p-4">
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              }}
              exit={{
                opacity: 0,
                x: -100,
                transition: { duration: 0.6, ease: "easeIn" },
              }}
              className="step max-w-lg w-full"
            >
              <p className="text-blue-70">
                <span className="bold-32">
                  Your journey to peace of mind begins here {firstName}.
                </span>
              </p>
              <p className="text-blue-50 bold-40 mt-2">
                What kind of insurance are you interested in?
              </p>
              <div className="options flex flex-row gap-4 mt-4">
                <button
                  className={`option rounded-2xl px-6 py-3 text-left border-blue-70 border hover:bg-blue-70 hover:text-white ${
                    insuranceType === "me" ? "selected" : ""
                  }`}
                  onClick={() => setInsuranceType("me")}
                >
                  Insurance for Me
                </button>
                <button
                  className={`option rounded-2xl px-6 py-3 text-left border-blue-70 border hover:bg-blue-70 hover:text-white ${
                    insuranceType === "business" ? "selected" : ""
                  }`}
                  onClick={() => setInsuranceType("business")}
                >
                  Insurance for my Business
                </button>
              </div>

              <AnimatePresence>
                {showInsuranceError && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-sm mt-2"
                  >
                    Please select an option
                  </motion.p>
                )}
              </AnimatePresence>

              <div className="w-full flex justify-start">
                <button
                  className="btn_blue_outline rounded-full"
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {step === 4 && insuranceType === "me" && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 100 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            }}
            exit={{
              opacity: 0,
              x: -100,
              transition: { duration: 0.6, ease: "easeIn" },
            }}
            className="step"
          >
            <h1 className="bold-32 text-blue-70">
              We've got a lot in our basket for you {firstName}.
            </h1>
            <p className="bold-40 text-blue-50">
              What do you need at the moment?
            </p>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {needs.map((need, index) => (
                <button
                  key={index}
                  className={`option option rounded-2xl px-6 py-3 text-left border-blue-70 border hover:bg-blue-70 hover:text-white ${
                    selectedNeed === need ? "selected" : ""
                  }`}
                  onClick={() => setSelectedNeed(need)}
                >
                  {need}
                </button>
              ))}
            </div>

            <AnimatePresence>
              {showProductOptionError && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-red-500 text-sm mt-2"
                >
                  Please select an option
                </motion.p>
              )}
            </AnimatePresence>

            <div>
              <button
                className="btn_blue_outline rounded-full"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </motion.div>
        )}

        {step === 5 &&
          insuranceType === "me" &&
          selectedNeed === "Funeral Insurance" && (
            <div className="flex items-start p-4">
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                }}
                exit={{
                  opacity: 0,
                  x: -100,
                  transition: { duration: 0.6, ease: "easeIn" },
                }}
                className="step max-w-lg w-full"
              >
                <p className="text-blue-70">
                  <span className="bold-32">
                    {firstName}, I have a couple of cover options available for
                    you.
                  </span>
                </p>
                <p className="text-blue-50 bold-40 mt-2">
                  I'd like to know who we're going to cover.*
                </p>
                <div className="options flex flex-row gap-4 mt-4">
                  <button
                    className={`option rounded-2xl px-6 py-3 text-left border-blue-70 border hover:bg-blue-70 hover:text-white ${
                      funeralInsuranceType === "Funeral Insurance"
                        ? "selected"
                        : ""
                    }`}
                    onClick={() => setFuneralInsuranceType("Just Me")}
                  >
                    Just Me
                  </button>
                  <button
                    className={`option rounded-2xl px-6 py-3 text-left border-blue-70 border hover:bg-blue-70 hover:text-white ${
                      funeralInsuranceType === "Funeral Insurance"
                        ? "selected"
                        : ""
                    }`}
                    onClick={() => setFuneralInsuranceType("My Family and I")}
                  >
                    My Family and I
                  </button>
                  <button
                    className={`option rounded-2xl px-6 py-3 text-left border-blue-70 border hover:bg-blue-70 hover:text-white ${
                      funeralInsuranceType === "Funeral Insurance"
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      setFuneralInsuranceType("A lovely Senior Citizen")
                    }
                  >
                    A lovely Senior Citizen
                  </button>
                </div>

                {/* <AnimatePresence>
                  {showInsuranceError && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-500 text-sm mt-2"
                    >
                      Please select an option
                    </motion.p>
                  )}
                </AnimatePresence> */}

                <div className="w-full flex justify-start">
                  <button
                    className="btn_blue_outline rounded-full"
                    onClick={handleNext}
                  >
                    Next
                  </button>
                </div>
              </motion.div>
            </div>
          )}
      </AnimatePresence>
    </div>
  );
};

export default MultistepQuote;
