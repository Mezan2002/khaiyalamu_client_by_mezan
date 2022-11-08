import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import Router from "./Routers/Router/Router";

function App() {
  return (
    <div className="App">
      <RouterProvider router={Router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
