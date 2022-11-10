import React from "react";

const Contact = () => {
  return (
    <div className="mb-20">
      <div>
        <h2 className="text-center text-4xl font-bold mb-10">Get In Touch</h2>
      </div>
      <div className="lg:grid lg:grid-cols-2 gap-5">
        <div>
          <img
            className="rounded-xl"
            src="https://i.ibb.co/1R5VNF3/contact-form.jpg"
            alt=""
          />
        </div>
        <div className="pl-5 mt-10">
          <h4 className="text-2xl mb-10 font-bold">Contact Me</h4>
          <form>
            <input
              className="border-b-2 inputForm w-full py-3 pl-2 focus:outline-none text-xl"
              type="email"
              name="email"
              placeholder="your name"
              required
            />
            <input
              className="mt-10 border-b-2 inputForm w-full py-3 pl-2 focus:outline-none text-xl"
              type="email"
              name="email"
              placeholder="your email"
              required
            />
            <input
              className="mt-10 border-b-2 inputForm w-full py-3 pl-2 focus:outline-none text-xl"
              type="email"
              name="email"
              placeholder="your message"
              required
            />
            <input
              type="submit"
              value="Submit"
              className="btn mt-20 btn-block"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
