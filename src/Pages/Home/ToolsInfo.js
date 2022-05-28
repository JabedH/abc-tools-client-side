import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Rating from "react-rating";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hookes/useAdmin";

const ToolsInfo = ({ tool }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  const info = tool;
  const navigate = useNavigate();
  const handleOrder = (id) => {
    navigate(`/Purchase/${id}`);
  };

  return (
    <div className="text-left">
      <div className="mb-10">
        <div class="card   bg-base-100 shadow-2xl">
          <figure className="p-5 h-72">
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
            <p className="h-20">
              {tool.info.length > 100 ? tool.info.slice(0, 100) : tool.info}
              <span className=" text-green-500">
                {tool.info.length > 100 ? "....." : ""}
              </span>
            </p>
            <div className="flex">
              <p>
                Mini Quantity:{" "}
                <span className="font-bold">{tool.min_quantity}</span>{" "}
              </p>
              <p>
                Quantity:{" "}
                <span className="font-bold">{tool.available_quantity}</span>{" "}
              </p>
            </div>
            <div className="flex">
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
            </div>
            <div class="card-actions justify-center">
              {}
              <button
                onClick={() => handleOrder(tool._id)}
                className="btn  w-full"
                disabled={admin === true}
              >
                place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsInfo;
