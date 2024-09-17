import React, { useState, useEffect } from "react";

function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const deadline = new Date("2024-09-30T00:00:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = deadline - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  // Helper function to format numbers with leading zero
  const formatNumber = (number) => {
    return number < 10 ? `0${number}` : number;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex text-3xl font-bold max-lg:justify-center">
      <div className="flex">
        <div className="text-center">
            <h3 className="bg-dark-black px-4 sm:px-6 py-3 sm:py-5 lg:py-7 2xl:p-8 rounded-2xl sm:rounded-3xl lg:rounded-[32px] text-white w-[55px] sm:w-20 lg:w-24 2xl:w-[123px] text-center leading-tight max-sm:text-sm max-lg:text-base">
              {formatNumber(timeLeft.days)}{" "}
            </h3>
            <p className="text-[10px] sm:text-sm uppercase font-display pt-1">Days</p>
          </div>
          <h3 className="mx-2 mt-1.5 sm:mt-4">:</h3>
     
        
      </div>
      <div className="flex">
        <div className="text-center">
        <h3 className="bg-dark-black px-4 sm:px-6 py-3 sm:py-5 lg:py-7 2xl:p-8 rounded-2xl sm:rounded-3xl lg:rounded-[32px] text-white w-[55px] sm:w-20 lg:w-24 2xl:w-[123px] text-center leading-tight max-sm:text-sm max-lg:text-base">
            {formatNumber(timeLeft.hours)}
          </h3>
          <p className="text-[10px] sm:text-sm uppercase font-display pt-1">Hours</p>
        </div>
        <h3 className="mx-2 mt-1.5 sm:mt-4">:</h3>
        
      </div>
      <div className="flex">
      <div className="text-center">
        
      <h3 className="bg-dark-black px-4 sm:px-6 py-3 sm:py-5 lg:py-7 2xl:p-8 rounded-2xl sm:rounded-3xl lg:rounded-[32px] text-white w-[55px] sm:w-20 lg:w-24 2xl:w-[123px] text-center leading-tight max-sm:text-sm max-lg:text-base">
            {formatNumber(timeLeft.minutes)}
          </h3>
          <p className="text-[10px] sm:text-sm uppercase font-display pt-1">Minutes</p>
        </div>
        <h3 className="mx-2 mt-1.5 sm:mt-4">:</h3>
        
      </div>
      <div className="flex items-center">
        <div className="text-center">
        <h3 className="bg-dark-black px-4 sm:px-6 py-3 sm:py-5 lg:py-7 2xl:p-8 rounded-2xl sm:rounded-3xl lg:rounded-[32px] text-white w-[55px] sm:w-20 lg:w-24 2xl:w-[123px] text-center leading-tight max-sm:text-sm max-lg:text-base">
            {formatNumber(timeLeft.seconds)}
          </h3>
          <p className="text-[10px] sm:text-sm uppercase font-display pt-1">Seconds</p>
        </div>
      </div>
    </div>
  );
}

export default Timer;
