import React from "react";
import Carousel from "./Carousel";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Tools />
      <h1>this is home</h1>
      <button class="btn btn-primary">Button</button>
    </div>
  );
};

export default Home;
