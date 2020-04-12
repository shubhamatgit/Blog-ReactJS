import React from 'react';

const Recipe =({title, calories, image}) =>{
    return(
        <div>
            <h1>{title}</h1>
            <h4>Calories: {calories}</h4>
            <img src={image} alt="image"/>
        </div>
    )
}

export default Recipe;


