import React from "react";
import { useLoaderData } from "react-router-dom";
import AllServicesCard from "./AllServicesCard";

const AllServices = () => {
  const services = useLoaderData();

  return (
    <div>
      <div className="text-center mt-10 mb-5">
        <h2 className="text-4xl font-bold">All Services</h2>
      </div>
      <div className="grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20">
        {services.map((service) => (
          <AllServicesCard
            key={service._id}
            service={service}
          ></AllServicesCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
