import React from 'react';
import Aux from '../../../hbc/Aux1'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
    return (<li key={igKey}><span>{igKey}</span> {props.ingredients[igKey]}</li>)
    });

    return(
        <Aux>
          <h3> Your Order</h3>
          <p> Your burger with following ingredients</p>
          <ul>
              {ingredientSummary}
          </ul>  
          <p> Continue to checkout ?</p>
        </Aux>
    )
};

export default orderSummary;