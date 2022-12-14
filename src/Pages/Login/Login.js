import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleIcon from "../../assets/icons/icons8-google-48.png";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { useTitle } from "../../Hooks/UseTitle";

const Login = () => {
  const { googleLogin, loginWithEmailAndPassword } = useContext(AuthContext);
  useTitle("Login");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const currentUser = {
          email: user?.email,
        };
        // getting JWT token start
        fetch("https://khaiyalamu-server-by-mezan.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // set in local storage start
            localStorage.setItem("token", data.token);
            navigate(from, { replace: true });
            form.reset();
            // set in local storage end
          });
        // getting JWT token end
      })
      .catch((error) => console.error(error));
  };

  const handleGoogleLogIn = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="min-h-screen mt-8">
        <div className="border border-gray-500 w-11/12 lg:w-6/12 mx-auto rounded-xl pt-10 pb-20">
          <h2 className="text-3xl font-semibold mb-5 pb-16 text-center">
            Login
          </h2>
          {/* <p className="text-red-500 mb-5">{error.slice(10, 300)}</p> */}
          <form onSubmit={handleLogIn} className="w-9/12 mx-auto">
            <div className="inputGroup ">
              <input
                className="border-b-2 inputForm w-full py-3 pl-2 focus:outline-none text-xl"
                type="email"
                name="email"
                placeholder="Username or Email"
                required
              />
            </div>
            <div className="inputGroup ">
              <input
                className="border-b-2 inputForm w-full py-3 pl-2 focus:outline-none text-xl mt-10"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="flex justify-between  mt-10">
              <div>
                <input type="checkbox" name="" id="rememberMe" />
                <label htmlFor="rememberMe" className="ml-2">
                  Remember Me
                </label>
              </div>
              <div>
                <button className="underline">Forgot Password</button>
              </div>
            </div>
            <input
              className="btn btn-primary w-full mt-10 "
              type="submit"
              value="Log In"
            />
            <h4 className="my-10 text-center">
              Don't have an account?
              <Link to="/signUp" className="underline">
                Create a new account
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

export default Login;
