import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/toolspg.css'
import Toolstuff from './toolstuff';
import Bibstuff from './bibstuff';
import Teamstuff from './teamstuff';
import Aboutstuff from './aboutstuff';





const BabelTools = () => {
   

   

    return (
        <div>
                <nav className = "subnavbar">
                
                <li className = "nav-item">
                    <Link to="/babeltools/forusers" className="nav-link"><p>forusers</p></Link>
                </li>
                <li className = "nav-item">
                    <Link to="/babeltools/documentation" className="nav-link"><p>documentation</p></Link>
                </li>
                <li className = "nav-item">
                    <Link to="/babeltools/bibliography" className="nav-link"><p>bibliographies</p></Link>
                </li>
                <li className = "nav-item">
                    <Link to="/babeltools/prepfolio" className = "nav-link"><p>prepfolio</p></Link>
                </li>
                
            </nav>
        <div className = 'about'>
            <Aboutstuff></Aboutstuff>
        </div>
        <div className = 'team'>
            <Teamstuff></Teamstuff>
        </div>
        <div className='tools'>
            <Toolstuff></Toolstuff>
        </div>
        <div className='bibliographies'>
            <Bibstuff></Bibstuff>
        </div>
        </div>
    )

}



export default BabelTools