import React from "react";



function Btn (props) {
    
    
      
    return(
        <>
            <button style={{
                margin:"auto"
            }} onClick={props.makeRequest}>Siguiente chiste</button>
            
        </>
    );
}

export default Btn;