import styles from "./AccountReview.module.css";
import { useState } from "react";

const AccountReview = () => {
  const [rate, setRate] = useState(0);

  const clickHandler = (e) => {
    setRate(e.target.id);
  };
  return (
    <div className={styles["user-view__content"]}>
      <div className={styles["user-view__form-container"]}>
        <h2 className="heading-secondary ma-bt-md">Leave your feedback</h2>
        <form>
          <div className={styles["form__group"]}>
            <label className={styles["form__label"]} htmlFor="tours">
              Your Tours
            </label>
            <select
              name="tours"
              className={`${styles["form__input"]} ${styles["form__select"]}`}
              id="tours-select"
            >
              <option value="" className="options">
                --Please choose a tour--
              </option>
              <option value="1" className="options">
                The sea explorer
              </option>
              <option value="2" className="options">
                The forest hiker
              </option>
              <option value="3" className="options">
                The park camper
              </option>
              <option value="4" className="options">
                The city wanderer
              </option>
            </select>
          </div>
          <div className={`${styles["form__group"]} ma-bt-md"`}>
            <label className={styles["form__label"]} htmlFor="rate">
              Rate
            </label>
            <div className={styles["reviews__rating"]}>
              <svg
                className={`${styles["reviews__star"]} ${
                  rate >= 1
                    ? styles["reviews__star--active"]
                    : styles["reviews__star--inactive"]
                }`}
                onClick={clickHandler}
                id={1}
              >
                <use href="/img/icons.svg#icon-star"></use>
              </svg>
              <svg
                className={`${styles["reviews__star"]} ${
                  rate >= 2
                    ? styles["reviews__star--active"]
                    : styles["reviews__star--inactive"]
                }`}
                onClick={clickHandler}
                id={2}
              >
                <use href="/img/icons.svg#icon-star"></use>
              </svg>
              <svg
                className={`${styles["reviews__star"]} ${
                  rate >= 3
                    ? styles["reviews__star--active"]
                    : styles["reviews__star--inactive"]
                }`}
                onClick={clickHandler}
                id={3}
              >
                <use href="/img/icons.svg#icon-star"></use>
              </svg>
              <svg
                className={`${styles["reviews__star"]} ${
                  rate >= 4
                    ? styles["reviews__star--active"]
                    : styles["reviews__star--inactive"]
                }`}
                onClick={clickHandler}
                id={4}
              >
                <use href="/img/icons.svg#icon-star"></use>
              </svg>
              <svg
                className={`${styles["reviews__star"]} ${
                  rate >= 5
                    ? styles["reviews__star--active"]
                    : styles["reviews__star--inactive"]
                }`}
                onClick={clickHandler}
                id={5}
              >
                <use href="/img/icons.svg#icon-star"></use>
              </svg>
            </div>
          </div>
          <div className={`${styles["form__group"]} ma-bt-md"`}>
            <label className={styles["form__label"]} htmlFor="feedback">
              Feedback
            </label>

            <textarea
              className={styles["form__input"]}
              id={styles["feedback"]}
              type="text"
              required="required"
              name="feedback"
              rows="5"
              cols="33"
            >
              Leave your feedback on the selected tour...
            </textarea>
          </div>

          <div className={`${styles["form__group"]} right`}>
            <button className="btn btn--small btn--green">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountReview;
