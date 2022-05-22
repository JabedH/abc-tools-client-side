import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Sheard/Navbar/Loading";

const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("toolsInfo.json")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  //   if (isLoading) {
  //     return <Loading />;
  //   }
  return (
    <div>
      {tools.map((tool) => (
        <div>
          <div class="card w-96 bg-base-100 shadow-xl">
            <figure className="p-10">
              <img src={tool.img} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title uppercase">
                {tool.name}
                {tool.ratting > 4.5 ? (
                  <div class="badge badge-secondary">NEW</div>
                ) : (
                  ""
                )}
              </h2>
              <p>{tool.info}</p>
              <p>
                Minimum Quantity:{" "}
                <span className="font-bold">{tool.min_quantity}</span>{" "}
              </p>
              <p>
                Available Quantity:{" "}
                <span className="font-bold">{tool.available_quantity}</span>{" "}
              </p>
              <div class="card-actions justify-end">
                <div class="badge badge-outline">Fashion</div>
                <div class="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tools;
