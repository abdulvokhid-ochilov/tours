import Header from "./components/Header/Header";
import Tours from "./components/TourCard/Tours/Tours";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import SignUp from "./components/Signup/SIgnUp";
import TourHeader from "./components/TourDetails/TourHeader/TourHeader";
import TourDescription from "./components/TourDetails/TourDescription/TourDescription";
import TourPictures from "./components/TourDetails/TourPictures/TourPictures";
import TourMap from "./components/TourDetails/TourMap/TourMap";
import TourReviews from "./components/TourDetails/TourReviews/TourReviews";
import TourCTA from "./components/TourDetails/TourCTA/TourCTA";
import Account from "./components/Account/Account";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          /> */}
      </Routes>
      {/* <Tours /> */}

      {/* <SignUp /> */}
      {/* <TourHeader /> */}
      {/* <TourDescription /> */}
      {/* <TourPictures /> */}
      {/* <TourMap /> */}
      {/* <TourReviews /> */}
      {/* <TourCTA /> */}
      {/* <Account /> */}
      <Footer />
    </div>
  );
}

export default App;
