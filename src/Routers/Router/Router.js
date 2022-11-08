import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AllServices from "../../Pages/AllServices/AllServices";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SingleServiceCard from "../../Pages/SingleServiceCard/SingleServiceCard";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <AllServices></AllServices>,
        loader: () => {
          return fetch(
            "https://khaiyalamu-server-by-mezan.vercel.app/services"
          );
        },
      },
      {
        path: "/services/:id",
        element: <SingleServiceCard></SingleServiceCard>,
        loader: ({ params }) => {
          return fetch(
            `https://khaiyalamu-server-by-mezan.vercel.app/services/${params.id}`
          );
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default Router;
