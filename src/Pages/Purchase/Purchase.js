import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const [count, setCount] = useState(0);
  const [tools, setTools] = useState([]);
  const newCount = parseFloat(count);
  const { name, _id, price } = tools;

  console.log(typeof newCount);
  useEffect(() => {
    fetch(`http://localhost:5000/tools/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTools(data);
        setCount(data.min_quantity);
      });
  }, []);

  const inc = () => {
    if (newCount > tools.available_quantity) {
      return;
    }
    if (newCount == tools.available_quantity) {
      return;
    }
    setCount(newCount + 1);
  };
  console.log(tools.min_quantity);
  const dec = () => {
    if (newCount < tools.min_quantity) {
      return;
    }
    if (newCount == tools.min_quantity) {
      return;
    }
    setCount(newCount - 1);
  };
  const { id } = useParams();

  const handleBooking = (event) => {
    event.preventDefault();
    const address = event.target.address.value;

    const booking = {
      bookingID: _id,
      toolName: name,
      price: price,
      quantity: newCount,
      name: user.email,
      email: user.displayName,
      address: address,
    };
    console.log(booking);
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    }).then((res) => res.json());
    toast(`Congratulation confirmed Your Order `);
  };

  return (
    <div>
      <div class="hero   text-start ">
        <div class="hero-content grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div className="bg-white h-full border ">
            <img src={tools.img} class="w-full  rounded-lg p-10" alt="" />
          </div>
          <div className="">
            <h1 class="text-3xl  font-bold uppercase">Shipping & Billing</h1>
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
            <div>
              <div>
                <div>
                  <p className="font-2xl">QUANTITY</p>
                </div>
                <div className="flex border-2 w-28">
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
              </div>
              <div>
                <p className="font-bold text-slate-600 mt-5">COLOR</p>
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
              </div>
              <h1 className="font-bold text-4xl my-5">${tools.price}.00</h1>
              <form action="" onSubmit={handleBooking}>
                <div class="form-control gap-3">
                  <label class="label">
                    <span class="label-text">Product Name</span>
                  </label>
                  <input
                    type="text"
                    class="input input-bordered"
                    value={tools.name}
                    disabled
                  />
                  <label class="label">
                    <span class="label-text">Your Name</span>
                  </label>
                  <input
                    type="text"
                    class="input input-bordered"
                    value={user.displayName}
                    disabled
                  />
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    class="input input-bordered"
                    value={user.email}
                    disabled
                  />
                  <label class="label">
                    <span class="label-text">Address</span>
                  </label>
                  <textarea
                    type="text"
                    name="address"
                    class="input input-bordered h-20"
                    placeholder="
                    Please Fill Out Your Shipping Address"
                  />
                </div>
                <input type="number" />

                {/* <input type="submit" value="Confirm Order" /> */}
                <div className="flex gap-5">
                  <button type="submit" class="btn btn-primary">
                    Confirm Order
                  </button>
                </div>
              </form>
            </div>
            <div className="flex gap-3   text-slate-600  ">
              {/* <p>
                Availability:{" "}
                {tools.available_quantity < 1 ? (
                  <span className=" text-red-500 font-bold">Stock Out</span>
                ) : (
                  <span className=" text-green-500 font-bold">In Stock</span>
                )}
              </p>
              <p>
                <span className="">Brand:</span> {tools.brand}
              </p> */}
              {/* <p>Min Quantity: {tools.min_quantity}</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
