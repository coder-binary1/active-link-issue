import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import DrinkCategories from "./components/DrinkCategories/DrinkCategories";
import About from "./components/About/About";
import Drinks from "./components/Drinks/Drinks";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import DrinkDetails from "./components/DrinkDetails/DrinkDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/categories",
        loader: () =>
          fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"),
        element: <DrinkCategories></DrinkCategories>,
      },
      {
        path: "/categories/:drinkName",
        loader: ({ params }) =>
          fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${params.drinkName}`
          ),
        element: <Drinks></Drinks>,
      },
      {
        path: "/categories/:drinkName/:drinkId",
        loader: ({ params }) =>
          fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.drinkId}`
          ),
        element: <DrinkDetails></DrinkDetails>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
