import { authActions } from "./auth-slice";
import { toast } from "react-toastify";

// export const fetchCartData = () => {
//   return async (dispatch) => {
//     const fetchData = async () => {
//       const response = await fetch(
//         "https://react-http-6b4a6.firebaseio.com/cart.json"
//       );

//       if (!response.ok) {
//         throw new Error("Could not fetch cart data!");
//       }

//       const data = await response.json();

//       return data;
//     };

//     try {
//       const cartData = await fetchData();
//       dispatch(
//         cartActions.replaceCart({
//           items: cartData.items || [],
//           totalQuantity: cartData.totalQuantity,
//         })
//       );
//     } catch (error) {
//       dispatch(
//         uiActions.showNotification({
//           status: "error",
//           title: "Error!",
//           message: "Fetching cart data failed!",
//         })
//       );
//     }
//   };
// };

export const fetchUserData = (user, navigate) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch("http://localhost:5000/api/v1/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error("Login failed.");
      }

      const data = await response.json();

      return data;
    };

    try {
      const userData = await toast.promise(sendRequest(), {
        pending: "Logging in ⚙️",
        success: "Logged in successfully🔑",
        error: "Please check your credentials⚠️",
      });
      console.log(userData);
      dispatch(
        authActions.loginUser({
          user: userData.data.user,
          token: userData.token,
        })
      );

      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
};

export const signUpUser = (user, navigate) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "http://localhost:5000/api/v1/users/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        }
      );

      if (!response.ok) {
        throw new Error("Signup failed.");
      }

      const data = await response.json();

      return data;
    };

    try {
      const userData = await toast.promise(sendRequest(), {
        pending: "Signing up ⚙️",
        success: "Signing up successfully🔑",
        error: "Please check your credentials⚠️",
      });
      console.log(userData);
      dispatch(
        authActions.loginUser({
          user: userData.data.user,
          token: userData.token,
        })
      );

      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
};
