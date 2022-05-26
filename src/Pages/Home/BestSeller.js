import React, { useEffect, useState } from "react";
import BestSellerData from "./BestSellerData";

const BestSeller = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tools", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTools(data.slice(0, 8));
      });
  }, []);
  return (
    <div className="px-12">
      <div class="flex flex-col w-full border-opacity-50 ">
        <p className="p-4 text-left  border justify-center text-2xl">
          Best Seller
        </p>
      </div>

      <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
        {tools.map((tool) => (
          <BestSellerData tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
