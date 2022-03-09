import styles from "./Account.module.css";
import AccountContent from "./AccountContent/AccountContent";
import AccountMenu from "./AccountMenu/AccountMenu";

const Account = () => {
  return (
    <main className="main">
      <div className={styles["user-view"]}>
        <AccountMenu />
        <AccountContent />
      </div>
    </main>
  );
};

export default Account;
