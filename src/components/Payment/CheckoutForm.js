import styles from "./CheckoutForm.module.css";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";

const CheckoutForm = ({ id }) => {
  const stripe = useStripe();
  const elements = useElements();
  const token = useSelector((state) => state.auth.token);

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const { error: backendError, clientSecret } = await fetch(
      `http://localhost:5000/api/v1/bookings/create-payment-intent/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((res) => res.json());

    if (backendError) {
      console.log(backendError);
      return;
    }

    //message
    const { error: stripeError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: elements.getElement(CardElement) },
      });

    if (stripeError) {
      console.log(stripeError);
    }

    console.log(paymentIntent);
  };
  return (
    <section className={styles["section-payment"]}>
      <div className={styles.payment}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="card">Card</label>
          <CardElement id="card" />
          <button
            disabled={!stripe}
            className="btn btn--small btn--green right"
          >
            Pay
          </button>
        </form>
      </div>
    </section>
  );
};

export default CheckoutForm;