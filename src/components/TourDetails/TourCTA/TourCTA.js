import styles from "./TourCTA.module.css";
import { useState } from "react";
import CheckoutForm from "../../Payment/CheckoutForm";

const TourCTA = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={styles["section-cta"]}>
      <div className={styles["cta"]}>
        <div className={`${styles["cta__img"]} ${styles["cta__img--logo"]}`}>
          <img src="/img/logo-white.png" alt="Natours logo" />
        </div>
        <img
          src={images[0]}
          alt=""
          className={`${styles["cta__img"]} ${styles["cta__img--1"]}`}
        />
        <img
          src={images[1]}
          alt=""
          className={`${styles["cta__img"]} ${styles["cta__img--2"]}`}
        />

        <div className={styles["cta__content"]}>
          <h2 className="heading-secondary">What are you waiting for?</h2>
          <p className={styles["cta__text"]}>
            10 days. 1 adventure. Infinite memories. Make it yours today!
          </p>
          <button
            onClick={setIsOpen.bind(null, !isOpen)}
            className="btn btn--green span-all-rows"
          >
            Book tour now!
          </button>
        </div>
      </div>
      {isOpen && <CheckoutForm />}
    </section>
  );
};

export default TourCTA;
