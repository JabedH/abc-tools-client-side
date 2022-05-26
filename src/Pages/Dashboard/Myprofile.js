import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import MyProfileModal from "./MyProfileModal";
import picture from "../../img/user.png";

const Myprofile = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const [newUsers, setNewUser] = useState([]);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/allusers?email=${user?.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setNewUser(data);
        });
    }
  }, [user]);

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
                  <td>
                    {user?.displayName ? user?.displayName : newUser.name}
                  </td>
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
          <MyProfileModal newUser={newUser} setNewUser={setNewUser} />
        </div>
      ))}
    </div>
  );
};

export default Myprofile;
