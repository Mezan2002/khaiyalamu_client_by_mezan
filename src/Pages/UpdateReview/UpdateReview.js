import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const UpdateReview = ({ handleEditReview }) => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h3 className="font-bold text-lg mb-10 text-center">Update Review</h3>
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
          defaultValue={user.displayName}
          name="username"
          readOnly
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
  );
};

export default UpdateReview;
