import React, {useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Recipe from './components/Recipe';
import Axios from 'axios';


function App() {
  const [search, setsearch] = useState("chiken");
  const [recipe, setRecipe] = useState([]);

  const AppId ="3f0b0f24";
  const Appkey = "dc238ab05b5c748aa0b1d9e968fbd01d";
 

  useEffect(() => {
       getRecipe();
       },[]);

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
    <div> 
    <Header 
    search={search}
     on={onInputChange}
     onSearchClick={onSearchClick}/>
   <div className ="container">
     <Recipe recipe={recipe}/>
     </div>
    </div>
  );
}

export default App;
