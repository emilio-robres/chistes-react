import React from "react";
import "../App.css";
import Btn from "./Btn.js";
import Header from "./Header.js";


function Container (props){
    console.log(props)
    
    return (

    <div className="App-container">
        <h1>{props.apiData}</h1>
        <Header/>
        <Btn/>
    </div>
    )
};

export default Container