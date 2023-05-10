import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import AddCoffee from "./page/AddCoffee";
import UpdateCoffee from "./UpdateCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "add-coffee",
        element: <AddCoffee />,
      },
      {
        path: "/update-coffee",
        element: <UpdateCoffee />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
