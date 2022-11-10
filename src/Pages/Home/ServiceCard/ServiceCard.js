import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { name, image, price, deliveryCharge, ratings, description, _id } =
    service;
  return (
    <div>
      <div className="card lg:w-96 shadow-xl">
        <figure>
          <img
            className="lg:w-11/12 rounded-2xl lg:h-64 border border-gray-500"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div>
            {description.length > 100 ? (
              <p>
                {description.slice(0, 100)}...{" "}
                <>
                  <Link className="text-blue-800" to="">
                    see more
                  </Link>
                </>
              </p>
            ) : (
              <p>{description}</p>
            )}
          </div>
          <div className="font-semibold">
            <p>Price: {price} BDT</p>
            <p>Delivery Charge: {deliveryCharge} BDT</p>
            <p>Ratings: {ratings} </p>
          </div>
          <div className="card-actions justify-end">
            <Link className="btn btn-primary" to={`/services/${_id}`}>
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
