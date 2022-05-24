import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [booking, setBooking] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?userEmail=${user?.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setBooking(data));
    }
  }, [user]);
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
              <th>Payment</th>
            </tr>
          </thead>
          {booking.map((book, index) => (
            <tbody>
              <tr>
                <th>{index + 1}</th>
                <td>{book.name}</td>
                <td>{book.toolName}</td>
                <td>{book.email}</td>
                <td>
                  {book.price && !book.paid && (
                    <Link to={`/dashboard/payment/${book._id}`}>
                      {" "}
                      <button className="btn btn-xs btn-success">pay</button>
                    </Link>
                  )}
                  {book.price && !book.paid && (
                    <button className="btn btn-xs border-0 ml-2 bg-red-600">
                      Cancel
                    </button>
                  )}
                  {book.price && book.paid && (
                    <p>
                      <span className="text-green-500 font-bold">Paid</span>
                    </p>
                  )}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
