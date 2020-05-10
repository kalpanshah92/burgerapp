import React from 'react';
import Aux from '../../../hbc/Aux1'
import Button from '../../UI/Button/Button';

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
    <p> <strong> Total Price: {props.price}</strong></p>
          <p> Continue to checkout ?</p>
          <Button clicked={props.purchaseCancel}>Cancel</Button>
          <Button clicked={props.purchaseContinue}>Continue</Button>
        </Aux>
    )
};

export default orderSummary;