import React from "react";

const Recipe=(props)=> {
    const {recipe}= props;
    return(
        <div class="card-columns">
           {recipe.map(recipes=>(
                //  <div class ="col-md-3">
                    <div class="card py-2 text-center">
                        <img src={recipes.recipe.image} alt = "loading" class="img-fluid w-50 mx-auto rounded-circle"/>
                      <div class="card-body">
                         <h5>{recipes.recipe.label}</h5>  
                      </div> 
                      <ul class="list group">
                           {recipes.recipe.ingredientLines.map(incredient => (
                                  <li class ="list-group-item">{incredient}</li>
                              ))}
                      </ul>
                    </div>
                //  </div>
               ))}
        </div>
    );
        
    
        }
export default Recipe;