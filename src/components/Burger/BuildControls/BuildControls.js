import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label:'Salad', type:'salad'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'},
    {label:'Bacon', type:'bacon'} 
] 

const buildControls = (props) => (
    
    <div className={classes.BuildControls}>
        <p>{props.price.toFixed(2)}</p>
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label} 
            label={ctrl.label} 
            added={() => props.ingredientAdded(ctrl.type)
            }
            remove={() => props.ingredientRemove(ctrl.type) }/>
        ))}

        <button
         disabled={!props.purchaseable}
         onClick={props.ordered}
        >Order Now</button>
    </div>
);

export default buildControls;