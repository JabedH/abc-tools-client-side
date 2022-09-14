import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Rating from "react-rating";
import Loading from "../../Sheard/Navbar/Loading";
import ToolsInfo from "./ToolsInfo";

const Tools = () => {
  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("tools", () =>
    fetch("https://secret-journey-60034.herokuapp.com/tools", {
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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20 px-12">
      {tools.map((tool) => (
        <ToolsInfo key={tool._id} tool={tool} />
      ))}
    </div>
  );
};

export default Tools;
