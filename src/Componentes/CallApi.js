import axios from 'axios';
import { useContext } from 'react';
import { DataContext } from '../Context/DataContext';

const {jokes,setJokes}=useContext(DataContext)

function CallApi (){


    async function makeRequest() {
        const config = {
            method: 'get',
            url: "https://icanhazdadjoke.com",
            headers: { accept:"application/json"}   
        }; 

        let response = await axios(config);
        setJokes(response.data.joke);
    };

    return(
        <div>
            makeRequest()
        </div>
    )

};

export default CallApi