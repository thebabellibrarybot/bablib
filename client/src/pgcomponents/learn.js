import React from 'react';
import { Link } from 'react-router-dom'; 


const ToolsLearn = () => {
   

   

    return (
        <div>
                        <nav className = "subnavbar">
                
                <li className = "nav-item">
                    <Link to="/babeltools/forusers" className="nav-link">forusers</Link>
                </li>
                <li className = "nav-item">
                    <Link to="/babeltools/documentation" className="nav-link">documentation</Link>
                </li>
                <li className = "nav-item">
                    <Link to="/babeltools/bibliography" className="nav-link">bibliographies</Link>
                </li>
                <li className = "nav-item">
                    <Link to="/babeltools/prepfolio" className = "nav-link">prepfolio</Link>
                </li>
                
            </nav>
        <div className = 'about'>
            <h2>about</h2>
            <p>stuff</p>
        </div>
        <div className = 'team'>
            <h2>
                team
            </h2>
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
            <h2>
                bibliographies
            </h2>
            <p>
                stuff
            </p>
        </div>
        </div>
    )

}



export default ToolsLearn