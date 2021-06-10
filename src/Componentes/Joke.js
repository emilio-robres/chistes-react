<<<<<<< HEAD
import React from "react";


    
=======
import React, {useContext} from "react";
   
import { DataContext } from "../Context/DataContext"; 
>>>>>>> 4c81ee402fa8c1c888f31ed171039ee7927393e5


function Joke () {
  const {jokes}=useContext(DataContext);
      
  return(
        <div>
            <p style={{color:"black", fontSize:"20px", margin :"4git sts0px" }}>{jokes}</p> 
        </div>
  );
}
export default Joke;
