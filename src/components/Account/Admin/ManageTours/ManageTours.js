import styles from "./ManageTours.module.css";

const ManageTours = () => {
  const tours = [];

  for (let i = 0; i < 5; i++) {
    tours.push(
      <div className={styles["admin-view__tours"]}>
        <div className={styles.card__header}>
          <div className={styles.card__picture}>
            <div className={styles["card__picture-overlay"]}>&nbsp;</div>
            <img
              src="/img/tours/tour-1-cover.jpg"
              alt="Tour 1"
              className={styles["card__picture-img"]}
            />
          </div>

          <h3 className="heading-tertirary">
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
              <use href="/img/icons.svg#icon-map-pin"></use>
            </svg>
            <span>Banff, Canada</span>
          </div>
          <div className={styles["card__data"]}>
            <svg className={styles["card__icon"]}>
              <use href="/img/icons.svg#icon-calendar"></use>
            </svg>
            <span>April 2021</span>
          </div>
          <div className={styles["card__data"]}>
            <svg className={styles["card__icon"]}>
              <use href="/img/icons.svg#icon-flag"></use>
            </svg>
            <span>3 stops</span>
          </div>
          <div className={styles["card__data"]}>
            <svg className={styles["card__icon"]}>
              <use href="/img/icons.svg#icon-user"></use>
            </svg>
            <span>25 people</span>
          </div>
          <div className={styles["card__data"]}>
            <svg className={styles["card__icon"]}>
              <use href="/img/icons.svg#icon-dollar-sign"></use>
            </svg>
            <span>297</span>
          </div>
          <div className={styles["card__data"]}>
            <svg className={styles["card__icon"]}>
              <use href="/img/icons.svg#icon-star"></use>
            </svg>
            <span>4.9</span>
          </div>
        </div>

        <div className={styles["card__footer"]}>
          <a href="/" className="btn btn--green btn--small">
            Change
          </a>
          <a href="/" className="btn btn--delete btn--small">
            Delete
          </a>
        </div>
      </div>
    );
  }
  return (
    <div className={styles["admin-view__content"]}>{tours.map((el) => el)}</div>
  );
};

export default ManageTours;
