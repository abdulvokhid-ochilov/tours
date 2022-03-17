import { authActions } from "./auth-slice";

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

export const fetchUserData = (user) => {
  return async (dispatch) => {
    // dispatch(
    //   uiActions.showNotification({
    //     status: "pending",
    //     title: "Sending...",
    //     message: "Sending cart data!",
    //   })
    // );

    const sendRequest = async () => {
      const response = await fetch("http://localhost:5000/api/v1/users/login", {
        method: "POST",
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error("Login failed.");
      }

      const data = await response.json();

      return data;
    };

    try {
      const userData = await sendRequest();

      dispatch(
        authActions.loginUser({
          user: userData.data.user,
          token: userData.token,
        })
      );

      console.log(userData);

      //   dispatch(
      //     uiActions.showNotification({
      //       status: "success",
      //       title: "Success!",
      //       message: "Sent cart data successfully!",
      //     })
      //   );
    } catch (error) {
      console.log(error);
      //   dispatch(
      //     uiActions.showNotification({
      //       status: "error",
      //       title: "Error!",
      //       message: "Sending cart data failed!",
      //     })
      //   );
    }
  };
};
