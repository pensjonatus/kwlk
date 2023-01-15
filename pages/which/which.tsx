import Layout from "../../components/SiteLayout/SiteLayout";
import { ReactElement, useEffect, useState } from "react";
import styles from "./which.module.css";
import { people } from "../../lib/people";
import DatePicker from "../../components/DatePicker/DatePicker";

export const whichDescription =
  "Zawsze chciałaś/eś to wiedzieć. Teraz możesz, podaj tylko swoją datę urodzenia.";

export default function Which() {
  const initialResult = <>No ciekawe 🤔</>;
  const [result, setResult] = useState<ReactElement>(initialResult);
  const [selectedDate, setSelectedDate] = useState(new Date("July 10, 1982"));

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

  useEffect(
    function () {
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
    [selectedDate]
  );

  return (
    <Layout title="Którym jesteś człowiekiem" description={whichDescription}>
      <div className={styles.wrapper}>
        <h1>Którym jesteś człowiekiem?</h1>
        <p>{whichDescription}</p>
        <DatePicker date={selectedDate} setDate={setSelectedDate} />
        <div>{result}</div>
      </div>
    </Layout>
  );
}
