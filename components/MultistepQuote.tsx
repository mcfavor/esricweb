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
  const [showFuneralOptionError, setShowFuneralOptionError] = useState(false);
  const [funeralcoverAmount, funeralsetCoverAmount] = useState(5000); // Default cover amount
  const [funeralmaxCoverAmount, funeralsetMaxCoverAmount] = useState(50000); // Default max cover amount
  const [funeralshowCoverAmountError, funeralsetShowCoverAmountError] =
    useState(false);

  const [selectedTombstoneBenefit, setSelectedTombstoneBenefit] = useState<
    string | null
  >(null); // "30%" or "50%"
  const [additionalBenefit, setAdditionalBenefit] = useState(false); // true or false
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showPrice, setShowPrice] = useState(false); // To toggle between contact form and price display

  const priceTable = {
    5000: { basic: 16.0, "30%": null, "50%": null },
    10000: { basic: 24.0, "30%": 33.0, "50%": 35.0 },
    15000: { basic: 37.0, "30%": 50.0, "50%": 53.0 },
    20000: { basic: 49.0, "30%": 65.0, "50%": 70.0 },
    25000: { basic: 61.0, "30%": 80.0, "50%": 88.0 },
    30000: { basic: 74.0, "30%": 93.0, "50%": 106.0 },
    35000: { basic: 86.0, "30%": 109.0, "50%": 123.0 },
    40000: { basic: 98.0, "30%": 124.0, "50%": 141.0 },
    45000: { basic: 111.0, "30%": 140.0, "50%": 159.0 },
    50000: { basic: 124.0, "30%": 153.0, "50%": 177.0 },
  };

  const calculateTombstonePrice = (coverAmount, percentage) => {
    return priceTable[coverAmount]?.[percentage] || 0;
  };

  const riders = [
    {
      id: "30-tombstone",
      label: "30% Tombstone Benefit",
      description: "Adds 30% of the cover amount for tombstone expenses.",
      price: calculateTombstonePrice(funeralcoverAmount, "30%"),
    },
    {
      id: "50-tombstone",
      label: "50% Tombstone Benefit",
      description: "Adds 50% of the cover amount for tombstone expenses.",
      price: calculateTombstonePrice(funeralcoverAmount, "50%"),
    },
    {
      id: "additional-benefit",
      label: "Additional Benefit",
      description:
        "Pays E1,000 worth of groceries, E300 electricity, and E200 airtime.",
      price: 5.7, // Fixed price for additional benefit
    },
  ];

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

    if (
      step === 5 &&
      insuranceType === "me" &&
      selectedNeed === "Funeral Insurance"
    ) {
      if (!funeralInsuranceType) {
        setShowFuneralOptionError(true); // Show error if no option is selected
        return;
      }
      setShowFuneralOptionError(false); // Hide error if an option is selected
    }

    if (funeralInsuranceType === "A lovely Senior Citizen") {
      funeralsetMaxCoverAmount(20000); // Max cover for Senior Citizen
    } else {
      funeralsetMaxCoverAmount(50000); // Max cover for "Just Me" and "My Family and I"
    }

    if (
      step === 6 &&
      insuranceType === "me" &&
      selectedNeed === "Funeral Insurance"
    ) {
      if (
        funeralcoverAmount < 5000 ||
        funeralcoverAmount > funeralmaxCoverAmount
      ) {
        funeralsetShowCoverAmountError(true);
        return;
      }
      // Proceed to the next step
      funeralsetShowCoverAmountError(false);
    }

    if (
      step === 7 &&
      insuranceType === "me" &&
      selectedNeed === "Funeral Insurance"
    ) {
      if (selectedTombstoneBenefit && additionalBenefit) {
        alert("You can only select one Tombstone Benefit.");
        return;
      }
      // Proceed to the next step
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

  const funeral_options = [
    "Just Me",
    "My Family and I",
    "A lovely Senior Citizen",
  ];

  return (
    <div className="">
      {/* <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${(step / 4) * 100}%` }}
        ></div>
      </div> */}

      <AnimatePresence mode="wait">
        {step === 1 && (
          <div className="flex items-center justify-center p-4 form-container">
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
          <div className="flex items-center justify-center p-4 form-container">
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
          <div className="flex items-start p-4 form-container">
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
          <div className="form-container">
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
          </div>
        )}

        {step === 5 &&
          insuranceType === "me" &&
          selectedNeed === "Funeral Insurance" && (
            <div className="flex items-start p-4 form-container">
              <motion.div
                key="step5"
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
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {funeral_options.map((option, index) => (
                    <button
                      key={index}
                      className={`option rounded-2xl px-5 py-3 text-left border-blue-70 border hover:bg-blue-70 hover:text-white ${
                        funeralInsuranceType === option ? "selected" : ""
                      }`}
                      onClick={() => setFuneralInsuranceType(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                <AnimatePresence>
                  {showFuneralOptionError && (
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

                <div className="w-full flex justify-start mt-6">
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

        {step === 6 &&
          insuranceType === "me" &&
          selectedNeed === "Funeral Insurance" && (
            <div className="flex justify-center w-full p-4 form-container">
              <motion.div
                key="step6"
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
                className="w-full max-w-lg"
              >
                <div className="space-y-4">
                  <h2 className="text-blue-70 bold-32">
                    {firstName}, how much cover would you like?
                  </h2>

                  <p className="text-blue-50 bold-40">
                    Slide to select your desired cover amount.
                  </p>

                  {/* Slider Container */}
                  <div className="mt-8 w-full">
                    {/* Display Selected Cover Amount */}
                    <p className="text-blue-70 bold-32 text-center mb-4">
                      E {funeralcoverAmount.toLocaleString()}
                    </p>

                    {/* Slider */}
                    <input
                      type="range"
                      min="5000"
                      max={funeralmaxCoverAmount}
                      step="5000"
                      value={funeralcoverAmount}
                      onChange={(e) =>
                        funeralsetCoverAmount(Number(e.target.value))
                      }
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      style={{
                        width: "100%",
                        minWidth: "100%",
                        maxWidth: "100%",
                      }}
                    />

                    {/* Slider Labels */}
                    <div className="flex justify-between text-gray-500 regular-16 mt-2">
                      <span>E 5,000</span>
                      <span>E {funeralmaxCoverAmount.toLocaleString()}</span>
                    </div>
                  </div>

                  <AnimatePresence>
                    {funeralshowCoverAmountError && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-500 text-sm mt-2 text-center"
                      >
                        Please select a valid cover amount.
                      </motion.p>
                    )}
                  </AnimatePresence>

                  {/* Next Button */}
                  <div className="w-full mt-8">
                    <button
                      className="btn_blue_outline rounded-full mt-2"
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

        {step === 7 &&
          insuranceType === "me" &&
          selectedNeed === "Funeral Insurance" && (
            <div className="flex justify-center w-full p-4 funeral-form-container">
              <motion.div
                key="step7"
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
                className="w-full max-w-lg"
              >
                <div className="space-y-4">
                  <h2 className="text-blue-70 bold-32">
                    {firstName}, would you like to add optional extras?
                  </h2>

                  <p className="text-blue-50 bold-32">
                    Select the optional riders you'd like to include.
                  </p>

                  {/* Riders List */}
                  <div className="space-y-6">
                    {riders.map((rider) => (
                      <div
                        key={rider.id}
                        className={`p-4 border rounded-lg ${
                          (selectedTombstoneBenefit === rider.label ||
                            (rider.id === "additional-benefit" &&
                              additionalBenefit)) &&
                          "border-blue-500 bg-blue-50"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-blue-70 bold-24">
                              {rider.label}
                            </h3>
                            <p className="text-gray-500 regular-18">
                              {rider.description}
                            </p>
                          </div>
                          <div className="flex items-center space-x-4">
                            {/* <span className="text-blue-70 bold-24">
                              E{" "}
                              {rider.price !== null
                                ? rider.price.toFixed(2)
                                : "N/A"}
                            </span> */}
                            <input
                              type="checkbox"
                              checked={
                                selectedTombstoneBenefit === rider.label ||
                                (rider.id === "additional-benefit" &&
                                  additionalBenefit)
                              }
                              onChange={() => {
                                if (rider.id === "additional-benefit") {
                                  setAdditionalBenefit(!additionalBenefit);
                                } else {
                                  setSelectedTombstoneBenefit(
                                    selectedTombstoneBenefit === rider.label
                                      ? null
                                      : rider.label
                                  );
                                }
                              }}
                              className="w-5 h-5 rounded border-blue-500 text-blue-500 focus:ring-blue-500"
                              disabled={rider.price === null} // Disable if price is null
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Next Button */}
                  <div className="w-full mt-8">
                    <button
                      className="btn_blue_outline rounded-full mt-2"
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

        {step === 8 &&
          insuranceType === "me" &&
          selectedNeed === "Funeral Insurance" &&
          !showPrice && ( // Show contact form if showPrice is false
            <div className="flex justify-center w-full p-4 form-container">
              <motion.div
                key="step8"
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
                className="w-full max-w-lg"
              >
                <div className="space-y-4">
                  <h2 className="text-blue-70 bold-32">
                    {firstName}, how can we contact you?
                  </h2>

                  <p className="text-blue-50 bold-40">
                    Please provide your email or phone number so we can share
                    your quote.
                  </p>

                  {/* Contact Form */}
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="email" className="text-blue-70 bold-24">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="text-blue-70 bold-24">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your phone number"
                        className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="w-full mt-8">
                    <button
                      className="btn_blue_outline rounded-full mt-2"
                      onClick={() => {
                        if (email || phone) {
                          setShowPrice(true); // Show the price after submitting contact info
                        } else {
                          alert("Please provide your email or phone number.");
                        }
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

        {step === 8 &&
          insuranceType === "me" &&
          selectedNeed === "Funeral Insurance" &&
          showPrice && ( // Show price if showPrice is true
            <div className="flex justify-center w-full p-4 funeral-form-container">
              <motion.div
                key="step8-price"
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
                className="w-full max-w-lg"
              >
                <div className="space-y-4">
                  <h2 className="text-blue-70 bold-32">
                    {firstName}, here’s your quote:
                  </h2>

                  <p className="text-blue-50 bold-40">
                    Based on your selections, your premium is:
                  </p>

                  {/* Price Breakdown */}
                  <div className="space-y-6">
                    <div className="p-4 border rounded-lg">
                      <h3 className="text-blue-70 bold-24">Basic Premium</h3>
                      <p className="text-gray-500 regular-18">
                        Cover Amount: E {funeralcoverAmount.toLocaleString()}
                      </p>
                      <p className="text-blue-70 bold-24">
                        E{" "}
                        {calculateTombstonePrice(
                          funeralcoverAmount,
                          "basic"
                        ).toFixed(2)}
                      </p>
                    </div>

                    {selectedTombstoneBenefit && (
                      <div className="p-4 border rounded-lg">
                        <h3 className="text-blue-70 bold-24">
                          {selectedTombstoneBenefit}
                        </h3>
                        <p className="text-gray-500 regular-18">
                          Additional coverage for tombstone expenses.
                        </p>
                        <p className="text-blue-70 bold-24">
                          E{" "}
                          {calculateTombstonePrice(
                            funeralcoverAmount,
                            selectedTombstoneBenefit
                          ).toFixed(2)}
                        </p>
                      </div>
                    )}

                    {additionalBenefit && (
                      <div className="p-4 border rounded-lg">
                        <h3 className="text-blue-70 bold-24">
                          Additional Benefit
                        </h3>
                        <p className="text-gray-500 regular-18">
                          Pays E1,000 worth of groceries, E300 electricity, and
                          E200 airtime.
                        </p>
                        <p className="text-blue-70 bold-24">E 5.70</p>
                      </div>
                    )}

                    {/* Total Price */}
                    <div className="p-4 border rounded-lg bg-blue-50">
                      <h3 className="text-blue-70 bold-32">
                        Total Premium p/m
                      </h3>
                      <p className="text-blue-70 bold-32">
                        E{" "}
                        {(
                          calculateTombstonePrice(funeralcoverAmount, "basic") +
                          (selectedTombstoneBenefit
                            ? calculateTombstonePrice(
                                funeralcoverAmount,
                                selectedTombstoneBenefit
                              )
                            : 0) +
                          (additionalBenefit ? 5.7 : 0)
                        ).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Get Started Button */}
                  <div className="w-full mt-8">
                    <button
                      className="btn_blue_outline rounded-full mt-2"
                      onClick={() => {
                        // Handle the "Get Started" action
                        alert("Thank you! We’ll contact you shortly.");
                      }}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
      </AnimatePresence>
    </div>
  );
};

export default MultistepQuote;
