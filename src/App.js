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
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("toursUserToken");
    if (token) {
      dispatch(fetchUserProfile(token, navigate));
    }

    dispatch(getAllTours());
    dispatch(getAllUsers(token));
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/account/*" element={<AccountPage />} />
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
  );
}

export default App;
