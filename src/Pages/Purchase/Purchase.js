import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const [count, setCount] = useState(0);
  const inc = () => {
    setCount(count + 1);
  };
  const dec = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };
  const { id } = useParams();
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/tools/${id}`)
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div>
      <div class="hero   text-start ">
        <div class="hero-content grid grid-cols-2">
          <div className="bg-white h-full border ">
            <img src={tools.img} class="w-full  rounded-lg p-10" alt="" />
          </div>
          <div className="">
            <h1 class="text-5xl  font-bold uppercase">{tools.name}</h1>
            {/* <div className="flex">
              <div class="rating">
                <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
                <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
                <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
                <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
                <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
              </div>
              <p>7 Reviews</p>
            </div> */}
            {/* <p class="py-6">{tools.info}</p> */}
            <div class="divider"></div>
            <div className="flex gap-3   text-slate-600  ">
              <p>
                Availability:{" "}
                {tools.available_quantity < 1 ? (
                  <span className=" text-red-500 font-bold">Stock Out</span>
                ) : (
                  <span className=" text-green-500 font-bold">In Stock</span>
                )}
              </p>
              <p>
                <span className="">Brand:</span> {tools.brand}
              </p>
              <p>Min Quantity: {tools.min_quantity}</p>
            </div>
            <h1 className="font-bold text-4xl my-5">${tools.price}.00</h1>
            <p className="font-bold text-slate-600">COLOR</p>
            <div className="flex gap-2 my-3">
              <input
                type="radio"
                name="radio-2"
                class="radio border-0  radio-primary bg-red-500"
                checked
              />
              <input
                type="radio"
                name="radio-2"
                class="radio border-0 radio-primary bg-yellow-500"
              />
              <input
                type="radio"
                name="radio-2"
                class="radio border-0  radio-primary bg-blue-500"
              />
            </div>
            <div>
              <p className="font-2xl">QUANTITY</p>
            </div>

            <div className="flex gap-5">
              <div className="flex border-2">
                <button onClick={inc} className="text-3xl pl-2">
                  +
                </button>
                <input
                  className="w-14 text-center "
                  type="text"
                  value={count}
                />
                <button onClick={dec} className="text-3xl pr-2">
                  -
                </button>
              </div>
              <button class="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
