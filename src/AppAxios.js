import React, { useState,useEffect } from"react";
import "./Styles/index.css";
import Btn from "./Componentes/Btn.js";
import Header from "./Componentes/Header.js";
import Joke from "./Componentes/Joke.js";
import axios from "axios";
import styled from "styled-components";
import { FaRegLaugh } from "react-icons/fa";
import Prueba from "./Prueba";

  const StyledDiv = styled.div`
  margin:auto;
  margin-top: 90px;
  font-family:arial;
  font-size:30px;
  width:1000px;
  height:525px;
  background:#f8f8f8;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  padding:3rem;
`; 



function Appaxios (){
  const [jokes,setJokes] = useState();
const [count,setCount]= useState(0);
console.log(count);


    async function makeRequest() {
        const config = {
        method: 'get',
        url: "https://icanhazdadjoke.com",
        headers: { accept:"application/json" 
        }   
    };   
    
    let response = await axios(config)
    setJokes(response.data.joke); 
makeRequest()
}


useEffect(() => {
    
    
}, []);
  
    

 
           
            
            if (count== 0)
            
            return( <div>
                <StyledDiv>
                    <Prueba/>
                    <Btn makeRequest={makeRequest} count={count} setCount={setCount}/>
                </StyledDiv>    
                    </div>)
            else return(
        
                    <div>           
        
                            <header>
                                <div id="header">API tiempo </div>
                            </header>

                            <body>
                                <StyledDiv>
                                    <Prueba/>
                                    <Header/>
                                    <FaRegLaugh color="red" size="30px"/> 
                                    <Joke jokes={jokes}/>
                                    <Btn makeRequest={makeRequest} count={count} setCount={setCount}/>
                                </StyledDiv>
                    
            
        </body>
          
              </div>
    )
};
export default Appaxios;