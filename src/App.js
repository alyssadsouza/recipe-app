import React, {useEffect, useState} from "react";
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = '9396bd47';
  const APP_KEY = 'cad4e838208daf32a8c2f1f418462485';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <div className="welcome">
        <h1>Find a recipe!</h1>
        <p>Search using key words such as ingredients, dishes, etc.</p>
      </div>
      <form className='search-form' onSubmit={getSearch}>
        <input type="text" className="search-bar" value={search} onChange={updateSearch} name="" id="" />
        <button type="submit" className='search-btn'>Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={Math.round(recipe.recipe.calories)}
          image={recipe.recipe.image} 
          ingredients={recipe.recipe.ingredients}
          url={recipe.recipe.url}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
