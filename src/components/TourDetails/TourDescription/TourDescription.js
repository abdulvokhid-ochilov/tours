import styles from "./TourDescription.module.css";

const TourDescription = () => {
  return (
    <section className={styles["section-description"]}>
      <div className={styles["overview-box"]}>
        <div>
          <div className={styles["overview-box__group"]}>
            <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
            <div className={styles["overview-box__detail"]}>
              <svg className={styles["overview-box__icon"]}>
                <use href="img/icons.svg#icon-calendar"></use>
              </svg>
              <span className={styles["overview-box__label"]}>Next date</span>
              <span className={styles["overview-box__text"]}>August 2021</span>
            </div>
            <div className={styles["overview-box__detail"]}>
              <svg className={styles["overview-box__icon"]}>
                <use href="img/icons.svg#icon-trending-up"></use>
              </svg>
              <span className={styles["overview-box__label"]}>Difficulty</span>
              <span className={styles["overview-box__text"]}>Medium</span>
            </div>
            <div className={styles["overview-box__detail"]}>
              <svg className={styles["overview-box__icon"]}>
                <use href="img/icons.svg#icon-user"></use>
              </svg>
              <span className={styles["overview-box__label"]}>
                Participants
              </span>
              <span className={styles["overview-box__text"]}>10 people</span>
            </div>
            <div className={styles["overview-box__detail"]}>
              <svg className={styles["overview-box__icon"]}>
                <use href="img/icons.svg#icon-star"></use>
              </svg>
              <span className={styles["overview-box__label"]}>Rating</span>
              <span className={styles["overview-box__text"]}>4.9 / 5</span>
            </div>
          </div>

          <div className={styles["overview-box__group"]}>
            <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>

            <div className={styles["overview-box__detail"]}>
              <img
                src="img/users/user-19.jpg"
                alt="Lead guide"
                className={styles["overview-box__img"]}
              />
              <span className={styles["overview-box__label"]}>Lead guide</span>
              <span className={styles["overview-box__text"]}>
                Steven Miller
              </span>
            </div>
            <div className={styles["overview-box__detail"]}>
              <img
                src="img/users/user-18.jpg"
                alt="Tour guide"
                className={styles["overview-box__img"]}
              />
              <span className={styles["overview-box__label"]}>Tour guide</span>
              <span className={styles["overview-box__text"]}>Lisa Brown</span>
            </div>
            <div className={styles["overview-box__detail"]}>
              <img
                src="img/users/user-17.jpg"
                alt="Intern"
                className={styles["overview-box__img"]}
              />
              <span className={styles["overview-box__label"]}>Intern</span>
              <span className={styles["overview-box__text"]}>Max Smith</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["description-box"]}>
        <h2 className="heading-secondary ma-bt-lg">
          About the park camper tour
        </h2>
        <p className={styles["description__text"]}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <p className={styles["description__text"]}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum!
        </p>
      </div>
    </section>
  );
};

export default TourDescription;
