import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DrinkCategory = ({ drinkCategory }) => {
  const { strCategory } = drinkCategory;

  return (
    <div className="card bg-primary text-primary-content w-96">
      <div className="card-body">
        <h2 className="card-title">{strCategory}</h2>
        <Link to={strCategory}>
          <button className="btn hover:bg-indigo-500">Show All</button>
        </Link>
      </div>
    </div>
  );
};

DrinkCategory.propTypes = {
  drinkCategory: PropTypes.object.isRequired,
};
export default DrinkCategory;
