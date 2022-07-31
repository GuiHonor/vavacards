import './card.css'

const Card = ({nome, cargo, img, backgroundColorCard}) => {
    
    return (

        <div className="container" >
            <div className='imgBackground' style={{backgroundColor: backgroundColorCard}}>
                
                <img src= {img}></img>
               </div>
               
                <div className='text'>
                    <h1>{nome}</h1>
                    <h2>{cargo}</h2>
                </div>
            
            
        </div>
    )
}

export default Card;