import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import AddCoffee from "./page/AddCoffee";
import UpdateCoffee from "./page/UpdateCoffee";
import AllCoffee from "./page/AllCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <AllCoffee></AllCoffee>,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
      {
        path: "add-coffee",
        element: <AddCoffee />,
      },
      {
        path: "/update-coffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
