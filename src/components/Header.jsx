import React from "react";

const Header = (props) => {
  return (
    <header className="jumbotron">
      <h1 className="display-1">
        <i className="material-icons brand-icon">fastfood</i>Food Recipe checking to test cicd delpoyed changes
      </h1>
      <div className="input-group w-50 mx-auto">
        <label htmlFor="recipe-search" className="sr-only">
          Search recipe
        </label>
        <input
          id="recipe-search"
          type="text"
          className="form-control"
          placeholder="Search Your Recipe...."
          value={props.search}
          onChange={props.on}
        />
        <div className="input-group-append">
          <button
            type="button"
            className="btn btn-dark"
            onClick={props.onSearchClick}
          >
            Search Recipes
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
