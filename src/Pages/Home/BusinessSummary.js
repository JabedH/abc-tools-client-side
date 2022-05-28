import React from "react";
import tools from "../../img/icon/tools.png";
import man from "../../img/icon/customer.png";
import location from "../../img/icon/location.png";
import money from "../../img/icon/money.png";
import bg1 from "../../img/ourblog/1.jpg";
import "./BusinessSummary.css";

const BusinessSummary = () => {
  return (
    <div className=" bg-yellow-500">
      <div className=" mybg">
        <div className="p-10 mybg1">
          <h1 className="text-4xl font-bold mb-5 uppercase text-white  ">
            Business People are trust us
          </h1>
          <p className="text-xl font-bold mb-5 text-white">
            TRY TO UNDERSTAND USER EXPECTATION
          </p>
          <div className="  ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center  text-xl font-bold ">
              <div className="w-50 grid justify-items-center">
                <img className="w-14" src={man} alt="" />
                <div className="text-2xl text-bold">
                  <h3>100%</h3>
                  <p>Customer Satisfaction</p>
                </div>
              </div>
              <div className="w-25 grid justify-items-center">
                <img className="w-14" src={tools} alt="" />
                <div className="text-2xl text-bold">
                  <h3>250+</h3>
                  <p>Our Tolls</p>
                </div>
              </div>
              <div className="w-50 grid justify-items-center">
                <img className="w-14" src={money} alt="" />
                <div className="text-2xl text-bold">
                  <h3>$200 M</h3>
                  <p>Amount Sold</p>
                </div>
              </div>
              <div className="w-50 grid justify-items-center">
                <img className="w-14" src={location} alt="" />
                <div className="text-2xl text-bold">
                  <h3>7</h3>
                  <p>Locations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
