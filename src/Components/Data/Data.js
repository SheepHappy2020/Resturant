import React, {useEffect, useState} from "react";
import axios from "axios";


const Data=()=>{
    const [data, setDate] = useState([]);
    async function fetchData(){
        const response = await axios(
            'https://stream-restaurant-menu-svc.herokuapp.com/category'
        );
        const name = await response.data;
        setDate(name);

    }
    useEffect(()=>{
        fetchData();
    }, [])

    return (
        <div>
            <code>
                {JSON.stringify(data)}
            </code>
        </div>
    )




}


export default Data;