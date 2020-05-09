import React from 'react'
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {

    let transformIngredients = Object.keys(props.ingredient)
    .map( igKey => {
        return [...Array(props.ingredient[igKey])].map(( _ , i ) => 
            <BurgerIngredient  key={igKey + i} type={igKey}/>
    )}).reduce((arr,el) => {
        return arr.concat(el);
    },[]);
    console.log(transformIngredients.length);
    if(transformIngredients.length === 0)
    {
        transformIngredients = <p>Please enter ingredients</p>;
    }

    return (
    <div class={classes.Burger}>
        <BurgerIngredient type='bread-top' />
        {transformIngredients}
        <BurgerIngredient type='bread-bottom' />
    </div>
    );
};

export default burger;