import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const AllServicesCard = ({ service }) => {
  const { image, name, description, price, deliveryCharge, ratings, _id } =
    service;
  return (
    <div>
      <div className="card w-96  shadow-xl">
        <figure>
          <PhotoProvider>
            <PhotoView src={image}>
              <img
                className="w-11/12 rounded-2xl h-64 border border-gray-500"
                src={image}
                alt="Shoes"
              />
            </PhotoView>
          </PhotoProvider>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div>
            {description?.length > 100 ? (
              <p>
                {description.slice(0, 100)}...{" "}
                <>
                  <Link className="text-blue-800" to={`/services/${_id}`}>
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

export default AllServicesCard;
