import React, { useState } from "react";
import { toast } from "react-toastify";

const Addaproduct = () => {
  function randomRatting(min, max) {
    return Math.random() * (max - min + 1) + min;
  }
  const rndInt = randomRatting(4, 5);
  let ratting = parseInt(rndInt).toFixed(1);

  const ProductSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const brand = event.target.brand.value;
    const min_quantity = event.target.min_quantity.value;
    const quantity = event.target.quantity.value;
    const price = event.target.price.value;
    const img = event.target.image.value;
    const info = event.target.info.value;

    fetch("https://secret-journey-60034.herokuapp.com/tools", {
      method: "POST",
      body: JSON.stringify({
        name,
        brand,
        min_quantity,
        quantity,
        price,
        img,
        info,
        ratting,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Added item successfully");
        event.target.reset();
      });
  };
  return (
    <div className="flex justify-center">
      <div className="w-9/12">
        <form action="" onSubmit={ProductSubmit}>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Product Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Type Product name"
              class="input input-bordered"
              required
            />
            <label class="label"></label>
            <label class="label">
              <span class="label-text">Brand</span>
            </label>
            <input
              type="text"
              name="brand"
              placeholder="Type Product Brand"
              class="input input-bordered"
              required
            />
            <label class="label"></label>
            <label class="label">
              <span class="label-text">Min Quantity</span>
            </label>
            <input
              type="number"
              name="min_quantity"
              placeholder="Type Min Quantity"
              class="input input-bordered"
              required
            />
            <label class="label"></label>
            <label class="label">
              <span class="label-text">Available Quantity</span>
            </label>
            <input
              type="Number"
              name="quantity"
              placeholder="Type Available Quantity"
              class="input input-bordered"
              required
            />
            <label class="label"></label>
            <label class="label">
              <span class="label-text">Price</span>
            </label>
            <input
              type="Number"
              name="price"
              placeholder="Type Product Price"
              class="input input-bordered"
              required
            />
            <label class="label"></label>
            <label class="label">
              <span class="label-text">Image</span>
            </label>
            <input
              type="text"
              name="image"
              placeholder="Put Your Image link here"
              class="input input-bordered"
              required
            />
            <label class="label"></label>
            <label class="label">
              <span class="label-text">Product Description</span>
            </label>
            <textarea
              type="Number"
              name="info"
              placeholder="Type Product Description"
              class="input input-bordered h-20"
              required
            />
            <label class="label"></label>
          </div>
          <div class="form-control mt-6">
            <button type="submit" class="btn btn-primary">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addaproduct;
