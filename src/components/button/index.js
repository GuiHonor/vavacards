import "./button.css";
import React from 'react';


const ButtonCard = (props) => {
    return (
        <button className = "buttoncard">{props.nome}</button>
    )

    
}

export default ButtonCard;