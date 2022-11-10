import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center mt-44">
      <div className="lg:w-1/2">
        <h1 className="lg:text-6xl font-bold text-center lg:text-left">
          Eat Healthy With
          <span className="text-orange-500"> Khaiyalamu</span>
        </h1>
        <p className="my-10 capitalize">
          We serve healthy foods and Our foods is totally Home Maded and
          Hygienic. So don't waste your time order now for free home delivery
        </p>
        <div className="text-center lg:text-left">
          <button className="btn">Order Now</button>
        </div>
      </div>
      <div className="lg:w-1/2">
        <img
          className=""
          src="https://devourin.com/cloud-kitchen/img/gif.gif"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
