// https://atomizedobjects.com/blog/javascript/develop-2d-javascript-games-html5-react/
import { useEvent } from "../../hooks";
import styles from "./engine.module.css";

export default function Engine() {
  const handleKeyPress = (e) => {
    if (e.key === " ") {
      console.log("You pressed the space bar key!");
    }
  };

  useEvent("keyup", handleKeyPress);
  
  return (
    <div className={styles.container}>
      <span className={styles.character} />
    </div>
  );
}
