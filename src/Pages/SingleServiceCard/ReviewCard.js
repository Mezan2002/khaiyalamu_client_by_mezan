import React from "react";
import { FaCalendar, FaStar } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { review: userReview, username, photoURL } = review;
  return (
    <div className="card  bg-base-100 shadow-xl mb-5">
      <div className="p-10">
        <div className="">
          <div className="flex items-center mb-5">
            <div>
              <img className="w-14 rounded-full mr-4" src={photoURL} alt="" />
            </div>
            <div className="">
              <div className="flex">
                <p>
                  by : <span className="font-bold">{username}</span>
                </p>
                <div className="flex items-center ml-2">
                  <p>
                    <FaStar className="text-yellow-400"></FaStar>
                  </p>
                  <p>
                    <FaStar className="text-yellow-400"></FaStar>
                  </p>
                  <p>
                    <FaStar className="text-yellow-400"></FaStar>
                  </p>
                  <p>
                    <FaStar className="text-yellow-400"></FaStar>
                  </p>
                  <p>
                    <FaStar className="text-yellow-400"></FaStar>
                  </p>
                </div>
              </div>
              <p className="flex items-center">
                <FaCalendar className="mr-2 text-orange-500"></FaCalendar>
                December 14, 2022 | 12.23 pm
              </p>
            </div>
          </div>
          <p className="ml-20">{userReview}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
