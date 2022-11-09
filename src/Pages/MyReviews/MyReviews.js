import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { useTitle } from "../../Hooks/UseTitle";
import MyReviewCardRow from "./MyReviewCardRow";

const MyReviews = () => {
  useTitle("My Reviews");
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, [user?.email]);

  const handleDeleteReview = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete this review?"
    );
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            alert("Review Deleted Successfully");
            const remaining = review.filter((rev) => rev._id !== id);
            setReview(remaining);
          }
        });
    }
  };

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
            {review.map((myReview) => (
              <MyReviewCardRow
                myReview={myReview}
                key={myReview._id}
                handleDeleteReview={handleDeleteReview}
              ></MyReviewCardRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
