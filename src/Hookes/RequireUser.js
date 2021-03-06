import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "../Sheard/Navbar/Loading";
import useAdmin from "./useAdmin";

const RequireUser = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  let location = useLocation();
  if (loading || adminLoading) {
    return <Loading />;
  }
  if (!user || admin) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireUser;
