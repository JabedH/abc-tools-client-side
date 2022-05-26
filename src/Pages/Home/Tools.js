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
    fetch("https://secret-journey-60034.herokuapp.com/tools", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const newData = data.reverse().slice(0, 6);
        setTools(newData);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20 px-12">
      {tools.map((tool) => (
        <ToolsInfo key={tool._id} tool={tool} />
      ))}
    </div>
  );
};

export default Tools;
