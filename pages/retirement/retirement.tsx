import { CircularProgress, Switch } from "@mui/material";
import { useEffect, useState } from "react";
import DatePicker from "../../components/date/datePicker";
import Layout from "../../components/layout";
import { storageKeys } from "../../lib/storage";
import styles from "./retirement.module.css";

export const retirementDescription =
  "Zawsze chciałaś/eś wiedzieć ile Ci zostało do emerytury? Teraz możesz sprawdzić na tej stronie!";

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
  years: { many: "lat", one: "rok", few: "lata" },
  months: { many: "miesięcy", one: "miesiąc", few: "miesiące" },
  days: { many: "dni", one: "dzień", few: "dni" },
  hours: { many: "godzin", one: "godzina", few: "godziny" },
  minutes: { many: "minut", one: "minuta", few: "minuty" },
  seconds: { many: "sekund", one: "sekunda", few: "sekundy" },
};

function getUnitInPolish(unitInEnglish: string, value: number) {
  const pr = new Intl.PluralRules("pl-PL");
  return valueMappings[unitInEnglish][pr.select(value)];
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
  const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>();
  const [male, setMale] = useState<boolean>();

  function handleGenderChange(event: React.ChangeEvent<HTMLInputElement>) {
    setMale(event.target.checked);
  }

  useEffect(function () {
    const dateFromStorage = localStorage.getItem(storageKeys.dateOfBirth);
    if (dateFromStorage) {
      setDateOfBirth(new Date(dateFromStorage));
    } else {
      setDateOfBirth(new Date("10 July 1982"));
    }

    const maleFromStorage = localStorage.getItem(storageKeys.male);
    if (maleFromStorage) {
      setMale(maleFromStorage === "true");
    } else {
      setMale(true);
    }
  }, []);

  useEffect(
    function () {
      if (dateOfBirth && male !== undefined) {
        localStorage.setItem(
          storageKeys.dateOfBirth,
          dateOfBirth.toDateString()
        );

        localStorage.setItem(storageKeys.male, `${male}`);

        const retirementDate = new Date(dateOfBirth.getTime());
        retirementDate.setFullYear(
          retirementDate.getFullYear() + (male ? 65 : 60)
        );

        const retirementDateMilliseconds = retirementDate.getTime();
        const interval = setInterval(function () {
          const millisecondsNow = new Date().getTime();
          const millisecondsTillTheEnd =
            retirementDateMilliseconds - millisecondsNow;
          setTimeLeft(getTimeFromMilliseconds(millisecondsTillTheEnd));
        }, 1000);

        return () => {
          clearInterval(interval);
        };
      }
    },
    [dateOfBirth, male]
  );

  if (!dateOfBirth) {
    return <CircularProgress />;
  }

  return (
    <Layout title="Ile do emerytury" description={retirementDescription}>
      <div className={styles.backdrop}>
        <div className={styles.wrapper}>
          <div className={styles.countdown}>
            <h1 className={styles.title}>
              {timeLeft.seconds >= 0
                ? `Ile do emerytury?`
                : `Ile na emeryturze?`}
            </h1>
            {Object.entries(timeLeft).map(([key, value]) => (
              <div key={key} className={styles.row}>
                <span className={styles.number}>{value}</span>
                <span className={styles.unit}>
                  {getUnitInPolish(key, value)}
                </span>
              </div>
            ))}
          </div>
          <div className={styles.controls}>
            <h2>Data urodzenia</h2>
            <DatePicker date={dateOfBirth} setDate={setDateOfBirth} />
            <div className={styles.gender}>
              <div>Kobieta*</div>
              <Switch
                checked={male}
                onChange={handleGenderChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <div>Mężczyzna*</div>
            </div>
            <div className={styles.footNote}>* w oczach ZUSu</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
