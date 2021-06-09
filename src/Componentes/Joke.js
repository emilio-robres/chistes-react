import React, {useContext} from "react";
   
import { DataContext } from "../Context/DataContext"; 


function Joke () {
  const {jokes}=useContext(DataContext);
      
  return(
        <div>
            <p style={{color:"black", fontSize:"20px", margin :"4git sts0px" }}>{jokes}</p> 
        </div>
  );
}
export default Joke;
