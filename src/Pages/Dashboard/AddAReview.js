import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddAReview = () => {
  const [user] = useAuthState(auth);
  const name = user.displayName;
  const img = user?.photoURL;

  const handleRatting = (event) => {
    event.preventDefault();
    const ratting = event.target.rating.value;
    const info = event.target.comment.value;
    fetch("https://secret-journey-60034.herokuapp.com/reviews", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ ratting, info, name, img }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    toast("Added review successfully");
    event.target.reset();
  };
  return (
    <div className="flex justify-center">
      <form action="" onSubmit={handleRatting}>
        <h1 className="text-center my-5 font-bold text-2xl">Add Your Review</h1>
        <div className="form-control ">
          <textarea
            name="comment"
            id=""
            rows="5"
            className="border p-3 w-96"
          ></textarea>
          <div className="flex justify-center">
            <div class="rating my-5 ">
              <input
                type="radio"
                name="rating"
                value="1"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating"
                value="2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating"
                value="3"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating"
                value="4"
                class="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating"
                value="5"
                class="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
          <button className="btn btn-primary">
            {" "}
            <input type="submit" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAReview;
