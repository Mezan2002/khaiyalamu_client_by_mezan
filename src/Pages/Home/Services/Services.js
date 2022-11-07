import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(" https://khaiyalamu-server-by-mezan.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mb-32">
      <h2 className="text-4xl font-bold text-center mb-10">Services</h2>
      <div className="flex justify-between">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="btn">Show All</button>
      </div>
    </div>
  );
};

export default Services;
