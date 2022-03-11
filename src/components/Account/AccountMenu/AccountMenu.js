import styles from "./AccountMenu.module.css";

const AccountMenu = () => {
  return (
    <nav className={styles["user-view__menu"]}>
      <ul className={styles["side-nav"]}>
        <li className={styles["side-nav--active"]}>
          <a href="/">
            <svg>
              <use href="img/icons.svg#icon-settings"></use>
            </svg>
            Settings
          </a>
        </li>
        <li>
          <a href="/">
            <svg>
              <use href="img/icons.svg#icon-briefcase"></use>
            </svg>
            My bookings
          </a>
        </li>
        <li>
          <a href="/">
            <svg>
              <use href="img/icons.svg#icon-star"></use>
            </svg>
            My reviews
          </a>
        </li>
        <li>
          <a href="/">
            <svg>
              <use href="img/icons.svg#icon-edit-3"></use>
            </svg>
            Leave a review
          </a>
        </li>
        <li>
          <a href="/">
            <svg>
              <use href="img/icons.svg#icon-credit-card"></use>
            </svg>
            Billing
          </a>
        </li>
        <div className={styles["admin-nav"]}>
          <h5 className={styles["admin-nav__heading"]}>Admin</h5>
          <ul className={styles["side-nav"]}>
            <li>
              <a href="/">
                <svg>
                  <use href="img/icons.svg#icon-map"></use>
                </svg>
                Manage tours
              </a>
            </li>
            <li>
              <a href="/">
                <svg>
                  <use href="img/icons.svg#icon-users"></use>
                </svg>
                Manage users
              </a>
            </li>
            <li>
              <a href="/">
                <svg>
                  <use href="img/icons.svg#icon-star"></use>
                </svg>
                Manage reviews
              </a>
            </li>
            <li>
              <a href="/">
                <svg>
                  <use href="img/icons.svg#icon-briefcase"></use>
                </svg>
                Manage bookings
              </a>
            </li>
          </ul>
        </div>
      </ul>
    </nav>
  );
};

export default AccountMenu;
