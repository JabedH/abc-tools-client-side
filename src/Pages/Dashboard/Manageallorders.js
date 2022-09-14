import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../../Sheard/Navbar/Loading";
import ManageallordersData from "./ManageallordersData";

const Manageallorders = () => {
  const {
    data: booking,
    isLoading,
    refetch,
  } = useQuery("booking", () =>
    fetch("https://secret-journey-60034.herokuapp.com/allbooking", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className=" justify-around ">
      <div class="overflow-x-auto ">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Tool Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          {booking.map((book, index) => (
            <ManageallordersData
              refetch={refetch}
              book={book}
              id={book._id}
              index={index}
              key={book._id}
            />
          ))}
        </table>
      </div>
    </div>
  );
};

export default Manageallorders;
