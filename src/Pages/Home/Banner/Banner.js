import React from "react";

const Banner = () => {
  return (
    <div className="flex items-center mt-20">
      <div className="w-1/2">
        <h1 className="text-6xl font-bold">
          Eat Healthy With
          <span className="text-orange-500"> Khaiyalamu</span>
        </h1>
        <p className="text-xl my-10 capitalize">
          We serve healthy foods and Our foods is totally Home Maded and
          Hygienic. So don't waste your time order now for free home delivery
        </p>
        <button className="btn">Order Now</button>
      </div>
      <div className="w-1/2">
        <img src="https://devourin.com/cloud-kitchen/img/gif.gif" alt="" />
      </div>
    </div>
  );
};

export default Banner;
