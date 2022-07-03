import styles from "./vault.module.css";

type VaultProps = {
  amount: number;
};

export default function Vault({ amount }: VaultProps) {
  return (
    <div className={styles.wrapper}>
      <h2>Brawo!</h2>
      <p>Zdobyłeś środki o wysokości {amount} PLN!</p>
      <p>Dołączyłeś do rekinów finansjery</p>
    </div>
  );
}
