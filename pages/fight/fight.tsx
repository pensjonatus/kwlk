import TextField from "@mui/material/TextField";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Layout from "../../components/layout";
import styles from "./fight.module.css";
import shirt from "./img/shirt.png";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

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

type PersonalFormDialogProps = {
  open: boolean;
  handleClose: () => void;
};

function PersonalFormDialog({ open, handleClose }: PersonalFormDialogProps) {
  const [rejected, setRejected] = useState(false);

  function handleSubmit() {
    setRejected(true);
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <form className={styles.form}>
        <DialogTitle id="modal-modal-title">Opowiedz nam o sobie</DialogTitle>
        <DialogContentText id="modal-modal-description">
          Zanim przejdziemy dalej, chcielibyśmy poznać Cię lepiej.
        </DialogContentText>
        {fields.map((f, i) => (
          <TextField label={f} key={i} fullWidth />
        ))}
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            Anuluj
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            Dalej
          </Button>
        </DialogActions>
        <div className={styles.alertHolder}>
          {rejected && (
            <Alert severity="error" onClose={() => setRejected(false)}>
              <p>
                Niestety nie kwalifikujesz się do naszego programu
                subskrycytyjnego. 😞
              </p>
              <p>Może masz dla nas jakieś lepsze odpowiedzi?</p>
            </Alert>
          )}
        </div>
      </form>
    </Dialog>
  );
}

export default function Fight() {
  const [formVisible, setFormVisible] = useState(false);

  function handleOpen() {
    setFormVisible(true);
  }

  function handleClose() {
    setFormVisible(false);
  }

  return (
    <Layout title="Walcz z systemem!" description={fightDescription}>
      <PersonalFormDialog open={formVisible} handleClose={handleClose} />
      <div className={styles.wrapper}>
        <h1 className={styles.titleFont}>Walcz z systemem!</h1>
        <div className={clsx(styles.titleFont, styles.description)}>
          {fightDescription}
        </div>
        <div className={styles.shirtFrame}>
          <Image
            src={shirt}
            alt="piękna koszulka z napisem walcz z systemem"
            objectFit="fill"
          />
        </div>
        <section>
          <h2>Co dostajesz?</h2>
          {features.map((f, i) => (
            <div key={i} className={styles.feature}>
              <h3 className={styles.titleFont}>{f.title}</h3>
              {f.description}
              {f.buttonCaption && (
                <Button
                  size="large"
                  fullWidth
                  variant="contained"
                  onClick={handleOpen}
                >
                  {f.buttonCaption}
                </Button>
              )}
            </div>
          ))}
        </section>
        <section className={styles.links}>
          <Link href="/">W Twojej okolicy</Link>
          <Link href="/">Zostań kompanem</Link>
        </section>
      </div>
    </Layout>
  );
}
