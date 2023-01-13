import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
//import SmMyProfile from './pgcomponents/userDashComponents/smMyProfile';


export default class Navbar extends Component {

    render() {
        return(
            <div>
            <nav className = "navbar">
                <Link to='/'>
                    <h1>babelLibrary</h1>
                </Link>
                <li className = "nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className = "nav-item">
                    <Link to="/babelTombs" className="nav-link">babelTombs</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/babelblogls" className='nav-link'>babelBlogls</Link>
                </li>
                <li>
                    <Link to = "/babelusers" className='nav-link'>forUsers</Link>
                </li>
            </nav>
            </div>
        )
    }
};


/*
TODO:

add a global context hook that will listen for an array of urls and get rid of the smMyProfile if that array is current

*/

























/* 
import React, { component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends component {
    render() {
        return (
        < nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className = "bavbar-brand">Babel Library</Link>
            <div className="collapse navebar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                    <Link to = "/" className="nav-link">Home</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to = "/babelTombs" className="nav-link">babelTombs</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to = "/babelTombs/add" className = "nav-link">AddbabelTombs</Link>
                    </li>
                </ul>
            </div>
        </nav>
        );
    };
} */

