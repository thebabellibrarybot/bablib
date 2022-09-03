import React from "react";
import { useParams } from "react-router-dom";


import { Link } from "react-router-dom";
import { FaBible } from "react-icons/fa";


const BabelDetails = () => {

    const { id } = useParams()
    
    
    

    
    

return (
    <div className="tombscreen">
        <Link to = {`/babeltombs/${id}/microfilm`}>
            <button>
                <h2><FaBible />
                    {`[ microFilmssss ]`}</h2>             
            </button>
        </Link>
        <Link to = {`/babeltombs/${id}/transcript`}>
        <button>
            <h2><FaBible />
                {`[ transScript ]`}</h2>             
        </button>
        </Link>
        <Link to = {`/babeltombs/${id}/translate`} >
        <button>
            <h2><FaBible />
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