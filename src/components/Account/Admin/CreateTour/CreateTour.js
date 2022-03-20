import styles from "./CreateTour.module.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createNewTour } from "../../../../store/tours-actions";

const CreateTour = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  const name = useRef();
  const duration = useRef();
  const groupSize = useRef();
  const difficulty = useRef();
  const price = useRef();
  const date = useRef();
  const summary = useRef();
  const description = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(
      createNewTour(
        {
          name: name.current.value,
          duration: duration.current.value,
          maxGroupSize: groupSize.current.value,
          difficulty: difficulty.current.value,
          price: price.current.value,
          summary: summary.current.value,
          description: description.current.value,
          imageCover: "tour-1-cover.jpg",
          images: ["tour-1-1.jpg", "tour-1-2.jpg", "tour-1-3.jpg"],
          startDates: [date.current.value],
        },
        token,
        navigate
      )
    );
  };

  return (
    <div className={styles["admin-view__content"]}>
      <div className={styles["admin-view__form-container"]}>
        <h2 className="heading-secondary ma-bt-md">Create a tour</h2>
        <form onSubmit={formSubmitHandler}>
          <div className={styles["form__group"]}>
            <label className={styles["form__label"]} htmlFor="name">
              Name
            </label>
            <input
              ref={name}
              type="text"
              className={styles["form__input"]}
              required
            />
            <label className={styles["form__label"]} htmlFor="duration">
              Duration
            </label>
            <input
              ref={duration}
              type="number"
              className={styles["form__input"]}
              min="1"
              max="30"
              required
            />
            <label className={styles["form__label"]} htmlFor="group_size">
              Group Size
            </label>
            <input
              ref={groupSize}
              type="number"
              className={styles["form__input"]}
              min="1"
              max="30"
              required
            />
            <label className={styles["form__label"]} htmlFor="difficulty">
              Difficulty
            </label>
            <select
              ref={difficulty}
              name="difficulty"
              className={`${styles["form__input"]} ${styles["form__select"]}`}
              id="tours-select"
              required
            >
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
              ref={price}
              type="number"
              className={styles["form__input"]}
              min="1"
              max="100000"
              required
            />
            <label className={styles["form__label"]} htmlFor="date">
              Date
            </label>
            <input
              ref={date}
              type="date"
              className={styles["form__input"]}
              required
            />
          </div>

          <div className={`${styles["form__group"]} ma-bt-md"`}>
            <label className={styles["form__label"]} htmlFor="summary">
              Summary
            </label>

            <textarea
              ref={summary}
              className={styles["form__input"]}
              id={styles["textarea"]}
              type="text"
              required
              name="summary"
              rows="3"
              defaultValue=" Leave summary for the tour..."
            ></textarea>
            <label className={styles["form__label"]} htmlFor="description">
              Description
            </label>

            <textarea
              ref={description}
              className={styles["form__input"]}
              id={styles["textarea"]}
              type="text"
              required
              name="description"
              rows="5"
              cols="33"
              defaultValue=" Leave description for the tour..."
            ></textarea>
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
