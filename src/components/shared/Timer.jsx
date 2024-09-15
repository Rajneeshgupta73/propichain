import React, { useState, useEffect } from 'react';

function Timer() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const deadline = new Date('2024-09-30T00:00:00');

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

            <div className="flex text-3xl font-bold">
                <div className="flex items-center">
                    <h3 className='bg-dark-black p-8 rounded-[32px] text-white w-[123px]'>{formatNumber(timeLeft.days)}</h3>
                    <h3 className='mx-2'>:</h3>
                </div>
                <div className="flex items-center">
                <h3 className='bg-dark-black p-8 rounded-[32px] text-white w-[123px]'>{formatNumber(timeLeft.hours)}</h3>
                    <h3 className='mx-2'>:</h3>
                </div>
                <div className="flex items-center">
                <h3 className='bg-dark-black p-8 rounded-[32px] text-white w-[123px]'>{formatNumber(timeLeft.minutes)}</h3>
                    <h3 className='mx-2'>:</h3>
                </div>
                <div className="flex items-center">
                <h3 className='bg-dark-black p-8 rounded-[32px] text-white w-[123px]'>{formatNumber(timeLeft.seconds)}</h3>
                </div>
            </div>
    );
}

export default Timer;
