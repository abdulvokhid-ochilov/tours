import styles from "./AccountReview.module.css";

const AccountReview = () => {
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
