import React, { useEffect, useState } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    let year = new Date().getFullYear();
    const difference = +new Date(`2025-04-12`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

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
    <div className="flex text-sm gap-4 items-center align-center justify-center text-[#fff6e4]">
      Countdown 🎉{" "}
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
};

export default Countdown;
