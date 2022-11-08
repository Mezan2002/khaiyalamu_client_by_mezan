import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "../../assets/icons/icons8-google-48.png";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const SignUp = () => {
  const { googleLogin } = useContext(AuthContext);
  const handleSignUp = (event) => {
    event.preventDefault();
  };

  const handleGoogleLogIn = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="min-h-screen">
        <div className="border border-gray-500 w-11/12 lg:w-6/12 mx-auto rounded-xl pt-10 pb-10">
          <h2 className="text-3xl font-semibold mb-5 pb-10 text-center">
            Create New User
          </h2>
          {/* <p className="text-red-500 mb-5">{error.slice(10, 300)}</p> */}
          <form onSubmit={handleSignUp} className="w-9/12 mx-auto">
            <div className="inputGroup ">
              <input
                className="border-b-2 inputForm w-full py-2 pl-2 focus:outline-none text-xl"
                type="text"
                name="name"
                // onBlur={emailOnBlue}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="inputGroup ">
              <input
                className="border-b-2 inputForm w-full py-2 pl-2 focus:outline-none text-xl mt-10"
                type="text"
                name="photoURL"
                // onBlur={emailOnBlue}
                placeholder="Your Photo URL"
                required
              />
            </div>
            <div className="inputGroup ">
              <input
                className="border-b-2 inputForm w-full py-2 pl-2 focus:outline-none text-xl mt-10"
                type="email"
                name="email"
                // onBlur={emailOnBlue}
                placeholder="Username or Email"
                required
              />
            </div>
            <div className="inputGroup ">
              <input
                className="border-b-2 inputForm w-full py-2 pl-2 focus:outline-none text-xl mt-10"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <button className="btn btn-primary w-full mt-10 ">Sign Up</button>
            <h4 className="my-10 text-center">
              Already have an account?{" "}
              <Link to="/login" className="underline">
                Log In
              </Link>
            </h4>
            <div className="divider  mt-5">OR</div>
            <div className="mt-5">
              <div
                onClick={handleGoogleLogIn}
                className="border flex rounded-xl justify-center items-center mr-2 px-4 py-2  cursor-pointer"
              >
                <img className="w-10 mr-5" src={GoogleIcon} alt="" />
                <p className="uppercase">continue with google</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
