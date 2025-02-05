import { useEffect, useState } from "react";

type CountdownDisplayProps = {
  targetDate: Date;
};

function pad(number: number, howMuch: number = 2) {
  return number.toString().padStart(howMuch, "0");
}

function formatTime(time: number) {
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  const days = Math.floor((time / (1000 * 60 * 60 * 24)) % 365);
  const years = Math.floor(time / (1000 * 60 * 60 * 24 * 365));

  return {
    seconds: pad(seconds),
    minutes: pad(minutes),
    hours: pad(hours),
    days: pad(days),
    years: pad(years),
  };
}

type TimeDisplay = {
  seconds: string;
  minutes: string;
  hours: string;
  days: string;
  years: string;
};

export function CountdownDisplay({ targetDate }: CountdownDisplayProps) {
  const [timeDisplay, setTimeDisplay] = useState<null | TimeDisplay>(null);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const currentTime = new Date().getTime();
      const eventTime = targetDate.getTime();
      let remainingTime = eventTime - currentTime;

      if (remainingTime <= 0) {
        remainingTime = 0;
        clearInterval(countdownInterval);
      }

      setTimeDisplay(formatTime(remainingTime));
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [targetDate, timeDisplay]);

  if (timeDisplay === null) {
    return (
      <div className="h-[260px] flex flex-col justify-center align-middle text-center">
        <div>calculating...</div>
      </div>
    );
  }
  const { seconds, minutes, hours, days, years } = timeDisplay;

  return (
    <div id="countdown" className="text-center px-4">
      <div className="text-7xl mb-2 flex justify-center gap-4">
        <span>{years}</span>
        <span>years</span>
      </div>
      <div className="flex justify-center gap-4 mb-2">
        <div className="text-xl">{days} days</div>
        <div className="text-xl">{hours} hours</div>
        <div className="text-xl">{minutes} minutes</div>
      </div>
      <div className="text-6xl flex justify-center gap-4">
        <span>{seconds}</span>
        <span>seconds</span>
      </div>
      <div className="mt-6">left until</div>
      <div className="text-3xl">
        {targetDate.getDate()}.{targetDate.getMonth() + 1}.
        {targetDate.getFullYear()}
      </div>
    </div>
  );
}
