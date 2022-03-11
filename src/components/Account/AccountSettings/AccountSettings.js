import styles from "./AccountSettings.module.css";

const AccountSettings = () => {
  return (
    <div className={styles["user-view__content"]}>
      <div className={styles["user-view__form-container"]}>
        <h2 className="heading-secondary ma-bt-md">Your account settings</h2>
        <form>
          <div className={styles["form__group"]}>
            <label className={styles["form__label"]} htmlFor="name">
              Name
            </label>
            <input
              className={styles["form__input"]}
              id="name"
              type="text"
              required="required"
              name="name"
            />
          </div>
          <div className={`${styles["form__group"]} ma-bt-md"`}>
            <label className={styles["form__label"]} htmlFor="email">
              Email address
            </label>
            <input
              className={styles["form__input"]}
              id="email"
              type="email"
              required="required"
              name="email"
            />
          </div>
          <div
            className={`${styles["form__group"]} ${styles["form__photo-upload"]}`}
          >
            <img
              className={styles["form__user-photo"]}
              src="./img/users/user-5.jpg"
              alt=""
            />
            <input
              className={styles["form__upload"]}
              type="file"
              accept="image/*"
              id="photo"
              name="photo"
            />
            <label htmlFor="photo">Choose new photo</label>
          </div>
          <div className={`${styles["form__group"]} right`}>
            <button className="btn btn--small btn--green">Save settings</button>
          </div>
        </form>
      </div>
      <div className={styles["line"]}>&nbsp;</div>
      <div className={styles["user-view__form-container"]}>
        <h2 className="heading-secondary ma-bt-md">Password change</h2>
        <form>
          <div className={styles["form__group"]}>
            <label className={styles["form__label"]} htmlFor="password-current">
              Current password
            </label>
            <input
              className={styles["form__input"]}
              id="password-current"
              type="password"
              placeholder="••••••••"
              required="required"
              minlength="8"
            />
          </div>
          <div className={styles["form__group"]}>
            <label className={styles["form__label"]} htmlFor="password">
              New password
            </label>
            <input
              className={styles["form__input"]}
              id="password"
              type="password"
              placeholder="••••••••"
              required="required"
              minlength="8"
            />
          </div>
          <div className={`${styles["form__group"]} ma-bt-lg`}>
            <label className={styles["form__label"]} htmlFor="password-confirm">
              Confirm password
            </label>
            <input
              className={styles["form__input"]}
              id="password-confirm"
              type="password"
              placeholder="••••••••"
              required="required"
              minlength="8"
            />
          </div>
          <div className={`${styles["form__group"]} right`}>
            <button
              className={`btn btn--small btn--green ${styles["btn--save-password"]}`}
            >
              Save password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountSettings;
