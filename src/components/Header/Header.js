import styles from "./Header.module.css";
import { ReactComponent as Search } from "../../assets/icons.svg";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <nav className={`${styles["nav"]} ${styles["nav--tours"]}`}>
        <a href="/" className={styles["nav__el"]}>
          All tours
        </a>
        <form className={styles.nav__search}>
          <button className={styles["nav__search-btn"]}>
            <Search />
          </button>
          <input
            type="text"
            placeholder="Search tours"
            className={styles["nav__search-input"]}
          />
        </form>
      </nav>
      <div className={styles["header__logo"]}>
        <img src="./img/logo-white.png" alt="Natours logo" />
      </div>
      <nav className={`${styles["nav"]} ${styles["nav--user"]}`}>
        <a href="/" className={styles["nav__el"]}>
          My bookings
        </a>
        <a href="/" className={styles["nav__el"]}>
          <img
            src="./img/users/user-5.jpg"
            className={styles["nav__user-img"]}
            alt=""
          />
          <span>Name</span>
        </a>

        {/* <button className={styles["nav__el"]}>Log in</button>
        <button className={`${styles["nav__el"]} ${styles["nav__el--cta"]}`}>
          Sign up
        </button> */}
      </nav>
    </header>
  );
};

export default Header;
