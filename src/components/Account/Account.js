import styles from "./Account.module.css";

const Account = (props) => {
  return (
    <main className="main">
      <div className={styles["user-view"]}>{props.children}</div>
    </main>
  );
};

export default Account;
