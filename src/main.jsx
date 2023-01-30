import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MainPage from "@/pages/Main/MainPage";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error/ErrorPage";
import CountryPage from "./pages/CountryPage/CountryPage";

const router = createBrowserRouter([
  {
    path: "/rest-countries-app",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/rest-countries-app/:countryName",
        element: <CountryPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
