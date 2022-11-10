import React, { useEffect, useState } from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyReviewCardRow = ({
  myReview,
  handleDeleteReview,
  handleUpdateReview,
}) => {
  const { review, ratings, username, useremail, serviceID, _id } = myReview;

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
        <Link
          to={`/reviews/${_id}`}
          className="btn btn-ghost"
          title="Edit Document"
        >
          <FaPencilAlt
            onClick={() => handleUpdateReview(_id)}
            className="text-2xl"
          ></FaPencilAlt>
        </Link>
        <button
          onClick={() => handleDeleteReview(_id)}
          className="btn btn-ghost"
          title="Delete Document"
        >
          <FaTrashAlt className="text-2xl"></FaTrashAlt>
        </button>
      </th>
    </tr>
  );
};

export default MyReviewCardRow;
