import { Link, useLoaderData, useParams } from "react-router-dom";
import Drink from "../Drink/Drink";

const Drinks = () => {
  const drinks = useLoaderData();
  const category = useParams();

  return (
    <div className="m-12">
      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>{category.drinkName}</li>
        </ul>
      </div>
      <h2 className="text-center text-2xl font-bold">{category.drinkName}</h2>
      <div className="grid grid-cols-3 gap-6 container mx-auto mt-10">
        {drinks.drinks.map((drink) => (
          <Drink key={drink.idDrink} drink={drink} category={category}></Drink>
        ))}
      </div>
    </div>
  );
};

export default Drinks;
