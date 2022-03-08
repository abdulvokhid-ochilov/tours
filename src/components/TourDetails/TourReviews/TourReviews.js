import styles from "./TourReviews.module.css";

const TourReviews = () => {
  return (
    <section className={styles["section-reviews"]}>
      <div className={styles["reviews"]}>
        <div className={styles["reviews__card"]}>
          <div className={styles["reviews__avatar"]}>
            <img
              src="img/users/user-7.jpg"
              alt="Jim Brown"
              className={styles["reviews__avatar-img"]}
            />
            <h6 className={styles["reviews__user"]}>Jim Brown</h6>
          </div>
          <p className={styles["reviews__text"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            dignissimos sint quo commodi corrupti accusantium veniam saepe
            numquam.
          </p>
          <div className={styles["reviews__rating"]}>
            <svg
              className={`${styles["reviews__star"]} ${styles["reviews__star--active"]}`}
            >
              <use href="img/icons.svg#icon-star"></use>
            </svg>
            <svg
              className={`${styles["reviews__star"]} ${styles["reviews__star--active"]}`}
            >
              <use href="img/icons.svg#icon-star"></use>
            </svg>
            <svg
              className={`${styles["reviews__star"]} ${styles["reviews__star--active"]}`}
            >
              <use href="img/icons.svg#icon-star"></use>
            </svg>
            <svg
              className={`${styles["reviews__star"]} ${styles["reviews__star--active"]}`}
            >
              <use href="img/icons.svg#icon-star"></use>
            </svg>
            <svg
              className={`${styles["reviews__star"]} ${styles["reviews__star--active"]}`}
            >
              <use href="img/icons.svg#icon-star"></use>
            </svg>
          </div>
        </div>

        <div className={styles["reviews__card"]}>
          <div className={styles["reviews__avatar"]}>
            <img
              src="img/users/user-14.jpg"
              alt="Laura Wilson"
              className={styles["reviews__avatar-img"]}
            />
            <h6 className={styles["reviews__user"]}>Laura Wilson</h6>
          </div>
          <p className={styles["reviews__text"]}>
            Veniam adipisci blanditiis, corporis sit magnam aperiam ad, fuga
            reiciendis provident deleniti cumque similique itaque animi,
            sapiente obcaecati beatae accusantium.
          </p>
          <div className={styles["reviews__rating"]}>
            <svg
              className={`${styles["reviews__star"]} ${styles["reviews__star--active"]}`}
            >
              <use href="img/icons.svg#icon-star"></use>
            </svg>
            <svg
              className={`${styles["reviews__star"]} ${styles["reviews__star--active"]}`}
            >
              <use href="img/icons.svg#icon-star"></use>
            </svg>
            <svg
              className={`${styles["reviews__star"]} ${styles["reviews__star--active"]}`}
            >
              <use href="img/icons.svg#icon-star"></use>
            </svg>
            <svg
              className={`${styles["reviews__star"]} ${styles["reviews__star--active"]}`}
            >
              <use href="img/icons.svg#icon-star"></use>
            </svg>
            <svg
              className={`${styles["reviews__star"]} ${styles["reviews__star--inactive"]}`}
            >
              <use href="img/icons.svg#icon-star"></use>
            </svg>
          </div>
        </div>

        <div className={styles["reviews__card"]}>
          <div className={styles["reviews__avatar"]}>
            <img
              src="img/users/user-15.jpg"
              alt="Ben Hadley"
              className={styles["reviews__avatar-img"]}
            />
            <h6 className={styles["reviews__user"]}>Ben Hadley</h6>
          </div>
          <p className={styles["reviews__text"]}>
            Debitis, nesciunt itaque! At quis officia natus. Suscipit,
            reprehenderit blanditiis mollitia distinctio ducimus porro tempore
            perspiciatis sunt vel.
          </p>
          <div className={styles["reviews__rating"]}>
            <svg
              className={`${styles["reviews__star"]} ${styles["reviews__star--active"]}`}
            >
              <use href="img/icons.svg#icon-star"></use>
            </svg>
            <svg
              className={`${styles["reviews__star"]} ${styles["reviews__star--active"]}`}
            >
              <use href="img/icons.svg#icon-star"></use>
            </svg>
            <svg
              className={`${styles["reviews__star"]} ${styles["reviews__star--active"]}`}
            >
              <use href="img/icons.svg#icon-star"></use>
            </svg>
            <svg
              className={`${styles["reviews__star"]} ${styles["reviews__star--active"]}`}
            >
              <use href="img/icons.svg#icon-star"></use>
            </svg>
            <svg
              className={`${styles["reviews__star"]} ${styles["reviews__star--active"]}`}
            >
              <use href="img/icons.svg#icon-star"></use>
            </svg>
          </div>
        </div>

        <div className={styles["reviews__card"]}>
          <div className={styles["reviews__avatar"]}>
            <img
              src="img/users/user-6.jpg"
              alt="Alexander Jones"
              className={styles["reviews__avatar-img"]}
            />
            <h6 className={styles["reviews__user"]}>Alexander Jones</h6>
          </div>
          <p className={styles["reviews__text"]}>
            Quaerat laborum eveniet ut aut maiores doloribus mollitia aperiam
            quis praesentium sed inventore harum aliquam veritatis at adipisci
            ea assumenda!
          </p>
          <div className={styles["reviews__rating"]}>
            <svg
              className={`${styles["reviews__star"]} ${styles["reviews__star--active"]}`}
            >
              <use href="img/icons.svg#icon-star"></use>
            </svg>
            <svg
              className={`${styles["reviews__star"]} ${styles["reviews__star--active"]}`}
            >
              <use href="img/icons.svg#icon-star"></use>
            </svg>
            <svg
              className={`${styles["reviews__star"]} ${styles["reviews__star--active"]}`}
            >
              <use href="img/icons.svg#icon-star"></use>
            </svg>
            <svg
              className={`${styles["reviews__star"]} ${styles["reviews__star--active"]}`}
            >
              <use href="img/icons.svg#icon-star"></use>
            </svg>
            <svg
              className={`${styles["reviews__star"]} ${styles["reviews__star--active"]}`}
            >
              <use href="img/icons.svg#icon-star"></use>
            </svg>
          </div>
        </div>

        <div className={styles["reviews__card"]}>
          <div className={styles["reviews__avatar"]}>
            <img
              src="img/users/user-3.jpg"
              alt="Ayla Cornell"
              className={styles["reviews__avatar-img"]}
            />
            <h6 className={styles["reviews__user"]}>Ayla Cornell</h6>
          </div>
          <p className={styles["reviews__text"]}>
            Perferendis quo aliquid iste quas laboriosam molestias illo est
            voluptatem odit ea. Vero placeat culpa provident dicta maiores!
          </p>
          <div className={styles["reviews__rating"]}>
            <svg
              className={`${styles["reviews__star"]} ${styles["reviews__star--active"]}`}
            >
              <use href="img/icons.svg#icon-star"></use>
            </svg>
            <svg
              className={`${styles["reviews__star"]} ${styles["reviews__star--active"]}`}
            >
              <use href="img/icons.svg#icon-star"></use>
            </svg>
            <svg
              className={`${styles["reviews__star"]} ${styles["reviews__star--active"]}`}
            >
              <use href="img/icons.svg#icon-star"></use>
            </svg>
            <svg
              className={`${styles["reviews__star"]} ${styles["reviews__star--active"]}`}
            >
              <use href="img/icons.svg#icon-star"></use>
            </svg>
            <svg
              className={`${styles["reviews__star"]} ${styles["reviews__star--active"]}`}
            >
              <use href="img/icons.svg#icon-star"></use>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourReviews;
