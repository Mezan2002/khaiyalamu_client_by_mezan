import React from "react";

const AddServices = () => {
  return (
    <div>
      <div>
        <h2 className="text-center text-4xl font-bold mb-10 mt-5">
          Add a Service
        </h2>
        <form className="">
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="Service Title *"
              className="input input-bordered"
              required
            />
            <input
              type="text"
              placeholder="Service Image URL *"
              className="input input-bordered"
              required
            />
            <input
              type="text"
              placeholder="Service Price *"
              className="input input-bordered"
              required
            />
            <input
              type="text"
              placeholder="Service Delivery Charge *"
              className="input input-bordered"
              required
            />
            <input
              type="text"
              placeholder="Service Ratings *"
              className="input input-bordered"
              required
            />
          </div>
          <textarea
            className="textarea textarea-bordered w-full h-48 mt-2"
            placeholder="Service Description *"
            required
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default AddServices;
