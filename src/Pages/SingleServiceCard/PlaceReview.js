import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const PlaceReview = ({ handleSubmitReview }) => {
  const { user } = useContext(AuthContext);
  return (
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
            name="review"
          ></textarea>
          <input
            type="text"
            placeholder="Your Name *"
            className="input input-bordered w-full mt-2"
            required
            defaultValue={user.displayName}
            name="username"
          />
          <input
            type="text"
            placeholder="Your Email *"
            className="input input-bordered w-full mt-2"
            required
            defaultValue={user.email}
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
    </div>
  );
};

export default PlaceReview;
