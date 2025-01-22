import { Link, useLoaderData } from "react-router-dom";

const DrinkDetails = () => {
  const details = useLoaderData();
  const {
    strAlcoholic,
    strCategory,
    strDrink,
    strDrinkThumb,
    strGlass,
    strInstructions,
  } = details.drinks[0];

  return (
    <div className="container mx-auto">
      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={`/categories`}>Categories</Link>
          </li>
          <li>
            <Link to={`/categories/${strCategory}`}>{strCategory}</Link>
          </li>
          <li>{strDrink}</li>
        </ul>
      </div>
      <div className="flex justify-center bg-lime-600 rounded-xl my-12 shadow-xl">
        <figure className="w-1/3 p-10">
          <img src={strDrinkThumb} alt="Shoes" className="rounded-xl " />
        </figure>
        <div className="p-10 w-96 space-y-3">
          <h2 className="card-title">{strDrink}</h2>
          <p>
            <span className="bg-indigo-700 p-1 rounded-md mr-4">Glass: </span>
            {strGlass}
          </p>
          <p>
            <span className="bg-indigo-700 p-1 rounded-md mr-4">
              Alcoholic:{" "}
            </span>
            {strAlcoholic}
          </p>
          <p>
            <span className="bg-indigo-700 p-1 rounded-md mr-4">
              Instructions:{" "}
            </span>{" "}
            {strInstructions}
          </p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default DrinkDetails;
