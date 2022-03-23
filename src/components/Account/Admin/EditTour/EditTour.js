import styles from "./EditTour.module.css";
import { useRef, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateTour } from "../../../../store/tours-actions";

const EditTour = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const id = useParams().id;

  const [coverImg, setCoverImg] = useState({ src: null, file: null });
  const [tourImg1, setTourImg1] = useState({ src: null, file: null });
  const [tourImg2, setTourImg2] = useState({ src: null, file: null });
  const [tourImg3, setTourImg3] = useState({ src: null, file: null });

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
              images,
              imageCover,
            },
          },
        }) => {
          name_.current.value = name;
          duration_.current.value = duration;
          groupSize_.current.value = maxGroupSize;
          difficulty_.current.value = difficulty;
          price_.current.value = price;
          date_.current.value = startDates[0].split("T")[0];
          summary_.current.value = summary;
          description_.current.value = description;
          setCoverImg({ src: imageCover, file: null });
          setTourImg1({ src: images[0], file: null });
          setTourImg2({ src: images[1], file: null });
          setTourImg3({ src: images[2], file: null });
        }
      );
  }, [id]);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name_.current.value);
    formData.append("duration", duration_.current.value);
    formData.append("maxGroupSize", groupSize_.current.value);
    formData.append("difficulty", difficulty_.current.value);
    formData.append("price", price_.current.value);
    formData.append("summary", summary_.current.value);
    formData.append("description", description_.current.value);
    formData.append("imageCover", coverImg.file ? coverImg.file : coverImg.src);
    formData.append("images", tourImg1.file ? tourImg1.file : tourImg1.src);
    formData.append("images", tourImg2.file ? tourImg2.file : tourImg2.src);
    formData.append("images", tourImg3.file ? tourImg3.file : tourImg3.src);
    formData.append("startDates", date_.current.value);

    dispatch(updateTour(formData, id, token, navigate));
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
              <option value="medium" className="options">
                medium
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
                src={coverImg.src}
                alt=""
              />
              <input
                className={styles["form__upload"]}
                type="file"
                accept="image/*"
                id="cover"
                name="cover"
                onChange={(e) => {
                  setCoverImg({
                    src: URL.createObjectURL(e.target.files[0]),
                    file: e.target.files[0],
                  });
                }}
              />
              <label htmlFor="cover">Choose a cover image</label>
            </div>
            <div className={styles["photo__group"]}>
              <img
                className={styles["form__tour-photo"]}
                src={tourImg1.src}
                alt=""
              />
              <input
                className={styles["form__upload"]}
                type="file"
                accept="image/*"
                id="photo1"
                name="photo1"
                onChange={(e) => {
                  setTourImg1({
                    src: URL.createObjectURL(e.target.files[0]),
                    file: e.target.files[0],
                  });
                }}
              />
              <label htmlFor="photo1">Choose a tour image</label>
            </div>
            <div className={styles["photo__group"]}>
              <img
                className={styles["form__tour-photo"]}
                src={tourImg2.src}
                alt=""
              />
              <input
                className={styles["form__upload"]}
                type="file"
                accept="image/*"
                id="photo2"
                name="photo2"
                onChange={(e) => {
                  setTourImg2({
                    src: URL.createObjectURL(e.target.files[0]),
                    file: e.target.files[0],
                  });
                }}
              />
              <label htmlFor="photo2">Choose a tour image</label>
            </div>
            <div className={styles["photo__group"]}>
              <img
                className={styles["form__tour-photo"]}
                src={tourImg3.src}
                alt=""
              />
              <input
                className={styles["form__upload"]}
                type="file"
                accept="image/*"
                id="photo3"
                name="photo3"
                onChange={(e) => {
                  setTourImg3({
                    src: URL.createObjectURL(e.target.files[0]),
                    file: e.target.files[0],
                  });
                }}
              />
              <label htmlFor="photo3">Choose a tour image</label>
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
