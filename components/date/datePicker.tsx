import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./datePicker.module.css";

type DatePickerProps = {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
};

function formatDigits(input: number, digits: number): string {
  return input.toLocaleString("en-US", {
    minimumIntegerDigits: digits,
    useGrouping: false,
  });
}

export default function DatePicker({ date, setDate }: DatePickerProps) {
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth() + 1);
  const [day, setDay] = useState(date.getDate());

  useEffect(
    function () {
      const selectedDate: Date = new Date(
        Date.parse(
          `${formatDigits(year, 4)}-${formatDigits(month, 2)}-${formatDigits(
            day,
            2
          )}`
        )
      );

      setDate(selectedDate);
    },
    [year, month, day, setDate]
  );

  return (
    <div className={styles.date}>
      <TextField
        variant="outlined"
        label="Rok"
        value={year}
        style={{ width: "5rem" }}
        onChange={(event) => setYear(Number(event.target.value))}
      />
      <TextField
        variant="outlined"
        label="Miesiąc"
        value={month}
        style={{ width: "3rem" }}
        onChange={(event) => setMonth(Number(event.target.value))}
      />
      <TextField
        variant="outlined"
        label="Dzień"
        value={day}
        style={{ width: "3rem" }}
        onChange={(event) => setDay(Number(event.target.value))}
      />
    </div>
  );
}
