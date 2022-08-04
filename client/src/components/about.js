import React from 'react';
import { Link } from 'react-router-dom'; 


const BabelAbout = () => {
   

   

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
                    <Link to="/babeltools" className = "nav-link">tools</Link>
                </li>
                <li className = "nav-item">
                    <Link to="/about/learn" className="nav-link">learn</Link>
                </li>
                
            </nav>
        <div className = 'about'>
            <h1>about</h1>
            <p>stuff</p>
        </div>
        <div className = 'team'>
            <h1>
                team
            </h1>
            <p>stuff</p>
        </div>
        <div className='tools'>
            <h1>
                tools
            </h1>
            <p>
                stuff
            </p>
            <h2>
                ocr
            </h2>
            <p>ocr stuff</p>
            <h2>
                transcript
            </h2>
            <p>transcript stuff</p>
            <h2>
                translate
            </h2>
            <p>translate stuff</p>

        </div>
        <div className='bibliographies'>
            <h1>
                bibliographies
            </h1>
            <p>
                stuff
            </p>
        </div>
        </div>
    )

}



export default BabelAbout