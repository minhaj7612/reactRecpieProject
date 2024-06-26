import logo from './logo.svg';
import './App.css';
import {Routes,Route } from 'react-router-dom';
import Adddish from "./components/Adddish";
import RecepieList from "./components/RecepieList";
import ReciepiDetail from "./components/ReciepiDetail"
import { useState } from 'react';



function App() {
  const [recipes, setRecipes] = useState([]);

const addRecipe = (recipe) => {
  setRecipes([...recipes, recipe]);
};

  return (
    <div className="App">
       <Routes>
       <Route path="/" element={<Adddish addRecipe={addRecipe}/>}/>
        <Route path="/recepielists" element={<RecepieList recipes={recipes}/>}/>
        <Route path="/recepiedetails/:id" element={<ReciepiDetail recipes={recipes}/>}/>
       </Routes>
      </div>
  );
}

export default App;
