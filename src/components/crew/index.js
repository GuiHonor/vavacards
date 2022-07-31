import './crew.css'
import React from 'react';
import Card from '../card';

const Crew = ({colabs, nome, backgroundColor, backgroundColorCard}) => {

    if (colabs.length > 0 ){
        debugger
    return (
        <section className = "crew" style={{ backgroundColor: backgroundColor }}>

            <h3 style={{borderColor: backgroundColorCard}}>{nome}</h3>

                 <div className='spaceCard'>
                
                    <div className='cards'>

                        {colabs.map(item => 
                        <Card 
                        key = {item.nome}
                        nome = {item.nome}
                        cargo = {item.cargo}
                        img = {item.img}
                        backgroundColorCard = {backgroundColorCard}
                        
                        />)}
                        
                    </div>
                </div> 
        </section>
    )
                        }
    
}

export default Crew;