import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hookes/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content ">
        <label
          for="my-drawer-2"
          class="btn btn-primary drawer-button lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {!admin && (
            <>
              <li>
                <Link to="/dashboard/myorders">My Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/addareview">Add A Review</Link>
              </li>
            </>
          )}

          <li>
            <Link to="/dashboard/myprofile">My Profile</Link>
          </li>
          {admin && (
            <>
              <li>
                <Link to="/dashboard/MakeAdmin">Make Admin</Link>
              </li>
              <li>
                <Link to="/dashboard/manageallorders">Manage All Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/addaproduct">Add A Product</Link>
              </li>
              <li>
                <Link to="/dashboard/manageproducts">Manage Products</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
