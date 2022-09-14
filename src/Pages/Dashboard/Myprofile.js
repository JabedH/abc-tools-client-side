import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import MyProfileModal from "./MyProfileModal";
import picture from "../../img/user.png";
import { useQuery } from "react-query";
import Loading from "../../Sheard/Navbar/Loading";

const Myprofile = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const [getUsers, setGetUsers] = useState(null);
  const {
    data: newUsers,
    isLoading,
    refetch,
  } = useQuery("newUsers", () =>
    fetch(
      `https://secret-journey-60034.herokuapp.com/allusers?email=${user?.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="my-10 flex justify-center">
      {newUsers.map((newUser) => (
        <div>
          <div class="avatar mb-5">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user.photoURL ? user.photoURL : newUser.img} />
            </div>
          </div>
          <div class="overflow-x-auto">
            <table class="table  w-96">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Information</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Name: </td>
                  <td>{newUser.name ? newUser.name : user?.displayName}</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>{newUser?.email}</td>
                </tr>
                <tr>
                  <td>Phone:</td>
                  <td>{newUser?.phone}</td>
                </tr>
                <tr>
                  <td>Education:</td>
                  <td>{newUser?.education}</td>
                </tr>
                <tr>
                  <td>Address:</td>
                  <td>{newUser?.address}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <MyProfileModal newUser={newUser} refetch={refetch} />
        </div>
      ))}
    </div>
  );
};

export default Myprofile;
