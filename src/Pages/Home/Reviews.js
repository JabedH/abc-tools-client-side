import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Rating from "react-rating";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("Reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="mt-20">
      <h1 className=" font-bold text-4xl mb-10">Reviews</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 ">
        {reviews.map((review) => (
          <div class="card  bg-base-100 shadow-xl">
            <div className="object-center">
              <div class="avatar ">
                <div class="w-24   rounded-full">
                  <img src={review.img} alt="" />
                </div>
              </div>
            </div>
            <div class="card-body">
              <div className="">
                <h2 class=" text-center  font-bold text-2xl ">{review.name}</h2>
              </div>
              <p>{review.info}</p>
              <div>
                <Rating
                  initialRating={review.ratting}
                  emptySymbol={<FontAwesomeIcon icon={faStar} />}
                  fullSymbol={
                    <FontAwesomeIcon
                      style={{ color: "goldenrod" }}
                      icon={faStar}
                    />
                  }
                  readonly
                ></Rating>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
