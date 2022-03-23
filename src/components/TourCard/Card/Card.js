import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({
  id,
  name,
  duration,
  difficulty,
  ratingsAverage,
  ratingsQuantity,
  price,
  summary,
  imageCover,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <div className={styles.card__picture}>
          <div className={styles["card__picture-overlay"]}>&nbsp;</div>
          <img
            src={imageCover}
            alt="Tour 1"
            className={styles["card__picture-img"]}
          />
        </div>

        <h3 className="heading-tertirary">
          <span>{name}</span>
        </h3>
      </div>

      <div className={styles["card__details"]}>
        <h4 className={styles["card__sub-heading"]}>
          {difficulty} {duration}-day tour
        </h4>
        <p className={styles["card__text"]}>{summary}</p>
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
          <span className={styles["card__footer-value"]}>${price}</span>
          <span className={styles["card__footer-text"]}>per person</span>
        </p>
        <p className={styles["card__ratings"]}>
          <span className={styles["card__footer-value"]}>{ratingsAverage}</span>
          <span className={styles["card__footer-text"]}>
            rating ({ratingsQuantity})
          </span>
        </p>
        <Link to={`/tour/${id}`} className="btn btn--green btn--small">
          Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
