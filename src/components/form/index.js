import "./form.css"
import React from 'react';
import InputBox from "../inputbox";
import Dropdown from "../dropdown";
import ButtonCard from "../button";
import { useState } from "react";



const Form = (props) => {
    
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [img, setImg] = useState('')
    const [group, setGroup] = useState('')



    const save = (event) => {
        event.preventDefault()
debugger
        props.colabAccounted({
            nome,
            cargo,
            img,
            group
            
        })
                
        setCargo('');
        setGroup('');
        setImg('');
        setNome('');

    }

    return (
        
        <section className = "background">
        <form onSubmit = {save} >

            <h2> Preencha os dados para criar o card do jogador.</h2>
          
            <InputBox

                required = {true} 
                label = "Nome" 
                placeholder = "Digite seu nome"
                value = {nome}
                changed = {value => setNome (value)}  

            />

            <InputBox 

                required = {true} 
                label = "Agente" 
                placeholder = "Digite o nome do seu agente"
                value = {cargo}
                changed = {value => setCargo (value)}
                
            />

            <InputBox 

                label = "Imagem" 
                placeholder = "Informe o endereço da imagem"
                value = {img}
                changed = {value => setImg (value)}
                
            />
                      
            <Dropdown
            
                required = {true} 
                label = "Classe"
                itens = {props.times}
                value = {group}
                changed = {value => setGroup (value)}
            
            />

            <ButtonCard nome = "Criar card"/>
           
     
        </form>
        </section>
        
    )
}

export default Form;


