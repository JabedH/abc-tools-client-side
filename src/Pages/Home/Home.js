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
      <h1>this is home</h1>
      <button class="btn btn-primary">Button</button>
    </div>
  );
};

export default Home;
