import React, { useEffect, useState } from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

const MyReviewCardRow = ({ myReview }) => {
  const { photoURL, review, ratings, username, useremail, serviceID } =
    myReview;

  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  const myReviewedService = service.find((srv) => srv._id === serviceID);

  console.log(myReviewedService);

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-20 h-20">
              <img src={myReviewedService.image} alt="" />
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
        <button className="btn btn-ghost" title="Edit Document">
          <FaPencilAlt className="text-2xl"></FaPencilAlt>
        </button>
        <button className="btn btn-ghost" title="Delete Document">
          <FaTrashAlt className="text-2xl"></FaTrashAlt>
        </button>
      </th>
    </tr>
  );
};

export default MyReviewCardRow;
