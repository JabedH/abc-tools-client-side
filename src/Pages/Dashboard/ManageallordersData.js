import React from "react";

const ManageallordersData = ({ book, id, index }) => {
  const BookingId = {
    BookingId: id,
  };
  const handleStatus = (id) => {
    fetch(`http://localhost:5000/allbooking/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(BookingId),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <>
      <tbody key={book._id}>
        <tr>
          <th>{index + 1}</th>
          <td>{book.name}</td>
          <td>{book.toolName}</td>
          <td>{book.email}</td>
          <td>
            <button
              onClick={() => handleStatus(book._id)}
              className="btn btn-xs border-0 ml-2 bg-green-600"
            >
              {book.status}
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default ManageallordersData;
