import styles from "./Account.module.css";
import AccountSettings from "./AccountSettings/AccountSettings";
import AccountMenu from "./AccountMenu/AccountMenu";
import AccountReviews from "./AccountReviews/AccountReviews";
import AccountReview from "./AccountReview/AccountReview";
import ManageTours from "./Admin/ManageTours/ManageTours";
import CreateTour from "./Admin/CreateTour/CreateTour";

const Account = () => {
  return (
    <main className="main">
      <div className={styles["user-view"]}>
        <AccountMenu />
        {/* <AccountSettings /> */}
        {/* <AccountReviews /> */}
        {/* <AccountReview /> */}
        {/* <ManageTours /> */}
        <CreateTour />
      </div>
    </main>
  );
};

export default Account;
