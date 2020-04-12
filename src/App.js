import React, {useEffect, useState} from 'react';
import Recipe from "./Recipe";

const App = () =>{

  const APP_KEY = "33cda5d84cb7add2aa892b4eb6e64eae";
  const APP_ID = "75d67148";

  const[recipes, setRecipes] = useState([]);
  const[search, setSearch] = useState("");
  const[query, setQuery] = useState("chicken");

  useEffect(()=>{
    getRecipes();
  },[query]);

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/q=${query}?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }


  const handleSearch = (e) =>{
    setSearch(e.target.value);
  }

  const getQuery = (e) =>{
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return(
    <div>
      <form onSubmit={getQuery} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={handleSearch}></input>
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe =>(
        <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} />
      ))}
    </div>
  );
};

export default App;