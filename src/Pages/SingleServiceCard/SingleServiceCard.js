import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const SingleServiceCard = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { name, image, price, deliveryCharge, ratings, description } = service;

  const handleSubmitReview = (event) => {
    event.preventDefault();
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
              Ratings: {ratings}{" "}
            </span>
          </div>
          <p>{description}</p>
        </div>
      </div>
      <div>
        <div className="card mt-10 shadow-xl">
          {user?.uid ? (
            <div className="card-body">
              <h2 className="text-4xl font-bold">
                Leave a feedback about this service
              </h2>
              <div className="mt-5">
                <form onSubmit={handleSubmitReview}>
                  <textarea
                    className="textarea textarea-bordered w-full h-48"
                    placeholder="Write a review *"
                    required
                  ></textarea>
                  <input
                    type="text"
                    placeholder="Your Name *"
                    className="input input-bordered w-full mt-2"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Your Email *"
                    className="input input-bordered w-full mt-2"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Rate Us in 5 *"
                    className="input input-bordered w-full mt-2"
                    required
                  />
                  <input
                    className="btn mt-10 btn-block"
                    type="submit"
                    value="Submit"
                  />
                </form>
              </div>
            </div>
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
