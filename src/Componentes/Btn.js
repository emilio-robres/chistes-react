import React, {useContext} from "react";
import Button from "react-bootstrap/Button";
import { DataContext } from "../Context/DataContext";

function Btn () {
   const {count,setCount,makeRequest}=useContext (DataContext);
    return(
        <div>
           
            <Button style={{
                margin:"150px"
            }} onClick={() =>{makeRequest(); setCount(count+1)} }variant="primary">Siguiente Chiste</Button>
        </div>
    );
}

export default Btn;