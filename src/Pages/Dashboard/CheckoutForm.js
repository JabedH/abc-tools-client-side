import { async } from "@firebase/util";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ booking }) => {
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const { _id, price, name, userEmail } = booking;

  useEffect(() => {
    fetch("https://secret-journey-60034.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    setProcessing(true);
    setCardError(error?.message || " ");
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: userEmail,
          },
        },
      });
    if (intentError) {
      setCardError(intentError.message);
      setSuccess(" ");
      setProcessing(false);
    } else {
      setCardError(" ");
      console.log(paymentIntent);
      setTransactionId(paymentIntent.id);
      setSuccess("Congratulation! payment is successful");
    }
    const payment = {
      userId: _id,
      transactionId: paymentIntent.id,
    };
    fetch(`https://secret-journey-60034.herokuapp.com/booking/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(payment),
    })
      .then((res) => res.json())
      .then((data) => {
        setProcessing(true);
        console.log(data);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        {cardError && <p className="text-red-500"> {cardError} </p>}
        {cardError && (
          <p className="text-green-500">
            {" "}
            <>
              <p>{success}</p>{" "}
              <p className="text-orange-500">T.ID : {transactionId}</p>
            </>{" "}
          </p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
