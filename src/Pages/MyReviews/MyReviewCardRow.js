import React, { useContext, useEffect, useState } from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const MyReviewCardRow = ({ myReview, handleDeleteReview }) => {
  const { user } = useContext(AuthContext);
  const { review, ratings, username, useremail, serviceID, _id } = myReview;
  const handleEditReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;
    const username = form.username.value;
    const useremail = form.useremail.value;
    const photoURL = form.photoURL.value;
    const ratings = form.ratings.value;

    const reviewInfo = {
      review,
      username,
      useremail,
      photoURL,
      ratings,
    };

    fetch(`http://localhost:5000/reviews/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("https://khaiyalamu-server-by-mezan.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  const myReviewedService = service.find((srv) => srv._id === serviceID);
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-20 h-20">
              <img src={myReviewedService?.image} alt="" />
            </div>
          </div>
          <div>
            <div className="font-bold">{username}</div>
            <div className="text-sm opacity-50">{useremail}</div>
          </div>
        </div>
      </td>
      <td>
        {review}
        <br />
        <span className="badge badge-ghost badge-md">
          {myReviewedService?.name}
        </span>
      </td>
      <td className="">
        <p>Ratings: {ratings}</p>
      </td>
      <th>
        <button className="" title="Edit Document">
          <label htmlFor="my-modal-6" className="btn btn-ghost">
            <FaPencilAlt className="text-2xl"></FaPencilAlt>
          </label>
        </button>
        <button
          onClick={() => handleDeleteReview(_id)}
          className="btn btn-ghost"
          title="Delete Document"
        >
          <FaTrashAlt className="text-2xl"></FaTrashAlt>
        </button>
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle w-full">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-10 text-center">
              Update Review
            </h3>
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
              <input
                className="btn mt-10 btn-block"
                type="submit"
                value="Submit"
              />
            </form>
            <div className="modal-action">
              <label htmlFor="my-modal-6" className="btn">
                Close
              </label>
            </div>
          </div>
        </div>
      </th>
    </tr>
  );
};

export default MyReviewCardRow;
