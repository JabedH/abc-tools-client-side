import React from "react";

const Addaproduct = () => {
  return (
    <div className="flex justify-center">
      <div className="w-9/12">
        <form action="">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Product Name</span>
            </label>
            <input
              type="text"
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
              placeholder="Type Product Price"
              class="input input-bordered"
              required
            />
            <label class="label"></label>
            <label class="label">
              <span class="label-text">Product Description</span>
            </label>
            <textarea
              type="Number"
              placeholder="Type Product Description"
              class="input input-bordered h-20"
              required
            />
            <label class="label"></label>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addaproduct;
