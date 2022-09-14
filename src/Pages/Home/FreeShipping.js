import {
  faArrowRightArrowLeft,
  faBoxArchive,
  faBusinessTime,
  faCartFlatbedSuitcase,
  faCircleRadiation,
  faCreditCard,
  faHeadset,
  faShippingFast,
  faStar,
  faTentArrowTurnLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FreeShipping = () => {
  return (
    <div className="px-12 mt-10">
      <div className="flex justify-center border p-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex sm:border-0 md:border-0 lg:border-r-2">
            <p className="  text-4xl">
              {" "}
              <FontAwesomeIcon
                style={{ color: "#F88148" }}
                icon={faBusinessTime}
              />
            </p>
            <div className="text-left px-4">
              <h3 className=" font-bold uppercase">Free Shipping</h3>
              <p>For orders from $50</p>
            </div>
          </div>
          <div className="flex sm:border-0 md:border-0 lg:border-r-2">
            <p className="  text-4xl">
              {" "}
              <FontAwesomeIcon
                style={{ color: "#F88148" }}
                icon={faArrowRightArrowLeft}
              />
            </p>
            <div className="text-left px-4">
              <h3 className=" font-bold uppercase">7 DAYS EASY RETURN</h3>
              <p>immediately exchange</p>
            </div>
          </div>
          <div className="flex  sm:border-0 md:border-0 lg:border-r-2">
            <p className="  text-4xl">
              {" "}
              <FontAwesomeIcon style={{ color: "#F88148" }} icon={faHeadset} />
            </p>
            <div className="text-left px-4">
              <h3 className=" font-bold uppercase">Call us anytime</h3>
              <p>Call us anytime</p>
            </div>
          </div>
          <div className="flex ">
            <p className="  text-4xl">
              {" "}
              <FontAwesomeIcon
                style={{ color: "#F88148" }}
                icon={faCreditCard}
              />
            </p>
            <div className="text-left px-4">
              <h3 className=" font-bold uppercase">100% Safety</h3>
              <p>Only secure payments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeShipping;
