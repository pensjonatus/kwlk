import clsx from "clsx";
import Image from "next/image";
import { forwardRef, useRef, useState } from "react";
import Layout from "../../components/layout";
import styles from "./fight.module.css";
import shirt from "./img/shirt.png";

export const fightDescription =
  "Koszulka jakiej jeszcze nie było, która pozwala Ci wyrazić siebie i jednocześnie swój sprzeciw wobec sił, które próbują skrzywdzić Ciebie i Twoich najbliższych.";

type Feature = {
  title: string;
  description: React.ReactNode;
  buttonCaption?: string;
};

const features: Feature[] = [
  {
    title: "Bez potrzeby zakupu",
    description: (
      <>
        <p>
          Ciuchy nie są na zawsze i my to wiemy. Twoje gusta a nawet Twoje
          poglądy mogą ewoluować i to jest okej. I tak jesteś doskonałą istotą,
          nieważne gdzie i kim jesteś. Wiemy to i szanujemy Twoją niezależność.
        </p>
        <p>
          Dlatego właśnie nasza koszulka <strong>nie wiąże Cię z nami</strong>{" "}
          kontraktem zakupu. Nabywasz koszulkę na drodze elastycznego modelu{" "}
          <strong>subskrypcji</strong>!
        </p>
        <p>
          Możesz zrezygnować z subskrypcji kiedy tylko chcesz bez ponoszenia
          dodatkowych kosztów.
        </p>
      </>
    ),
    buttonCaption: "Poznaj cenę subskrypcji",
  },
  {
    title: "Bezpieczeństwo",
    description: (
      <>
        <p>
          Każdy z nas chce czuć się bezpieczny. W dzisiejszym świecie podziałów
          politycznych to szczególnie ważne. Dlatego upewniamy się, że Twoja
          koszulka nie jest dla Ciebie kolejnym powodem do stresu.
        </p>
        <p>
          Przy zakupie koszulki dostajesz od nas niewidocznego kompana, który
          zawsze ma Cię na oku, mimo, że Ty go nie widzisz. Kompan upewnia się,
          że koszulce nic się nie stanie. Zapomnij o zabrudzeniach czy
          rozdarciach! A jeśli by do nich doszło, kompan zajmie się tym kiedy
          nie patrzysz.
        </p>
        <p>
          Potrzebujesz szybkiego odplamienia kiedy jesteś w galerii handlowej
          lub na kolacji biznesowej? Nie możesz zdjąć koszulki? Nie martw się,
          tylko zamknij oczy o zawołaj: &quot;Kompanie, kompanie, przyjdź na
          moje wezwanie!&quot;
        </p>
        <p>Ale pamiętaj! Nie otwieraj oczy, póki nie skończy.</p>
      </>
    ),
    buttonCaption: "Zamów już dziś!",
  },
];

const fields = [
  "Imię",
  "Nazwisko",
  "Email",
  "Preferencje",
  "Poglądy",
  "Poczucie wartości",
  "Orientacja",
  "Lojalność",
];

function FormModal({ setVisible }) {
  return (
    <div className={styles.formBackground}>
      <form className={styles.form}>
        <button
          className={styles.closeButton}
          onClick={() => setVisible(false)}
        >
          x
        </button>
        {fields.map((f, i) => (
          <div key={i} className={styles.formRow}>
            <label htmlFor={f}>{f}</label>
            <input id={f} type="text" className={styles.formField} />
          </div>
        ))}
        <button className={styles.button}>Dalej</button>
      </form>
    </div>
  );
}

export default function Fight() {
  const [formVisible, setFormVisible] = useState(false);

  return (
    <Layout title="Walcz z systemem!" description={fightDescription}>
      {formVisible && <FormModal setVisible={setFormVisible} />}
      <div className={styles.wrapper}>
        <h1 className={styles.titleFont}>Walcz z systemem!</h1>
        <div className={clsx(styles.titleFont, styles.description)}>
          {fightDescription}
        </div>
        <div className={styles.shirtFrame}>
          <Image src={shirt} alt="piękna koszulka" objectFit="fill" />
        </div>
        <section>
          <h2>Co dostajesz?</h2>
          {features.map((f, i) => (
            <div key={i} className={styles.feature}>
              <h3 className={styles.titleFont}>{f.title}</h3>
              {f.description}
              {f.buttonCaption && (
                <button
                  className={clsx(styles.button, styles.impactFont)}
                  onClick={() => setFormVisible(true)}
                >
                  {f.buttonCaption}
                </button>
              )}
            </div>
          ))}
        </section>
      </div>
    </Layout>
  );
}
