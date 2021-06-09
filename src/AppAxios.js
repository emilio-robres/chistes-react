import React, {useContext} from"react";
import "./Styles/index.css";
import Btn from "./Componentes/Btn.js";
import Header from "./Componentes/Header.js";
import Joke from "./Componentes/Joke.js";
// import axios from "axios";
import styled from "styled-components";
import { FaRegLaugh } from "react-icons/fa";
import Prueba from "./Prueba";
import { DataProvider } from "./Context/DataContext";
import { DataContext}  from "./Context/DataContext";

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

const {count} =useContext (DataContext);

function Appaxios (){
  
         
        
     if (count === 0) 
        {       
            return( 
                <div>  
                    
                    <DataProvider>
                        <div>
                            <StyledDiv>
                                <Prueba />
                                <Btn />
                            </StyledDiv>    
                        </div>
                    </DataProvider> 
                </div>   
            )
        }
            else {
                return(
                    <DataProvider>        
                        <div>           
        
                            <header>
                                <div id="header">API tiempo </div>
                            </header>

                            <body>
                                <StyledDiv>
                                    <Prueba/>
                                    <Header/>
                                    <FaRegLaugh color="red" size="30px"/> 
                                    <Joke />
                                    <Btn />
                                </StyledDiv>
                            </body>
          
                    </div>
            </DataProvider> 
                          
           )
        }     
    
    
};
export default Appaxios;