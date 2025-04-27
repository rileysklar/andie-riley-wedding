import React, { useEffect, useState } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isWeddingPast, setIsWeddingPast] = useState(false);

  function calculateTimeLeft() {
    const weddingDate = new Date(`2025-05-04T16:00:00-05:00`);
    const difference = weddingDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      // Counting down to wedding
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      // Counting up since wedding
      const timeSince = Math.abs(difference);
      timeLeft = {
        days: Math.floor(timeSince / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeSince / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((timeSince / 1000 / 60) % 60),
        seconds: Math.floor((timeSince / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      // Use the same wedding date as in calculateTimeLeft
      const weddingDate = new Date(`2025-05-04T16:00:00-05:00`);
      setIsWeddingPast(weddingDate - new Date() <= 0);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval, index, array) => {
    if (!timeLeft[interval]) {
      return;
    }

    let unit = interval[0];
    if (interval === "days") unit = "days";
    else if (interval === "hours") unit = "hrs";
    else if (interval === "minutes") unit = "m";
    else if (interval === "seconds") unit = "s";

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {unit}
        {index !== array.length - 1 ? " " : ""}
      </span>
    );
  });

  return (
    <div className="flex flex-col items-center">
      {isWeddingPast ? "Since the wedding 💍" : "Countdown until the wedding 🎉"}{" "}
      <div className="flex text-lg gap-4 items-center align-center justify-center text-[#fff] mb-4">
        {timerComponents}
      </div>
    </div>
  );
};

export default Countdown;