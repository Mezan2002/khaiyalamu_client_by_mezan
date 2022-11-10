import React, { useContext, useEffect, useState } from "react";
import { useTitle } from "../../Hooks/UseTitle";
import AllServicesCard from "./AllServicesCard";

const AllServices = () => {
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://khaiyalamu-server-by-mezan.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setServices(data);
      });
  }, []);

  useTitle("Services");
  if (loading) {
    return <progress className="progress w-full"></progress>;
  }
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
