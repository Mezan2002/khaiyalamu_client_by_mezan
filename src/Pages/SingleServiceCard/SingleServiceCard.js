import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleServiceCard = () => {
  const service = useLoaderData();
  const { name, image, price, deliveryCharge, ratings, description } = service;
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
    </div>
  );
};

export default SingleServiceCard;
