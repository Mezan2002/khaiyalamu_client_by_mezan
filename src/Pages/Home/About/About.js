import React from "react";
import AboutUsImage from "../../../assets/images/aboutUsImage.png";

const About = () => {
  return (
    <div>
      <div className="flex items-center my-32">
        <div className="w-1/2">
          <img className="w-11/12 mx-auto" src={AboutUsImage} alt="" />
        </div>
        <div className="w-1/2">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-5">
            I started my journey in 2022 in Bangladesh and Now I am trying to
            make a biggest brand by it. The time of my staring wasn't so well
            because I need to face a lot of problem on those time but
            Alhamdulillah I could overcome all of the problem and now a days
            Khaiyalamu is a big family . <br />
            We have almost 5000+ happy client who take the cloud kitchen service
            from me and now they are my regular client
          </p>
          <button className="btn mt-20">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
