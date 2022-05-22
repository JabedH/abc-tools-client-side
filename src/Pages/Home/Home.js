import React from "react";
import BusinessSummary from "./BusinessSummary";
import Carousel from "./Carousel";
import Reviews from "./Reviews";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Tools />
      <BusinessSummary />
      <Reviews />
    </div>
  );
};

export default Home;
