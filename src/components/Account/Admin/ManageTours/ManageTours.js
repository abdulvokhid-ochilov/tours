import styles from "./ManageTours.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTour } from "../../../../store/tours-actions";

const ManageTours = () => {
  const dispatch = useDispatch();
  const tours = useSelector((state) => state.tours.tours);
  const token = useSelector((state) => state.auth.token);

  const deleteTourHandler = (id) => {
    dispatch(deleteTour(id, token));
  };
  return (
    <div className={styles["admin-view__content"]}>
      {tours.map(
        ({
          _id,
          name,
          duration,
          difficulty,
          ratingsAverage,
          price,
          summary,
        }) => (
          <div key={_id} className={styles["admin-view__tours"]}>
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
                <span>${price}</span>
              </div>
              <div className={styles["card__data"]}>
                <svg className={styles["card__icon"]}>
                  <use href="/img/icons.svg#icon-star"></use>
                </svg>
                <span>{ratingsAverage}</span>
              </div>
            </div>

            <div className={styles["card__footer"]}>
              <Link
                to={`/account/tours/${_id}`}
                className="btn btn--green btn--small"
              >
                Change
              </Link>
              <Link
                onClick={deleteTourHandler.bind(null, _id)}
                to="/account/tours"
                className="btn btn--delete btn--small"
              >
                Delete
              </Link>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ManageTours;
