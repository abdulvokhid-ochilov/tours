import styles from "./Header.module.css";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const status = useSelector((state) => state.auth.loginStatus);
  const name = useSelector((state) => state.auth.user?.name);

  return (
    <header className={styles["header"]}>
      <nav className={`${styles["nav"]} ${styles["nav--tours"]}`}>
        <Link to="/" className={styles["nav__el"]}>
          All tours
        </Link>
        <form className={styles.nav__search}>
          <button className={styles["nav__search-btn"]}>
            <svg>
              <use href="img/icons.svg#icon-search"></use>
            </svg>
          </button>
          <input
            type="text"
            placeholder="Search tours"
            className={styles["nav__search-input"]}
          />
        </form>
      </nav>
      <div className={styles["header__logo"]}>
        <img src="/img/logo-white.png" alt="Natours logo" />
      </div>
      <nav className={`${styles["nav"]} ${styles["nav--user"]}`}>
        {status ? (
          <Link to="/account" className={styles["nav__el"]}>
            <img
              src="./img/users/user-5.jpg"
              className={styles["nav__user-img"]}
              alt=""
            />
            <span>{name}</span>
          </Link>
        ) : (
          <>
            <Link to="/login" className={styles["nav__el"]}>
              Log in
            </Link>
            <Link
              to="/signup"
              className={`${styles["nav__el"]} ${styles["nav__el--cta"]}`}
            >
              Sign up
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
