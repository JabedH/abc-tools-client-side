import React from "react";
import { toast } from "react-toastify";

const UsersData = ({ user, index, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://secret-journey-60034.herokuapp.com/users/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          toast("Successfully made an admin");
        }
      });
  };
  return (
    <>
      <tbody>
        <tr>
          <th>{index + 1}</th>
          <td>{user.email}</td>
          <td>
            {role !== "admin" && (
              <button class="btn btn-xs" onClick={makeAdmin}>
                Make Admin
              </button>
            )}
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default UsersData;
