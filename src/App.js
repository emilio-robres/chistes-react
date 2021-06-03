import React, { useState,useEffect } from"react";

// import Btn from "./Componentes/Btn.js";
// import Header from "./Componentes/Header.js";



function App (){
  const [jokes,setJokes] = useState();
 
  
  useEffect(()=> {
    function myrequest (){
     const response =fetch("https://icanhazdadjoke.com",{ headers:{accept:"application/json"}})
      .then(response => response.json())
      .then(response =>console.log (response.data.joke));
      setJokes(response.data.joke);
    };
    
    myrequest();
    },[]);
  
    
   return(

     <div>
        <joke jokes={jokes}/>
    </div>
  )
};
export default App;
