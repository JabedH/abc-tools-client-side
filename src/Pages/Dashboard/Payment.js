import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Sheard/Navbar/Loading";

const stripePromise = loadStripe(
  "pk_test_51L1DFFCwGCfttUfe1ga8fmlmuPMDoPK74Ff0taFqPrzWrE5y12nRMi3hp4uRP9TJ57oPrAkemLc0jH1lifIW2pUq00lITNOwS5"
);

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;
  const { data: booking, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      // headers: {
      //   authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      // },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl mb-10">
        <div class="card-body">
          <h2 class="card-title font-bold text-blue-400">
            {" "}
            Hello,{booking.name}{" "}
          </h2>
          <p className="font-bold">Please pay for </p>
          <p className="text-orange-700">
            Your Appointment: <span className="text-orange"></span>
          </p>
          <p>Please pay $</p>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          {/* <Elements stripe={stripePromise}>
              <CheckoutForm appointment={appointment} />
            </Elements> */}
        </div>
      </div>
    </div>
  );
};

export default Payment;
