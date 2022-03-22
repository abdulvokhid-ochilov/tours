import styles from "./EditTour.module.css";
import { useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { createNewTour } from "../../../../store/tours-actions";

const EditTour = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const id = useParams().id;

  const name_ = useRef();
  const duration_ = useRef();
  const groupSize_ = useRef();
  const difficulty_ = useRef();
  const price_ = useRef();
  const date_ = useRef();
  const summary_ = useRef();
  const description_ = useRef();

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/tours/${id}`)
      .then((results) => results.json())
      .then(
        ({
          data: {
            tour: {
              name,
              duration,
              maxGroupSize,
              difficulty,
              price,
              startDates,
              summary,
              description,
            },
          },
        }) => {
          console.log(name);
          name_.current.value = name;
          duration_.current.value = duration;
          groupSize_.current.value = maxGroupSize;
          difficulty_.current.value = difficulty;
          price_.current.value = price;
          date_.current.value = startDates[0].split("T")[0];
          summary_.current.value = summary;
          description_.current.value = description;
        }
      );
  }, [id]);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    // dispatch(
    //   createNewTour(
    //     {
    //       name: name.current.value,
    //       duration: duration.current.value,
    //       maxGroupSize: groupSize.current.value,
    //       difficulty: difficulty.current.value,
    //       price: price.current.value,
    //       summary: summary.current.value,
    //       description: description.current.value,
    //       imageCover: "tour-1-cover.jpg",
    //       images: ["tour-1-1.jpg", "tour-1-2.jpg", "tour-1-3.jpg"],
    //       startDates: [date.current.value],
    //     },
    //     token,
    //     navigate
    //   )
    // );
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
              ref={name_}
              type="text"
              className={styles["form__input"]}
              required
            />
            <label className={styles["form__label"]} htmlFor="duration">
              Duration
            </label>
            <input
              ref={duration_}
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
              ref={groupSize_}
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
              ref={difficulty_}
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
              ref={price_}
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
              ref={date_}
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
              ref={summary_}
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
              ref={description_}
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
                src="/img/tours/tour-2-1.jpg"
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
                src="/img/tours/tour-2-2.jpg"
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
                src="/img/tours/tour-2-3.jpg"
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
                src="/img/tours/tour-4-3.jpg"
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

export default EditTour;
