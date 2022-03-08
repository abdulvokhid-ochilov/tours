import styles from "./TourHeader.module.css";

const TourHeader = () => {
  return (
    <section className={styles["section-header"]}>
      <div className={styles["heading-box"]}>
        <h1 className="heading-primary">
          <span>
            The Park <br />
            Camper Tour
          </span>
        </h1>
        <div className={styles["heading-box__group"]}>
          <div className={styles["heading-box__detail"]}>
            <svg className={styles["heading-box__icon"]}>
              <use href="img/icons.svg#icon-clock"></use>
            </svg>
            <span className={styles["heading-box__text"]}>10 days</span>
          </div>
          <div className={styles["heading-box__detail"]}>
            <svg className={styles["heading-box__icon"]}>
              <use href="img/icons.svg#icon-map-pin"></use>
            </svg>
            <span className={styles["heading-box__text"]}>Las Vegas, USA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourHeader;
