import styles from "./AccountMenu.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AccountMenu = () => {
  const role = useSelector((state) => state.auth.user.role);

  return (
    <nav className={styles["user-view__menu"]}>
      <ul className={styles["side-nav"]}>
        <li className={styles["side-nav--active"]}>
          <Link to="./">
            <svg>
              <use href="img/icons.svg#icon-settings"></use>
            </svg>
            Settings
          </Link>
        </li>
        <li>
          <Link to="/">
            <svg>
              <use href="img/icons.svg#icon-briefcase"></use>
            </svg>
            My bookings
          </Link>
        </li>
        <li>
          <Link to="./reviews">
            <svg>
              <use href="img/icons.svg#icon-star"></use>
            </svg>
            My reviews
          </Link>
        </li>
        <li>
          <Link to="./review">
            <svg>
              <use href="img/icons.svg#icon-edit-3"></use>
            </svg>
            Leave a review
          </Link>
        </li>
        <li>
          <Link to="/">
            <svg>
              <use href="img/icons.svg#icon-credit-card"></use>
            </svg>
            Billing
          </Link>
        </li>
        {role === "admin" && (
          <div className={styles["admin-nav"]}>
            <ul className={styles["side-nav"]}>
              <li>
                <Link to="./tours">
                  <svg>
                    <use href="img/icons.svg#icon-map"></use>
                  </svg>
                  Manage tours
                </Link>
              </li>
              <li>
                <Link to="./create-tour">
                  <svg>
                    <use href="img/icons.svg#icon-map-pin"></use>
                  </svg>
                  Create a tour
                </Link>
              </li>
              <li>
                <Link to="./users">
                  <svg>
                    <use href="img/icons.svg#icon-users"></use>
                  </svg>
                  Manage users
                </Link>
              </li>
              <li>
                <Link to="./reviews">
                  <svg>
                    <use href="img/icons.svg#icon-star"></use>
                  </svg>
                  Manage reviews
                </Link>
              </li>
              <li>
                <Link to="/">
                  <svg>
                    <use href="img/icons.svg#icon-briefcase"></use>
                  </svg>
                  Manage bookings
                </Link>
              </li>
            </ul>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default AccountMenu;
