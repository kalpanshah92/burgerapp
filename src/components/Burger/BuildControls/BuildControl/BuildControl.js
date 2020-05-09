import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => (
    <div>
        <div className={classes.BuildControl}>
            {props.label}
            <button onClick={props.remove}>Less</button>
            <button onClick={props.added}>More</button>
        </div>
    </div>
);

export default buildControl;