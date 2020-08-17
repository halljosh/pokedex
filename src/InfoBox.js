import React from 'react';

const InfoBox = (props) => {
    return (
        <div className = "info">
        	<h1> {props.name ? props.name.toUpperCase() : ''} </h1>
        	<h1> {props.height ? props.height : null} {props.height ? 'cm' : ''}</h1>
        	<h1> {props.weight ? props.weight : null} {props.weight ? 'kg' : ''}</h1>
        	<h1> {props.type1 ? props.type1.toUpperCase() : ''} {props.type2 ? props.type2.toUpperCase() : ''} </h1>
        </div>
    );

};

export default InfoBox;