import React from "react";

const ServiceCard = ({ service }) => {
  const { name, image, price, deliveryCharge, ratings } = service;
  return (
    <div>
      <div className="card w-96 shadow-xl">
        <figure>
          <img className="w-11/12 rounded-2xl h-64" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price: BDT{price}</p>
          <p>Delivery Charge: BDT{deliveryCharge}</p>
          <p>Ratings: {ratings} </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
