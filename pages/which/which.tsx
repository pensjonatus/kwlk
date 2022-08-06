import Layout from "../../components/layout";
import TextField from "@mui/material/TextField";
import { ReactElement, useEffect, useState } from "react";
import styles from "./which.module.css";
import { people } from "../../lib/people";

export const whichDescription =
  "Zawsze chciałaś/eś to wiedzieć. Teraz możesz, podaj tylko swoją datę urodzenia.";

export default function Which() {
  const initialResult = <>No ciekawe 🤔</>;
  const [year, setYear] = useState(1982);
  const [month, setMonth] = useState(7);
  const [day, setDay] = useState(10);
  const [result, setResult] = useState<ReactElement>(initialResult);

  function getNumberWithSpaces(number: number): string {
    return number.toLocaleString("pl-PL");
  }

  function getDayOfYear(date: Date): number {
    return Math.floor(
      (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) /
        1000 /
        60 /
        60 /
        24
    );
  }

  function formatDigits(input: number, digits: number): string {
    return input.toLocaleString("en-US", {
      minimumIntegerDigits: digits,
      useGrouping: false,
    });
  }

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

      const selectedYear = selectedDate.getFullYear();
      const yearData = people.find((row) => row.year === selectedYear);
      if (!yearData) {
        setResult(
          <>Nie mamy danych dla ludzi urodzonych w roku {selectedYear}</>
        );
      } else {
        const dayOfYear = getDayOfYear(selectedDate);
        const personNumberInYear =
          Math.round(yearData.bornInYear / 365) * dayOfYear;
        const personNumberSoFar =
          yearData.bornSoFar - yearData.bornInYear + personNumberInYear;

        setResult(
          <>
            <p>
              Jesteś istotą ludzką urodzoną jako numer{" "}
              <strong style={{ fontSize: "140%", fontWeight: 600 }}>
                {getNumberWithSpaces(personNumberSoFar)}
              </strong>{" "}
              (około) w historii świata.
            </p>
            <p>
              Osobą number {getNumberWithSpaces(personNumberInYear)} w{" "}
              {selectedYear}r.
            </p>
          </>
        );
      }
    },
    [year, month, day]
  );

  return (
    <Layout title="Którym jesteś człowiekiem" description={whichDescription}>
      <div className={styles.wrapper}>
        <h1>Którym jesteś człowiekiem?</h1>
        <p>{whichDescription}</p>
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
        <div>{result}</div>
      </div>
    </Layout>
  );
}
