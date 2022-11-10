import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(" https://khaiyalamu-server-by-mezan.vercel.app/limitedServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mb-32">
      <h2 className="text-4xl font-bold text-center mb-5">Services</h2>
      <h2 className="text-center mb-20">
        Our Service is to made a healthy and hygienic food at home and delivery
        it on time in a lowest cost
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link className="btn" to="/services">
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Services;
