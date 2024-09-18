import React, { useState } from "react";
import Button from "../../shared/Button";
import { IconLeftArrow, IconRightArrow } from "../../iocns/Icons"; // Updated import path

const testimonials = [
  {
    id: 1,
    image1: "/img/user_male.png",
    image2: "/img/user_female.png",
    title: "Two Parties Agree to Transact Using DeRent",
    description:
      "This could be for the purchase and sale of a piece of property, or a simple one-year rental agreement. The parties use the DeRent platform to solidify the terms of their agreement in a DeRent smart contract, which includes whatever terms and conditions the parties agreed to, including dates of payments due, amounts due, length of the agreement, penalties for non-compliance, etc.",
  },
  {
    id: 2,
    image1: "/img/user_female.png",
    image2: "/img/user_male.png",
    title: "Secure and Transparent Transactions",
    description:
      "DeRent provides a secure and transparent way for parties to handle real estate transactions. The platform ensures that all terms and conditions are met before completing the transaction.",
  },
  {
    id: 3,
    image1: "/img/user_female.png",
    image2: "/img/user_male.png",
    title: "Streamlined Agreement Processes",
    description:
      "DeRent streamlines agreement processes by automating compliance and managing terms effectively, making transactions smoother and more reliable.",
  },
  // Add more testimonials as needed
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === testimonials.length - 1;

  return (
    <div className="z-30 pt-32 pb-32 mt-16 sm:mt-24 lg:mt-[410px] 2xl:mt-[575px] px-5 sm:px-10 lg:px-20 bg-white -mb-32">
      <div className="text-center max-w-3xl mx-auto">
        <h4 className="pb-4 font-normal font-display text-2xl 2xl:text-3xl uppercase leading-9 max-sm:leading-tight">
          How Derent simplifies the real estate value chain
        </h4>
        <p className="sm:px-16 max-sm:text-xs max-lg:text-base">
          One simple example of how Derent smart contracts work
        </p>
      </div>
      <div className="relative max-w-[810px] mx-auto mt-16 lg:mt-24 text-center overflow-hidden">
        {/* Slide container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex-shrink-0 w-full">
              <div className="flex mb-6 sm:mb-0 lg:mb-16 justify-center items-center">
                <img src={testimonial.image1} alt="user1" className="w-[150px] sm:w-80 h-[150px] sm:h-80 2xl:w-[414px] 2xl:h-[414px] -mr-6 sm:-mr-10" />
                <img src={testimonial.image2} alt="user2" className="w-[150px] sm:w-80 h-[150px] sm:h-80 2xl:w-[414px] 2xl:h-[414px] -ml-6 sm:-ml-10" />
              </div>
              <h3 className="font-dmsans pb-3 lg:pb-6 tracking-normal max-sm:text-base max-sm:leading-tight text-dark-black">
                {testimonial.title}
              </h3>
              <p className="mb-6">{testimonial.description}</p>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center items-center mt-8 gap-4">
          <button
            onClick={handlePrev}
            disabled={isPrevDisabled}
            className={`px-6 sm:px-8 py-3 sm:py-4 border rounded-full border-gray bg-white`}
          >
            <IconLeftArrow />
          </button>
          {/* Slide count */}
          <div className="text-base font-display underline text-light-gray px-6">
           <span className="text-dark-black"> {currentIndex + 1}</span>/{testimonials.length}
          </div>
          <button
            onClick={handleNext}
            disabled={isNextDisabled}
            className={`px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-green text-white`}
          >
            <IconRightArrow />
          </button>
        </div>

        <Button
          label="PURCHASE PRESALE"
          icon="/img/Money_fill.svg"
          alt="Money_fill"
          onClick={() => {}}
          position="end"
          className="uppercase font-display font-normal z-30 mt-8 max-sm:w-full max-sm:text-sm"
        />
      </div>
    </div>
  );
};

export default Testimonial;
