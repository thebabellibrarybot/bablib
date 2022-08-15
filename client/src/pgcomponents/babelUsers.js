import React from 'react';
import { Link } from 'react-router-dom';
import  AboutForusers  from '../pgcomponents/aboutforusers';



const BabelUsers = () => {
   


    return (
        <div>
            <h1>
            <nav className = "subnavbar">
                <li className = "nav-item">
                    <Link to="/login/" className="nav-link">Login</Link>
                </li>
                <li className = "nav-item">
                    <Link to="/register" className="nav-link">Register</Link>
                </li>
            </nav>
            </h1>
            <>
                <AboutForusers/>
            </>
        </div>
    )

}



export default BabelUsers