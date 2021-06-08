import React from "react";
import Button from "react-bootstrap/Button";


function Btn (props) {
   
    return(
        <div>
           
            <Button style={{
                margin:"150px"
            }} onClick={() =>{props.makeRequest; props.setCount(props.count+1);} }variant="primary">Siguiente Chiste</Button>
        </div>
    );
}

export default Btn;