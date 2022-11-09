import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import ReviewCard from "./ReviewCard";
import PlaceReview from "./PlaceReview";
import { useTitle } from "../../Hooks/UseTitle";

const SingleServiceCard = () => {
  useTitle("Reviews");
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { name, _id, image, price, deliveryCharge, ratings, description } =
    service;
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://khaiyalamu-server-by-mezan.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const serviceReview = reviews.filter((rev) => rev.serviceID === service._id);

  const handleSubmitReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;
    const username = form.username.value;
    const photoURL = form.photoURL.value;
    const useremail = form.useremail.value;
    const ratings = form.ratings.value;
    const reviewInfo = {
      review,
      username,
      photoURL,
      serviceID: _id,
      useremail,
      ratings,
    };
    fetch("https://khaiyalamu-server-by-mezan.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          toast.success("Review added successfully, Thanks for your review");
        }
        console.log(data);
      });
  };

  return (
    <div className="mb-20">
      <div className="card shadow-xl p-5">
        <figure>
          <img
            className="rounded-2xl border border-gray-500"
            src={image}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="text-5xl font-bold mb-10">{name}</h2>
          <div className="font-semibold flex">
            <span className="border-r-2 border-gray-400 pr-5">
              Price: {price} BDT
            </span>
            <span className="border-r-2 border-gray-400 px-5">
              Delivery Charge: {deliveryCharge} BDT
            </span>
            <span className="border-r-2 border-gray-400 px-5">
              Ratings: {ratings}
            </span>
          </div>
          <p>{description}</p>
        </div>
      </div>
      <div className="mt-10">
        {serviceReview.length === 0 ? (
          <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-4xl font-semibold text-center">
                No reviews on this service
              </h2>
            </div>
          </div>
        ) : (
          <>
            {serviceReview.map((review) => (
              <ReviewCard key={review._id} review={review}></ReviewCard>
            ))}
          </>
        )}
      </div>
      <div>
        <div className="card mt-10 shadow-xl">
          {user?.uid ? (
            <PlaceReview handleSubmitReview={handleSubmitReview}></PlaceReview>
          ) : (
            <div className="py-20">
              <h2 className="text-center text-4xl capitalize">
                Please Log In to Add a Review
              </h2>
              <div className="text-center">
                <Link className="btn mt-10" to="/login">
                  Log In
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleServiceCard;
