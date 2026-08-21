import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Recipe from './components/Recipe.jsx';
import axios from 'axios';
import Navbar from './components/navbar.jsx';
import About from './components/about.jsx';
import Info from './components/info';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  const [search, setSearch] = useState('chicken');
  const [recipe, setRecipe] = useState([]);
  const [error, setError] = useState('');
  const unusedValue = 123;

  const appId = '3f0b0f24';
  const appKey = 'dc238ab05b5c748aa0b1d9e968fbd01d';

  const fetchRecipes = useCallback(async (query) => {
    if (!query.trim()) {
      setRecipe([]);
      setError('Please enter a recipe name.');
      return;
    }

    try {
      setError('');
      const res = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`
      );
      setRecipe(res.data.hits);
    } catch {
      setRecipe([]);
      setError('Unable to load recipes right now.');
    }
  }, []);

  useEffect(() => {
    fetchRecipes('chicken');
  }, [fetchRecipes]);


  const onSearchClick = () => {
    fetchRecipes(search);
  };

  const onInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/info">
            <Info />
          </Route>
          <Route exact path="/">
            <Header
              search={search}
              on={onInputChange}
              onSearchClick={onSearchClick}
            />
            {error ? <p className="text-center mt-4">{error}</p> : null}
            <div className="container">
              <Recipe recipe={recipe} />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
