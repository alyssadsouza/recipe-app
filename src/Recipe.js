import React from "react";
import style from './recipe.module.css';

const Recipe = (props) => {
    return (
        <div className={style.recipe}>
            <h1 className={style.title}>{props.title}</h1>
            <p>Calories: {props.calories}</p>
            <img className={style.image} src={props.image}/>
            <h3>Ingredients</h3>
            <ul>
                {props.ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p>Get the recipe <a href={props.url} target="_blank">here</a>.</p>
        </div>
    );
}

export default Recipe;