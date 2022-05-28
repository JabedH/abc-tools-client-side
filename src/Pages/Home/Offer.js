import React from "react";
import img1 from "../../img/offer/1.png";
import img2 from "../../img/offer/2.png";
import img3 from "../../img/offer/3.png";

const Offer = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-12 my-10">
      <div class="card card-side  bg-bgYlow shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-3xl uppercase font-bold">
            Take offer UP TO
          </h2>
          <p className="text-8xl font-bold text-redText">40%</p>
          <div className="flex justify-center items-center">
            <p className="text-4xl font-bold text-redText">OFF</p>
            <div class="card-actions justify-end">
              <button class="btn btn-active bg-white text-black border-none hover:bg-white hover:text-black">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
        <figure>
          <img className="p-10" src={img3} alt="Movie" />
        </figure>
      </div>
      <div class="card card-side  bg-slate-100 shadow-xl  radius-none">
        <div class="card-body">
          <h2 class="card-title text-3xl uppercase font-bold">BUY 1 GET 1</h2>
          <p className="text-8xl font-bold text-redText">FREE</p>
          <div className="">
            <p className="font-bold">Expire in 1 week</p>
            <button class=" btn btn-active bg-bgYlow mt-2 text-black border-none hover:bg-white hover:text-black">
              BUY NOW
            </button>
          </div>
        </div>
        <figure>
          <img className="p-10" src={img1} alt="Movie" />
        </figure>
      </div>
    </div>
  );
};

export default Offer;
