import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Sheard/Navbar/Loading";
import UsersData from "./UsersData";

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/users", {
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
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Make an admin</th>
            </tr>
          </thead>
          {users.map((user, index) => (
            <UsersData
              user={user}
              key={user._id}
              refetch={refetch}
              index={index}
            />
          ))}
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
