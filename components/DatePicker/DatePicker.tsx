import { TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import React, { useEffect, useState } from "react";
import styles from "./DatePicker.module.css";

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
      <DesktopDatePicker
        label="Data urodzenia"
        inputFormat="dd/MM/yyyy"
        value={date}
        onChange={setDate}
        renderInput={(params) => <TextField {...params} />}
      />
    </div>
  );
}
