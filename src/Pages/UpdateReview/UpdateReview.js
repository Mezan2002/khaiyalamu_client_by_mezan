import React from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateReview = () => {
  const review = useLoaderData();
  const { useremail, username, _id } = review;
  console.log(review);

  const handleEditReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;
    const username = form.username.value;
    const useremail = form.useremail.value;
    const photoURL = form.photoURL.value;
    const ratings = form.ratings.value;

    const reviewInfo = {
      review,
      username,
      useremail,
      photoURL,
      ratings,
    };

    fetch(`https://khaiyalamu-server-by-mezan.vercel.app/reviews/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 1) {
          toast.success("Review Updated");
          form.reset();
        }
        console.log(data);
      });
  };

  return (
    <div>
      <h3 className="font-bold text-4xl mb-10 text-center">Update Review</h3>
      <form onSubmit={handleEditReview} className="flex flex-col">
        <textarea
          className="textarea textarea-bordered w-full h-48"
          placeholder="Write a review *"
          required
          name="review"
        ></textarea>
        <input
          type="text"
          placeholder="Your Name *"
          className="input input-bordered w-full mt-2"
          required
          defaultValue={username}
          name="username"
        />
        <input
          type="text"
          placeholder="Your Email *"
          className="input input-bordered w-full mt-2"
          required
          defaultValue={useremail}
          name="useremail"
          readOnly
        />
        <input
          type="text"
          placeholder="Your Photo URL *"
          className="input input-bordered w-full mt-2"
          required
          name="photoURL"
        />
        <input
          type="text"
          placeholder="Rate Us in 5 *"
          className="input input-bordered w-full mt-2"
          required
          name="ratings"
        />
        <input className="btn mt-10 btn-block" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UpdateReview;
