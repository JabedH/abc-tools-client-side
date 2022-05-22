import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";

const ToolsInfo = ({ tool }) => {
  return (
    <div>
      <div className=" grid-cols-2 ">
        <div class="card w-96  bg-base-100 shadow-xl">
          <figure className="p-10 h-96">
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
            <p className="h-36">{tool.info}</p>
            <p>
              Minimum Quantity:{" "}
              <span className="font-bold">{tool.min_quantity}</span>{" "}
            </p>
            <p>
              Available Quantity:{" "}
              <span className="font-bold">{tool.available_quantity}</span>{" "}
            </p>
            <p>
              Price: <span className="font-bold">${tool.price}</span>{" "}
            </p>
            <div>
              <Rating
                initialRating={tool.ratting}
                emptySymbol={<FontAwesomeIcon icon={faStar} />}
                fullSymbol={
                  <FontAwesomeIcon
                    style={{ color: "goldenrod" }}
                    icon={faStar}
                  />
                }
                readonly
              ></Rating>
            </div>
            <div class="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsInfo;
