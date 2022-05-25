import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Rating from "react-rating";
import Loading from "../../Sheard/Navbar/Loading";
import ToolsInfo from "./ToolsInfo";

const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tools", {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const newData = data.reverse();
        setTools(newData);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20">
      {tools.map((tool) => (
        <ToolsInfo key={tool._id} tool={tool} />
      ))}
    </div>
  );
};

export default Tools;
