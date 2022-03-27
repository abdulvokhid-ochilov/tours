import Card from "../Card/Card";
import styles from "./Tours.module.css";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

const Tours = () => {
  const arr = useSelector((state) => state.tours.tours);

  return (
    <main className="main">
      <motion.div layout className={styles["card-container"]}>
        <AnimatePresence>
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
        </AnimatePresence>
      </motion.div>
    </main>
  );
};

export default Tours;
