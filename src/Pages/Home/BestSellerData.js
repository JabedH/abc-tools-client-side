import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";

const BestSellerData = ({ tool }) => {
  const NewPrice = parseFloat(tool.price) + 30;
  return (
    <button>
      <div className=" ">
        <div class=" bg-base-100 shadow-xl h-40">
          <div className="card card-side">
            <figure>
              <img className="w-20 p-2" src={tool.img} alt="Movie" />
            </figure>
            <div class="card-body">
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
              <h2>
                {tool.name.length > 30 ? tool.name.slice(0, 30) : tool.name}
                <span className=" text-green-500">
                  {tool.name.length > 30 ? "....." : ""}
                </span>
              </h2>
              <p className="text-green-500">
                ${tool.price} <del className="text-red-500">{NewPrice}</del>
              </p>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default BestSellerData;
