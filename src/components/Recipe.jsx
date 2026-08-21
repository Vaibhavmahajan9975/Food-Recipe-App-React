import React from "react";

const Recipe = ({ recipe }) => {
  return (
    <div className="card-columns">
      {recipe.map((item) => (
        <div className="card py-2 text-center" key={item.recipe.uri}>
          <img
            src={item.recipe.image}
            alt={item.recipe.label}
            className="img-fluid w-50 mx-auto rounded-circle"
          />
          <div className="card-body">
            <h5>{item.recipe.label}</h5>
          </div>
          <ul className="list-group">
            {item.recipe.ingredientLines.map((ingredient) => (
              <li className="list-group-item" key={`${item.recipe.uri}-${ingredient}`}>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Recipe;
