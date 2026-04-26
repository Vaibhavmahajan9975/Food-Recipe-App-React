import React from "react";

const Recipe=(props)=> {
    const {recipe}= props;
    return(
        <div className="card-columns">
           {recipe.map(recipes=>(
                //  <div className ="col-md-3">
                    <div className="card py-2 text-center">
                        <img src={recipes.recipe.image} alt = "loading........" className="img-fluid w-50 mx-auto rounded-circle"/>
                      <div className="card-body">
                         <h5>{recipes.recipe.label}</h5>  
                      </div> 
{/*                       
                      <h3>{recipes.recipe.cautions}</h3> */}
                      
                      <ul className="list group">
                           {recipes.recipe.ingredientLines.map(incredient => (
                                  <li className ="list-group-item">{incredient}</li>
                                 
                              ))}
                      </ul>
                    </div>
                //  </div>
               ))}
        </div>
    );
        
    
        }
export default Recipe;