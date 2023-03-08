import React from "react";
import { useParams } from "react-router-dom";


import { Link } from "react-router-dom";
import { FaBible } from "react-icons/fa";
import Navbar from "../navbar";
import useTheme from "../hooks/useTheme";


const BabelDetails = () => {

    const { id } = useParams()
    const { isDarkMode } = useTheme()

return (
    <div className={isDarkMode}>
        <Navbar/>
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
        
    </div>
    </div>
)
}

export default BabelDetails;






/*
<h2>{data && data.map((data) => (
            <p key = {data._id}>{data.access_key}</p>
        ))}h2</h2>

*/