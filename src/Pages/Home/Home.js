import React from "react";
import BestSeller from "./BestSeller";
import BusinessSummary from "./BusinessSummary";
import Carousel from "./Carousel";
import FreeShipping from "./FreeShipping";
import FromOurBlog from "./FromOurBlog";
import Offer from "./Offer";
import Reviews from "./Reviews";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Carousel />
      <FreeShipping />
      <Offer />
      <Tools />
      <BusinessSummary />
      <Reviews />
      <BestSeller />
      <FromOurBlog />
    </div>
  );
};

export default Home;
