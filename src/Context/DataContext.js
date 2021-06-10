import React,{createContext,useState} from 'react';

export const DataContext= createContext();

    const [jokes,setJokes] = useState();
    const makeRequest = ()=> makeRequest;

export const DataProvider = ({Children})=> {
    
    const [count,setCount] = useState(0);
    
   
    return(
        <DataContext.provider value={{jokes},{setJokes},count,setCount,makeRequest()}>
            { Children }
        </DataContext.provider>
    )
}