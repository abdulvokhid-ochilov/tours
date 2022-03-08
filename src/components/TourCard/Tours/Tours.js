import Card from "../Card/Card";
import styles from "./Tours.module.css";

const Tours = () => {
  const arr = [];

  for (let i = 0; i < 9; i++) {
    arr.push(<Card />);
  }

  return (
    <main className="main">
      <div className={styles["card-container"]}>{arr.map((arr) => arr)}</div>
    </main>
  );
};

export default Tours;
