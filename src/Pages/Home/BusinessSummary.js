import React from "react";
import tools from "../../img/icon/tools.png";
import man from "../../img/icon/customer.png";
import location from "../../img/icon/location.png";
import money from "../../img/icon/money.png";

const BusinessSummary = () => {
  return (
    <div className="bg-slate-400 ">
      <div className="p-10 ">
        <h1 className="text-4xl font-bold mb-5 uppercase grid grid-cols-1 text-white">
          Business People are trust us
        </h1>
        <p className="text-xl font-bold mb-5 text-white">
          TRY TO UNDERSTAND USER EXPECTATION
        </p>
        <div className="  ">
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4   text-xl font-bold ">
            <div className="w-28">
              <img src={man} alt="" />
              <h3>100%</h3>
              <p>Customer Satisfaction</p>
            </div>
            <div className="w-28">
              <img src={tools} alt="" />
              <h3>2100</h3>
              <p>Cars Sold</p>
            </div>
            <div className="w-28">
              <img src={money} alt="" />
              <h3>$950,000</h3>
              <p>Amount Sold</p>
            </div>
            <div className="w-28">
              <img src={location} alt="" />
              <h3>7</h3>
              <p>Locations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
