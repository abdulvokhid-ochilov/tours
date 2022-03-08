import styles from "./Login.module.css";

const Login = () => {
  return (
    <main className={`${styles["main"]} ${styles["login-form"]}`}>
      <h2 className={`${styles["heading-secondary"]} ${styles["ma-bt-lg"]}`}>
        Log into your account
      </h2>
      <form className={`${styles["form__group"]}`}>
        <label htmlFor="email" className={`${styles["form__label"]}`}>
          Email address
        </label>
        <input
          type="email"
          className={`${styles["form__input"]}`}
          placeholder="you@example.com"
          required
        />
        <label htmlFor="password" className={`${styles["form__label"]}`}>
          Password
        </label>
        <input
          className={`${styles["form__input"]}`}
          type="password"
          placeholder="••••••••"
          required
          minLength={8}
        />
        <button type="submit" className="btn btn--green">
          Login
        </button>
      </form>
    </main>
  );
};

export default Login;
