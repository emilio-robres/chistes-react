import React, { useState,useEffect } from"react";
import './App.css';
// import Btn from "./Componentes/Btn.js";
// import Header from "./Componentes/Header.js";





function AppAsync() {
  const [jokes, setJokes] = useState();
  useEffect(() => {
    async function myrequest(){
      let response = await fetch("https://icanhazdadjoke.com",{headers:{accept:"application/json"}});
      let incomingData= await response.json();
      console.log(incomingData.Data.joke);
      
      
      setJokes(incomingData.data.joke);
    }
    myrequest();
  }, []);

  return (
    <div>
       {jokes}
     
      
    </div>
  );
};
export default AppAsync;
