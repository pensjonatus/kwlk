import { useEffect, useState } from "react";
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

export default function Store() {
  const [productIndex, setProductIndex] = useState(undefined);

  useEffect(function () {
    setProductIndex(0);
  }, []);

  function handleClick() {
    if (productIndex === images.length - 1) {
      setProductIndex(0);
    } else {
      setProductIndex(productIndex + 1);
    }
  }

  if (productIndex === undefined) return <>Ładowanie...</>;

  return (
    <div
      className={styles.screen}
      style={{
        backgroundImage: `url(${images[productIndex]})`,
      }}
    >
      <div className={styles.price}>
        {Math.round(Math.random() * 69)}
        <span className={styles.grosz}>99</span> PLN
      </div>
      <button className={styles.left} onClick={handleClick}>
        Kup
      </button>
      <button className={styles.right} onClick={handleClick}>
        Nie kupuj
      </button>
    </div>
  );
}
