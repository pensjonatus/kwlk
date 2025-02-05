import { useEffect, useState } from "react";
import { DateSelector } from "../DateSelector";
import { CountdownDisplay } from "./CountdownDisplay";
import { RetirementAgeSelector } from "./RetirementAgeSelector";

const dateOfBirthLocalStorageKey = "dateOfBirth";

function getRetirementDate(dateOfBirth: Date, age: number) {
  return new Date(dateOfBirth.setFullYear(dateOfBirth.getFullYear() + age));
}

export function RetirementManager() {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [age, setAge] = useState(65);

  function updateDateOfBirth(newDate: string) {
    localStorage.setItem(dateOfBirthLocalStorageKey, newDate);
    setDateOfBirth(newDate);
  }

  useEffect(() => {
    const dateOfBirthFromStorage = localStorage.getItem(
      dateOfBirthLocalStorageKey
    );
    console.log("Found date in local storage", dateOfBirthFromStorage);

    if (dateOfBirthFromStorage) {
      setDateOfBirth(dateOfBirthFromStorage);
    }
  }, []);

  useEffect(() => {
    console.log("useEffect triggered on date of birth", dateOfBirth);
  }, [dateOfBirth]);

  return (
    <div className="flex flex-col h-screen align-middle justify-around">
      <CountdownDisplay
        targetDate={getRetirementDate(new Date(dateOfBirth), age)}
      />
      <div className="flex flex-col">
        <RetirementAgeSelector
          label="At what age do you want to retire?"
          setAge={setAge}
          age={age}
        />
        <DateSelector
          id="birthday-date-selector"
          setDate={updateDateOfBirth}
          date={dateOfBirth}
          label="What's your date of birth?"
        />
      </div>
    </div>
  );
}
