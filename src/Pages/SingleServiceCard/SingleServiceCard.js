import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { FaCalendar, FaStar } from "react-icons/fa";

const SingleServiceCard = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { name, image, price, deliveryCharge, ratings, description } = service;

  const handleSubmitReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;
    const username = form.username.value;
    const useremail = form.useremail.value;
    const ratings = form.ratings.value;
    const reviewInfo = {
      review,
      username,
      useremail,
      ratings,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Review added successfully, Thanks for your review");
        }
        console.log(data);
      });
  };

  return (
    <div className="mb-20">
      <div className="card shadow-xl p-5">
        <figure>
          <img
            className="rounded-2xl border border-gray-500"
            src={image}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="text-5xl font-bold mb-10">{name}</h2>
          <div className="font-semibold flex">
            <span className="border-r-2 border-gray-400 pr-5">
              Price: {price} BDT
            </span>
            <span className="border-r-2 border-gray-400 px-5">
              Delivery Charge: {deliveryCharge} BDT
            </span>
            <span className="border-r-2 border-gray-400 px-5">
              Ratings: {ratings}
            </span>
          </div>
          <p>{description}</p>
        </div>
      </div>
      <div className="mt-10">
        <div className="card  bg-base-100 shadow-xl">
          <div className="p-10">
            <div className="">
              <div className="flex items-center mb-5">
                <div>
                  <img
                    className="w-14 rounded-full mr-4"
                    src={user?.photoURL}
                    alt=""
                  />
                </div>
                <div className="">
                  <div className="flex">
                    <p>
                      by :{" "}
                      <span className="font-bold">{user?.displayName}</span>
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
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                odit eaque corporis quibusdam quos illo natus excepturi omnis
                repudiandae earum! Perferendis, similique? Repellat, iusto
                ducimus doloribus velit rerum quibusdam dignissimos veritatis
                vero fuga nihil fugit recusandae voluptatem, illum alias
                inventore deserunt eligendi voluptas repellendus tempore nulla
                cumque. Recusandae, inventore excepturi totam quam
                necessitatibus deleniti maiores, eveniet dolores, quas officiis
                tenetur. Reprehenderit cupiditate natus, error quaerat
                doloremque nulla ea dolore voluptatibus. Ex adipisci ratione
                quas magni, excepturi atque aspernatur eligendi ullam doloremque
                cumque dicta cum recusandae neque maiores fugiat eius distinctio
                dolor repellat! Iusto itaque temporibus similique, voluptatem
                aliquid facere quod consectetur maiores libero voluptas quasi
                eveniet et aspernatur ad quo at odit velit natus veniam
                blanditiis laborum voluptatum qui? Sapiente delectus sint non.
                Architecto distinctio modi pariatur animi harum, dolorem
                obcaecati sed quos id ipsa magni inventore error. Consequatur
                perspiciatis culpa eligendi at eveniet, animi provident
                perferendis, libero nam numquam voluptatum id labore voluptatem
                tempore omnis magni? Quis quasi officia neque praesentium ab
                architecto perspiciatis obcaecati dolorem minima aspernatur
                ipsam provident quisquam voluptatum blanditiis voluptatem nemo
                qui ut accusantium in aliquam, nihil fugit illum? Suscipit
                dignissimos, asperiores porro inventore doloribus eveniet ut a!
                Molestiae velit exercitationem aspernatur maxime voluptatum
                unde.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="card mt-10 shadow-xl">
          {user?.uid ? (
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
              </div>
            </div>
          ) : (
            <div className="py-20">
              <h2 className="text-center text-4xl capitalize">
                Please Log In to Add a Review
              </h2>
              <div className="text-center">
                <Link className="btn mt-10" to="/login">
                  Log In
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleServiceCard;
