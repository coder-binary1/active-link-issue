import PropTypes from "prop-types";
import { Link, Outlet } from "react-router-dom";

const Drink = ({ drink, category }) => {
  const { idDrink, strDrink, strDrinkThumb } = drink;

  return (
    <div className="text-center">
      <div className="card bg-blue-100 w-96 shadow-xl">
        <figure>
          <img src={strDrinkThumb} alt={strDrink} />
        </figure>
        <div className="card-body">
          <div className="text-lime-950 flex justify-between items-center">
            <h2 className="text-lg font-semibold">{strDrink}</h2>
            <p className=" flex-grow-0 bg-indigo-600 text-white text-sm p-1 rounded-md">
              $ {idDrink}
            </p>
          </div>
          <Link to={`/categories/${category.drinkName}/${idDrink}`}>
            <button className="btn bg-lime-900 border-none text-white">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Drink.propTypes = {
  drink: PropTypes.object.isRequired,
  category: PropTypes.object.isRequired,
};
export default Drink;
