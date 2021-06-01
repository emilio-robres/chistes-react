import React from "react";
import '../App.css';


function Btn (props) {
    
    
      
    return(
        <>
            <button onClick={props.makeRequest}>Siguiente chiste</button>
            
        </>
    );
}

export default Btn;