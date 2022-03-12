import styles from "./CreateTour.module.css";

const CreateTour = () => {
  return (
    <div className={styles["admin-view__content"]}>
      <div className={styles["admin-view__form-container"]}>
        <h2 className="heading-secondary ma-bt-md">Create a tour</h2>
        <form>
          <div className={styles["form__group"]}>
            <label className={styles["form__label"]} htmlFor="name">
              Name
            </label>
            <input type="text" className={styles["form__input"]} />
            <label className={styles["form__label"]} htmlFor="duration">
              Duration
            </label>
            <input
              type="number"
              className={styles["form__input"]}
              min="1"
              max="30"
            />
            <label className={styles["form__label"]} htmlFor="group_size">
              Group Size
            </label>
            <input
              type="number"
              className={styles["form__input"]}
              min="1"
              max="30"
            />
            <label className={styles["form__label"]} htmlFor="difficulty">
              Difficulty
            </label>
            <select
              name="difficulty"
              className={`${styles["form__input"]} ${styles["form__select"]}`}
              id="tours-select"
            >
              <option value="" className="options">
                --Please choose difficulty--
              </option>
              <option value="easy" className="options">
                easy
              </option>
              <option value="moderate" className="options">
                moderate
              </option>
              <option value="difficult" className="options">
                difficult
              </option>
            </select>
            <label className={styles["form__label"]} htmlFor="price">
              Price($)
            </label>
            <input
              type="number"
              className={styles["form__input"]}
              min="1"
              max="100000"
            />
            <label className={styles["form__label"]} htmlFor="date">
              Date
            </label>
            <input type="date" className={styles["form__input"]} />
          </div>

          <div className={`${styles["form__group"]} ma-bt-md"`}>
            <label className={styles["form__label"]} htmlFor="summary">
              Summary
            </label>

            <textarea
              className={styles["form__input"]}
              id={styles["textarea"]}
              type="text"
              required="required"
              name="summary"
              rows="3"
            >
              Leave summary for the tour...
            </textarea>
            <label className={styles["form__label"]} htmlFor="description">
              Description
            </label>

            <textarea
              className={styles["form__input"]}
              id={styles["textarea"]}
              type="text"
              required="required"
              name="description"
              rows="5"
              cols="33"
            >
              Leave description for the tour...
            </textarea>
          </div>
          <div
            className={`${styles["form__group"]} ${styles["form__photo-upload"]}`}
          >
            <div className={styles["photo__group"]}>
              <img
                className={styles["form__tour-photo"]}
                src="./img/tours/tour-2-1.jpg"
                alt=""
              />
              <input
                className={styles["form__upload"]}
                type="file"
                accept="image/*"
                id="photo"
                name="photo"
              />
              <label htmlFor="photo">Choose a cover image</label>
            </div>
            <div className={styles["photo__group"]}>
              <img
                className={styles["form__tour-photo"]}
                src="./img/tours/tour-2-2.jpg"
                alt=""
              />
              <input
                className={styles["form__upload"]}
                type="file"
                accept="image/*"
                id="photo"
                name="photo"
              />
              <label htmlFor="photo">Choose a tour image</label>
            </div>
            <div className={styles["photo__group"]}>
              <img
                className={styles["form__tour-photo"]}
                src="./img/tours/tour-2-3.jpg"
                alt=""
              />
              <input
                className={styles["form__upload"]}
                type="file"
                accept="image/*"
                id="photo"
                name="photo"
              />
              <label htmlFor="photo">Choose a tour image</label>
            </div>
            <div className={styles["photo__group"]}>
              <img
                className={styles["form__tour-photo"]}
                src="./img/tours/tour-4-3.jpg"
                alt=""
              />
              <input
                className={styles["form__upload"]}
                type="file"
                accept="image/*"
                id="photo"
                name="photo"
              />
              <label htmlFor="photo">Choose a tour image</label>
            </div>
          </div>

          <div className={`${styles["form__group"]} right`}>
            <button className="btn btn--small btn--green">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTour;
