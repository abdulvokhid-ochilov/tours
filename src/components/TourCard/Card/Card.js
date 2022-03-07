import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <div className={styles.card__picture}>
          <div className={styles["card__picture-overlay"]}>&nbsp;</div>
          <img
            src="img/tours/tour-1-cover.jpg"
            alt="Tour 1"
            className={styles["card__picture-img"]}
          />
        </div>

        <h3 className={styles["heading-tertirary"]}>
          <span>The Forest Hiker</span>
        </h3>
      </div>

      <div className={styles["card__details"]}>
        <h4 className={styles["card__sub-heading"]}>Easy 5-day tour</h4>
        <p className={styles["card__text"]}>
          Breathtaking hike through the Canadian Banff National Park
        </p>
        <div className={styles["card__data"]}>
          <svg className={styles["card__icon"]}>
            <use href="img/icons.svg#icon-map-pin"></use>
          </svg>
          <span>Banff, Canada</span>
        </div>
        <div className={styles["card__data"]}>
          <svg className={styles["card__icon"]}>
            <use href="img/icons.svg#icon-calendar"></use>
          </svg>
          <span>April 2021</span>
        </div>
        <div className={styles["card__data"]}>
          <svg className={styles["card__icon"]}>
            <use href="img/icons.svg#icon-flag"></use>
          </svg>
          <span>3 stops</span>
        </div>
        <div className={styles["card__data"]}>
          <svg className={styles["card__icon"]}>
            <use href="img/icons.svg#icon-user"></use>
          </svg>
          <span>25 people</span>
        </div>
      </div>

      <div className={styles["card__footer"]}>
        <p>
          <span className={styles["card__footer-value"]}>$297</span>
          <span className={styles["card__footer-text"]}>per person</span>
        </p>
        <p className={styles["card__ratings"]}>
          <span className={styles["card__footer-value"]}>4.9</span>
          <span className={styles["card__footer-text"]}>rating (21)</span>
        </p>
        <a href="/" className="btn btn--green btn--small">
          Details
        </a>
      </div>
    </div>
  );
};

export default Card;
