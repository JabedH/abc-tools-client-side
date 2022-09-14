import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Manageproducts = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("https://secret-journey-60034.herokuapp.com/tools", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const newData = data.reverse();
        setTools(newData);
      });
  }, []);

  const handleDeleteOne = (id) => {
    console.log(id);
    const confirmDelete = window.confirm("Are you want to delete?");
    if (confirmDelete) {
      const url = `https://secret-journey-60034.herokuapp.com/tools/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = tools.filter((tool) => tool._id !== id);
            setTools(remaining);
          }
        });
    }
  };
  return (
    <div className=" justify-around ">
      <div class="overflow-x-auto ">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Number</th>
              <th>Tool Name</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          {tools.map((tool, index) => (
            <tbody key={tool._id}>
              <tr>
                <th>{index + 1}</th>
                <td>{tool.name}</td>
                <td>{tool.price}</td>
                <td>
                  <button
                    onClick={() => handleDeleteOne(tool._id)}
                    className="btn btn-xs border-0 ml-2 bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Manageproducts;
