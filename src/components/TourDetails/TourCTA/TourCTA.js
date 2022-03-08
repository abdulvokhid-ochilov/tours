import styles from "./TourCTA.module.css";

const TourCTA = () => {
  return (
    <section className={styles["section-cta"]}>
      <div className={styles["cta"]}>
        <div className={`${styles["cta__img"]} ${styles["cta__img--logo"]}`}>
          <img src="img/logo-white.png" alt="Natours logo" className="" />
        </div>
        <img
          src="img/tours/tour-5-2.jpg"
          alt=""
          className={`${styles["cta__img"]} ${styles["cta__img--1"]}`}
        />
        <img
          src="img/tours/tour-5-1.jpg"
          alt=""
          className={`${styles["cta__img"]} ${styles["cta__img--2"]}`}
        />

        <div className={styles["cta__content"]}>
          <h2 className="heading-secondary">What are you waiting for?</h2>
          <p className={styles["cta__text"]}>
            10 days. 1 adventure. Infinite memories. Make it yours today!
          </p>
          <button className="btn btn--green span-all-rows">
            Book tour now!
          </button>
        </div>
      </div>
    </section>
  );
};

export default TourCTA;
