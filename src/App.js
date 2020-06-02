import React, {useEffect, useState, Component} from 'react'
import Recipe from './recipe';

const App = () => {

  const APP_ID = "bd78a031";
  const APP_KEY = "38e334f82af3507427db26b5a4fdd81a";
  const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;


  const [recipes, setRecipes] = useState([]);

  useEffect(()=> {

    getRecipes();
  }, []);

  const getRecipes = async () => {
    const respose = await fetch(url);
    const data = await respose.json();
    
    //set recipes
    setRecipes(data.hits);

    console.log(data.hits);

    fetch(url);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input type="text" />
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