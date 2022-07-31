import "./inputbox.css";
import React from 'react';


const InputBox = (props) => {
    

    const digited = (event) => {
        props.changed(event.target.value)
        
    }
     
    return (
        <div className = "inputbox">

        <label>{props.label}</label>  

        <input 
            className = "input" 
            placeholder = {props.placeholder} 
            required = {props.required} 
            onChange = {digited}
            value = {props.value}
        /> 

        </div>
    )

}

export default InputBox;