import React from 'react';
import { Link } from 'react-router-dom';


const AboutForusers = () => {
   

   

    return (
        <div>
            <nav className = "subnavbar">
                <li className = "nav-item">
                    <Link to="/about/" className="nav-link">about</Link>
                </li>
                <li className = "nav-item">
                    <Link to="/about/forusers" className="nav-link">forusers</Link>
                </li>
                <li className = "nav-item">
                    <Link to="/about/history" className="nav-link">history</Link>
                </li>
                <li className = "nav-item">
                    <Link to="/about/tools" className = "nav-link">tools</Link>
                </li>
                <li className = "nav-item">
                    <Link to="/about/learn" className="nav-link">learn</Link>
                </li>
                
            </nav>
              <h1>
                hi forusers
              </h1>
        </div>
    )

}



export default AboutForusers;