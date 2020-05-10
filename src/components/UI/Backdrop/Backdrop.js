import React from 'react';

const backdrop = (props) => (
    props.show ? <div onClick={props.clicked}>Hide Order Summary</div> : null
);

export default backdrop;