import React from "react";
import toast from "react-hot-toast";
import { useTitle } from "../../Hooks/UseTitle";

const AddServices = () => {
  useTitle("Add Services");
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const imageURL = form.imageURL.value;
    const price = form.price.value;
    const deliveryCharge = form.deliveryCharge.value;
    const ratings = form.ratings.value;
    const description = form.description.value;

    const serviceInfo = {
      name: title,
      image: imageURL,
      price,
      deliveryCharge,
      ratings,
      description,
    };

    fetch("https://khaiyalamu-server-by-mezan.vercel.app/service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Service Added Successfully");
          form.reset();
        }
        console.log(data);
      });
  };
  return (
    <div>
      <div>
        <h2 className="text-center text-4xl font-bold mb-10 mt-5">
          Add a Service
        </h2>
        <form onSubmit={handleSubmit} className="">
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="Service Title *"
              className="input input-bordered"
              name="title"
              required
            />
            <input
              type="text"
              placeholder="Service Image URL *"
              className="input input-bordered"
              name="imageURL"
              required
            />
            <input
              type="text"
              placeholder="Service Price *"
              className="input input-bordered"
              name="price"
              required
            />
            <input
              type="text"
              placeholder="Service Delivery Charge *"
              className="input input-bordered"
              name="deliveryCharge"
              required
            />
            <input
              type="text"
              placeholder="Service Ratings *"
              className="input input-bordered"
              name="ratings"
              required
            />
          </div>
          <textarea
            className="textarea textarea-bordered w-full h-48 mt-2"
            placeholder="Service Description *"
            name="description"
            required
          ></textarea>
          <input
            className="btn btn-block mt-20"
            type="submit"
            value="Add Service"
          />
        </form>
      </div>
    </div>
  );
};

export default AddServices;
