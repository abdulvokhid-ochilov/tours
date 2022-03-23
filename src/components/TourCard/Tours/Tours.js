import Card from "../Card/Card";
import styles from "./Tours.module.css";
import { useSelector } from "react-redux";

const Tours = () => {
  const arr = useSelector((state) => state.tours.tours);

  return (
    <main className="main">
      <div className={styles["card-container"]}>
        {arr.map(
          ({
            _id,
            name,
            duration,
            difficulty,
            ratingsAverage,
            ratingsQuantity,
            price,
            summary,
            imageCover,
          }) => (
            <Card
              key={_id}
              id={_id}
              name={name}
              duration={duration}
              difficulty={difficulty}
              ratingsAverage={ratingsAverage}
              ratingsQuantity={ratingsQuantity}
              price={price}
              summary={summary}
              imageCover={imageCover}
            />
          )
        )}
      </div>
    </main>
  );
};

export default Tours;
