import React, {useEffect, useState} from 'react';
import Recipe from "./Recipe";

const App = () =>{

  const APP_KEY = "b22a0a400bd421a188dc8ac84b0a7859";
  const APP_ID = "c096b01e";

  useEffect(()=>{
    getRecipes();
  },[]);

  const[recipes, setRecipes] = useState([]);

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }
  return(
    <div>
      <form className="search-form">
        <input className="search-bar" type="text"></input>
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe =>(
        <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} />
      ))}
    </div>
  );
};

export default App;