import React, {useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Recipe from './components/Recipe';
import Axios from 'axios';
import Navbar from './components/navbar';
import About from './components/about.js';
import Info from './components/info';
import { BrowserRouter as Router,
  Switch,
  Route,}from "react-router-dom";


function App() {
  const [search, setsearch] = useState("chiken");
  const [recipe, setRecipe] = useState([]);

  const AppId ="3f0b0f24";
  const Appkey = "dc238ab05b5c748aa0b1d9e968fbd01d";
 
  useEffect(() => {
    getRecipe();
    },);


    const getRecipe = async () => {
      const res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${AppId}&app_key=${Appkey}
      `);
      setRecipe(res.data.hits);
    };
    const onSearchClick=()=>{
      getRecipe();
    }
    
  


  const onInputChange=(event)=>{
    setsearch(event.target.value);
  }
  return (
    
      <Router>
     <div>
     
     <Switch>
          <Route exact path="/about">
               <About key='a'/>
          </Route>
          <Route exact path="/info">
               <Info key='c'/>
          </Route>
        
          <Route exact path="/">
           
                <Navbar key='b'/>
    
                <Header key='c'
                      search={search}
                      on={onInputChange}
                       onSearchClick={onSearchClick}/>

                       <div className ="container" key='d'>
                 <Recipe recipe={recipe}/>
     
                       </div>
    
          </Route>
         
        </Switch>
        </div>
    </Router>
  );
}

export default App;
