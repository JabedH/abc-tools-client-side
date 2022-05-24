import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/booking")
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);
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
                  <Link to={`/dashboard/payment/${book._id}`}>
                    {" "}
                    <button className="btn btn-xs btn-success">pay</button>{" "}
                  </Link>
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
