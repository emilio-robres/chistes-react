import React, { useState,useEffect } from"react";
import './App.css';
import Btn from "./Componentes/Btn.js";
import Header from "./Componentes/Header.js";
// import Container from "./Componentes/Container.js";
import Joke from "./Componentes/Joke.js";
import axios from "axios";


function Appaxios (){
  const [jokes,setJokes] = useState();

    async function makeRequest() {
        const config = {
        method: 'get',
        url: "https://icanhazdadjoke.com",
        headers: { accept:"application/json" 
        }   
    };  

    let response = await axios(config)
    setJokes(response.data.joke); 
}


useEffect(() => {
    makeRequest();
}, []);
    
    return(

        <div className="App-container">
            
            <Header/>
            <Joke jokes={jokes}/>
            <Btn makeRequest={makeRequest}/>
            
        </div>
    )
};
export default Appaxios;