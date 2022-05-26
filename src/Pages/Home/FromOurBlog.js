import React from "react";
import img1 from "../../img/ourblog/1.jpg";
import img2 from "../../img/ourblog/2.jpg";
import img3 from "../../img/ourblog/3.jpg";

const FromOurBlog = () => {
  return (
    <div>
      <div class="flex flex-col w-full border-opacity-50 ">
        <p className="p-4 text-left  border justify-center  text-2xl">
          From Our Blog
        </p>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-3 my-10">
        <div class="card w-96 bg-base-100 shadow-xl rounded-none">
          <figure>
            <img src={img1} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl rounded-none">
          <figure>
            <img src={img2} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl rounded-none">
          <figure>
            <img src={img3} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromOurBlog;
