import React from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

const MyReviews = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold my-10">My All Reviews</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>User Info</th>
              <th>Review</th>
              <th>Ratings</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost" title="Edit Document">
                  <FaPencilAlt className="text-2xl"></FaPencilAlt>
                </button>
                <button className="btn btn-ghost" title="Delete Document">
                  <FaTrashAlt className="text-2xl"></FaTrashAlt>
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
