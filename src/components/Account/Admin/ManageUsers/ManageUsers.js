import styles from "./ManageUsers.module.css";

const ManageUsers = () => {
  const users = [];

  for (let i = 0; i < 9; i++) {
    users.push(
      <div className={styles["user__card"]}>
        <div className={styles["user__avatar"]}>
          <div className={styles["user__name"]}>
            <img
              src="/img/users/user-7.jpg"
              alt="Jim Brown"
              className={styles["user__avatar-img"]}
            />
            <h6 className={styles["user"]}>Jim Brown</h6>
          </div>
          <div className={styles["user__data"]}>
            <svg className={styles["user__icon"]}>
              <use href="img/icons.svg#icon-mail"></use>
            </svg>
            <span>jim_brown@mail.com</span>
          </div>
        </div>
        <div className={styles["user__button"]}>
          <a href="/" className="btn btn--delete btn--small">
            Delete
          </a>
        </div>
      </div>
    );
  }
  return (
    <div className={styles["admin-view__content"]}>
      <div className={styles["users"]}>{users.map((user) => user)}</div>
    </div>
  );
};

export default ManageUsers;
