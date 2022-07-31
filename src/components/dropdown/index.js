import './dropdown.css'
import React from 'react';


const Dropdown = (props) => {
   
    const digited = (event) => {
        
        props.changed(event.target.value);
    }

    return (
        

        <div className="dropdown">

            <label>{props.label}</label>

            <select 
            required = {props.required}
            value = {props.value}
            onChange = {digited}
            >

                {props.itens.map(item => <option key = {item}>{item}</option>)}

            </select>

        </div>

    )

}

export default Dropdown;