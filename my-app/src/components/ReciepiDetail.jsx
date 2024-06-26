import React from 'react';
import { useParams } from 'react-router-dom';
import "./Recepie.css"

function ReciepiDetail({ recipes }) {
    const { id } = useParams();
    const recipe = recipes[id];
    console.log(recipe, "detailpage");


    return (
        <div className='recDetail'>
            <h1>RECEPIE DETAILS</h1>
              {recipe.img && (
                typeof recipe.img === 'object' ? (
                    <img src={URL.createObjectURL(recipe.img)} alt={recipe.title} />
                ) : (
                    <img src={recipe.img} alt={recipe.title} />
                )
            )}
            <h2>Dish Name</h2>
            <p>{recipe.title}</p>
            <h3>Dish Details</h3>
            <p>{recipe.description}</p>
            <h3>Ingredients</h3>
            <p>{recipe.ingredent}</p>
            <h3>Preparation Steps</h3>
            <p>{recipe.steps}</p>
        </div>
    );
}

export default ReciepiDetail;