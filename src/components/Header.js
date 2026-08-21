import React from "react";

const Header = (props) => {
  return (
    <div className="jumbotron">
      <h1 className="display-1">
        <i className="material-icons brand-icon">fastfood</i>Food Recipe
      </h1>
      <div className="input-group w-50 mx-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Search Your Recipe...."
          value={props.search}
          onChange={props.on}
        />
        <div className="input-group-append">
          <button className="btn btn-dark" onClick={props.onSearchClick}>
            {" "}
            Search Recipess{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
