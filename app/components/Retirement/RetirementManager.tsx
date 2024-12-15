import { useEffect, useState } from "react";
import { CountdownDisplay } from "./CountdownDisplay";
import { DateSelector } from "./DateSelector";

const retirementDateLocalStorageKey = "retirementDate";

function getInitialRetirementDate() {
  const savedRetirementDate = localStorage.getItem(
    retirementDateLocalStorageKey
  );

  if (savedRetirementDate) {
    return new Date(savedRetirementDate);
  }

  return new Date("2069-01-01");
}

export function RetirementManager() {
  const [retirementDate, setRetirementDate] = useState<Date>(new Date());

  function updateRetirementDate(newDate: Date) {
    localStorage.setItem(retirementDateLocalStorageKey, newDate.toDateString());
    setRetirementDate(newDate);
  }

  useEffect(() => {
    setRetirementDate(getInitialRetirementDate());
  }, []);

  return (
    <div className="flex flex-col h-screen align-middle justify-around">
      <CountdownDisplay targetDate={retirementDate} />
      <DateSelector setDate={updateRetirementDate} />
    </div>
  );
}
