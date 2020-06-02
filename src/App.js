import React, {useEffect, useState, Component} from 'react'
import Recipe from './recipe';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

  const APP_ID = "bd78a031";
  const APP_KEY = "38e334f82af3507427db26b5a4fdd81a";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(()=> {

    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const respose = await fetch(url);
    const data = await respose.json();
    
    //set recipes
    setRecipes(data.hits);    
    fetch(url);
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);    
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input type="text" value={search} onChange={updateSearch} />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {recipes.map(recipe => (
        <Recipe title = {recipe.recipe.label} image = {recipe.recipe.image} calories = {recipe.recipe.calories} />
      ) )}
    </div>
  );
}

export default App; 