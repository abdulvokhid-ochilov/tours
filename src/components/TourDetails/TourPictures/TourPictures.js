import styles from "./TourPictures.module.css";

const TourPictures = () => {
  return (
    <section className={styles["section-pictures"]}>
      <div className={styles["picture-box"]}>
        <img
          className={`${styles["picture-box__img"]} ${styles["picture-box__img--1"]}`}
          src="img/tours/tour-5-1.jpg"
          alt="The Park Camper Tour 1"
        />
      </div>
      <div className={styles["picture-box"]}>
        <img
          className={`${styles["picture-box__img"]} ${styles["picture-box__img--2"]}`}
          src="img/tours/tour-5-2.jpg"
          alt="The Park Camper Tour 1"
        />
      </div>
      <div className={styles["picture-box"]}>
        <img
          className={`${styles["picture-box__img"]} ${styles["picture-box__img--3"]}`}
          src="img/tours/tour-5-3.jpg"
          alt="The Park Camper Tour 1"
        />
      </div>
    </section>
  );
};

export default TourPictures;
