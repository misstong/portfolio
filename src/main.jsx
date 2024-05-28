import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import "./index.css";
import Default from "./pages/Default";
import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Default />,
    children: [
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
