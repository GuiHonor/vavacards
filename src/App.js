import { useState } from "react";
import Banner from "./components/banner";
import Form from "./components/form"
import Crew from "./components/crew";
import Card from "./components/card";

function App() {

  const times = [
    {
      nome: ''
    },
    {
      nome: 'Duelista',
      primarycolor: '#f54f32',
      secondcolor: '#f96d4a'
    },
    {
      nome: 'Controlador',
      primarycolor: '#6b2f69',
      secondcolor: '#8b4d89'
    },
    {
      nome: 'Sentinela',
      primarycolor: '#90a9fc',
      secondcolor: '#5cceee'
    },
    {
      nome: 'Iniciador',
      primarycolor: '#78be66',
      secondcolor: '#9edf8a'
    }
    
  ]

  const timesNameList = times.map(item => item.nome);
  
  const [colabs, setColabs] = useState ([]);

  const newColab = (colab) => {
    
    setColabs ([...colabs, colab]);
    
    
  }
  
  
 
  return (
    <div className= "App">

      <Banner/>
      
      <Form times = {timesNameList} colabAccounted = {newColab} />
      
     
      {times.map(item => 
      <Crew 
        key = {item.nome} 
        nome = {item.nome} 
        backgroundColorCard = {item.primarycolor} 
        backgroundColor = {item.secondcolor}
        colabs = {colabs.filter(colab => colab.group === item.nome)}
      
      />)}

      
      
      
      
    </div>
    
  );
}

export default App;
