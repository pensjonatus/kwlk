import { useState } from 'react';
import styles from './store.module.css';

type StoreProps = {
  images: string[];
};

export default function Store({ images }: StoreProps) {
  const [productIndex, setProductIndex] = useState(0);

  function handleClick() {
    if (productIndex === images.length - 1) {
      setProductIndex(0);
    } else {
      setProductIndex(productIndex + 1);
    }
  }

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
