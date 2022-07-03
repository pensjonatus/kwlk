import { useEffect, useState } from "react";
import Vault from "../vault";
import styles from "./store.module.css";

const images = [
  "/products/armoire.png",
  "/products/can-of-drink.png",
  "/products/diamonds.png",
  "/products/gloves.png",
  "/products/gold-car.png",
  "/products/merry-xmas.png",
  "/products/gold-necklace.png",
  "/products/pen.png",
  "/products/pocket-watch.png",
  "/products/record-player.png",
  "/products/soda-chupa.png",
  "/products/red-car.png",
  "/products/sapphire.png",
  "/products/mug.png",
  "/products/speaker.png",
  "/products/tablet.png",
  "/products/tape.png",
  "/products/watch.png",
  "/products/watering-can.png",
  "/products/white-car.png",
];

type MoneyProps = {
  amount: number;
  label: string;
};

function Money({ amount, label }: MoneyProps) {
  return (
    <div
      className={styles.money}
      style={{
        color: amount < 0 && "red",
      }}
    >
      {label}: {amount} PLN
    </div>
  );
}

export default function Store() {
  const [productIndex, setProductIndex] = useState(undefined);
  const [funds, setFunds] = useState(Math.round(Math.random() * 920));
  const [price, setPrice] = useState(undefined);
  const [giveBonus, setGiveBonus] = useState(false);
  const [bonus, setBonus] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(function () {
    setProductIndex(0);
  }, []);

  useEffect(
    function () {
      setPrice(Math.round(Math.random() * 69));
    },
    [productIndex]
  );

  useEffect(
    function () {
      if (funds > 10000) {
        setIsComplete(true);
      }
    },
    [funds]
  );

  function handleClick(buy: boolean) {
    const k100roll = Math.random();
    if (k100roll < 0.1) {
      setGiveBonus(true);
      const bonusAmount = Math.round(Math.random() * 74);
      setBonus(bonusAmount);
      setFunds(funds + bonusAmount);
    } else {
      setGiveBonus(false);
    }

    if (buy) {
      setFunds(funds - price);
    }
    if (productIndex === images.length - 1) {
      setProductIndex(0);
    } else {
      setProductIndex(productIndex + 1);
    }
  }

  if (productIndex === undefined) return <>Ładowanie...</>;

  if (isComplete) return <Vault amount={funds} />;

  return (
    <div
      className={styles.screen}
      style={{
        backgroundImage: `url(${images[productIndex]})`,
      }}
    >
      <div className={styles.moneyBar}>
        <Money amount={price} label="Cena" />
        <div className={styles.amountBox}>
          <Money amount={funds} label="Środki" />
          {giveBonus && <div className={styles.addedMoney}>+{bonus}</div>}
        </div>
      </div>
      <button className={styles.left} onClick={() => handleClick(true)}>
        Kup
      </button>
      <button className={styles.right} onClick={() => handleClick(false)}>
        Nie kupuj
      </button>
      {giveBonus && (
        <div className={styles.bonus}>
          <Money amount={bonus} label="Bonifikata" />
        </div>
      )}
    </div>
  );
}
