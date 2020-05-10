import React from 'react';
import Aux from '../../../hbc/Aux1';
import Backdrop from '../Backdrop/Backdrop';

const model = (props) =>(
    <Aux>
        <Backdrop show ={props.show} clicked={props.modelClosed}/>
        <div style = {{display: props.show ? 'block':'none'}}>
            {props.children}
        </div>
    </Aux>
);

export default model;