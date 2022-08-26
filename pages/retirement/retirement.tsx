import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import styles from "./retirement.module.css";

export const retirementDescription =
  "Zawsze chciałaś/eś wiedzieć ile mi zostało do emerytury? Teraz możesz sprawdzić na tej stronie!";

type TimeLeftShape = {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeFromMilliseconds(milliseconds): TimeLeftShape {
  let years, months, days, hours, minutes, seconds;

  seconds = Math.floor(milliseconds / 1000);
  minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  hours = Math.floor(minutes / 60);
  minutes = minutes % 60;
  days = Math.floor(hours / 24);
  hours = hours % 24;
  months = Math.floor(days / 30);
  days = days % 30;
  years = Math.floor(months / 12);
  months = months % 12;

  return { years, months, days, hours, minutes, seconds };
}

const valueMappings = {
  years: ["rok", "lata", "lat"],
  months: ["miesiąc", "miesiące", "miesięcy"],
  days: ["dzień", "dni", "dni"],
  hours: ["godzina", "godziny", "godzin"],
  minutes: ["minuta", "minuty", "minut"],
  seconds: ["sekunda", "sekundy", "sekund"],
};

function getUnitInPolish(unitInEnglish: string, value: number) {
  if (value === 1) {
    return valueMappings[unitInEnglish][0];
  }

  if (["2", "3", "4"].includes(value.toString().slice(-1))) {
    return valueMappings[unitInEnglish][1];
  }

  if (
    Number.parseInt(value.toString().slice(-1)) > 4 ||
    (value.toString().length > 1 &&
      (value.toString().endsWith("1") || value.toString().endsWith("0")))
  ) {
    return valueMappings[unitInEnglish][2];
  }
}

export default function Retirement() {
  const [timeLeft, setTimeLeft] = useState<TimeLeftShape>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(function () {
    const retirementDateMilliseconds = Date.parse("10 Jul 2047 00:12:00 GMT");
    const interval = setInterval(function () {
      const millisecondsNow = new Date().getTime();
      const millisecondsTillTheEnd =
        retirementDateMilliseconds - millisecondsNow;
      setTimeLeft(getTimeFromMilliseconds(millisecondsTillTheEnd));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Layout title="Ile do emerytury" description={retirementDescription}>
      <div className={styles.backdrop}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Ile mi zostało do emerytury?</h1>
          {Object.entries(timeLeft).map(([key, value]) => (
            <div key={key} className={styles.row}>
              <span className={styles.number}>{value}</span>
              <span className={styles.unit}>{getUnitInPolish(key, value)}</span>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
