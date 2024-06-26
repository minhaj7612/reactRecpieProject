import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Recepie.css"

function RecepieList({recipes}) {
  return (
    <div className='recipe'>
    <div className='flex'>

    </div>
     <div className='receList'>
     <div style={{marginTop:"40px"}}>
     <Link className='link2' to="/">Add Another Dish On List</Link>
     </div> 
     <div className='bx'>
       {recipes.map((recipe, index) => (
         <div className='receList_cont' key={index}>
           <Link className='lnk' to={`/recepiedetails/${index}`}>
           <div className='recipe_img'>
             {recipe.img && (
                typeof recipe.img === 'object' ? (
                  <img src={URL.createObjectURL(recipe.img)} alt={recipe.title} />
                ) : (
                  <img src={recipe.img} alt={recipe.title} />
                )
              )}
              </div>
              </Link>
                <h2>{recipe.title}</h2>
                <p>{recipe.description}</p>
             {/* {recipe.img &&(
             <img src={URL.createObjectURL(recipe.img)} alt={recipe.title} />)} */}
         
         </div>
       ))}
       </div>
     </div>
   </div>
  )
}

export default RecepieList