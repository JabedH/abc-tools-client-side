import React from "react";
import img1 from "../../img/ourblog/1.jpg";
import img2 from "../../img/ourblog/2.jpg";
import img3 from "../../img/ourblog/3.jpg";

const FromOurBlog = () => {
  return (
    <div className="px-12 text-left">
      <div class="flex flex-col  border-opacity-50 ">
        <p className="p-4 text-left  border justify-center  text-2xl">
          From Our Blog
        </p>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-3 my-10">
        <div class="card  bg-base-100 shadow-xl rounded-none">
          <figure>
            <img src={img1} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">CIRCULAR SAW</h2>
            <p>
              This CIRCULAR SAW is very important for our daily like. We can use
              it for our work.
            </p>
            <div class="card-actions justify-center">
              <button class="btn ">See More</button>
            </div>
          </div>
        </div>
        <div class="card  bg-base-100 shadow-xl rounded-none">
          <figure>
            <img src={img2} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Wood Cutter</h2>
            <p>
              Wood cutter is need for our daily life. We can use it any types of
              wood work
            </p>
            <div class="card-actions justify-center">
              <button class="btn ">See More</button>
            </div>
          </div>
        </div>
        <div class="card  bg-base-100 shadow-xl rounded-none">
          <figure>
            <img src={img3} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Drill</h2>
            <p>
              Drill is also very important for our daily life. we can drill wood
              , wall{" "}
            </p>
            <div class="card-actions justify-center">
              <button class="btn ">See More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromOurBlog;
