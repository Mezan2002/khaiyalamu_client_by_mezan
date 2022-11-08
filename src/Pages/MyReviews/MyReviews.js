import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import MyReviewCardRow from "./MyReviewCardRow";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const allReviews = useLoaderData();
  const myReviews = allReviews.filter(
    (myReview) => myReview.useremail === user?.email
  );

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
            {myReviews.map((myReview) => (
              <MyReviewCardRow
                myReview={myReview}
                key={myReview._id}
              ></MyReviewCardRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
