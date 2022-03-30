import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUpPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AccountPage from "./pages/AccountPage";
import { useEffect } from "react";
import { fetchUserProfile } from "./store/auth-actions";
import { getAllUsers } from "./store/users-actions";
import { getAllTours } from "./store/tours-actions";
import { useDispatch, useSelector } from "react-redux";
import TourPage from "./pages/TourPage";
import NotFound from "./pages/NotFound";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
let stripePromise;
(async () => {
  stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
})();

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const role = useSelector((state) => state.auth.user.role);
  const status = useSelector((state) => state.auth.loginStatus);

  const options = {
    // passing the client secret obtained from the server
    clientSecret: "{{CLIENT_SECRET}}",
  };

  useEffect(() => {
    const token = localStorage.getItem("toursUserToken");
    if (token) {
      dispatch(fetchUserProfile(token, navigate));
    }

    dispatch(getAllTours());
    if (role === "admin") dispatch(getAllUsers(token));
  }, []);

  return (
    <Elements stripe={stripePromise} options={options}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/account/*"
            element={status ? <AccountPage /> : <NotFound />}
          />
          <Route path="/tour/:id" element={<TourPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          className="toaster"
        />
        <Footer />
      </div>
    </Elements>
  );
}

export default App;
