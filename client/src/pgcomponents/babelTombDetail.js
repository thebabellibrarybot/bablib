import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {  useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const BabelDetails = () => {

    const { id } = useParams()
    
    const [data, setData] = useState();
    
    useEffect (() => {
        axios.get(`/babeltombs/${id}`)
    .then((res) => {
        
        setData(res.data, 'res.data');
        console.log(res.data, 'res data')

    })
    .catch((err) => console.log(err))
    }, [id])

    console.log(data)
    
    

return (
    <div className="tombscreen">
        <Link to = {`/babeltombs/${id}/microfilm`}>
            <button>
                <h2>
                    {`[ microFilmssss ]`}</h2>             
            </button>
        </Link>
        <Link to = {`/babeltombs/${id}/transcript`}>
        <button>
            <h2>
                {`[ transScript ]`}</h2>             
        </button>
        </Link>
        <Link to = {`/babeltombs/${id}/translate`} >
        <button>
            <h2>
                {`[ transLate ]`}</h2>             
        </button>
        </Link>




        
    </div>
)
}

export default BabelDetails;






/*
<h2>{data && data.map((data) => (
            <p key = {data._id}>{data.access_key}</p>
        ))}h2</h2>

*/