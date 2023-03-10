import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MainPage from "@/pages/Main/MainPage";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error/ErrorPage";
import CountryPage, {
  CountryPageLoader,
} from "./pages/CountryPage/CountryPage";
import baseUrl from "@/utils/data/baseUrl";
import FavoriteCountries from "./pages/favoriteCountries/FavoritesCountries";

const router = createBrowserRouter([
  {
    path: baseUrl,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: `${baseUrl}/:countryName`,
        loader: CountryPageLoader,
        element: <CountryPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: `${baseUrl}/Favorites`,
        element: <FavoriteCountries />,
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
