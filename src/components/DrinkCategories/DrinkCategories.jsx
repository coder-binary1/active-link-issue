import { useLoaderData } from "react-router-dom";
import DrinkCategory from "../DrinkCategory/DrinkCategory";

const DrinkCategories = () => {
  const drinkCategories = useLoaderData();

  return (
    <div className="m-12">
      <h3 className="text-center text-2xl font-bold">Drinks By Categories</h3>
      <div className="flex gap-6 justify-center items-center flex-wrap mt-10">
        {drinkCategories.drinks.map((drinkCategory, idx) => (
          <DrinkCategory
            key={idx}
            drinkCategory={drinkCategory}
          ></DrinkCategory>
        ))}
      </div>
    </div>
  );
};

export default DrinkCategories;
