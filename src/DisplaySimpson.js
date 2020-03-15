import React from 'react';
import './DisplaySimpson.css';

const DisplaySimpson = (props) => {

    return (
        <div className="DisplaySimpson">
            <img
                src={props.image}
                alt={props.name}
            />
            <ul>
                <li><h1>{props.name}</h1></li>
                <li>{props.quote}</li>
            </ul>
        </div>
    )
}

export default DisplaySimpson;