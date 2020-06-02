import React from 'react'

const App = () => {

  const APP_ID = "bd78a031";
  const APP_KEY = "38e334f82af3507427db26b5a4fdd81a";
  const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;


  return (
    <div className="App">
      <h1>Recipe Application</h1>
    </div>
  );
}

export default App; 