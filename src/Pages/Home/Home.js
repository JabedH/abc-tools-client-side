import React from "react";
import BestSeller from "./BestSeller";
import BusinessSummary from "./BusinessSummary";
import Carousel from "./Carousel";
import FromOurBlog from "./FromOurBlog";
import Reviews from "./Reviews";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Tools />
      <BusinessSummary />
      <Reviews />
      <BestSeller />
      <FromOurBlog />
    </div>
  );
};

export default Home;
