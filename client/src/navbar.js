import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
//import SmMyProfile from './pgcomponents/userDashComponents/smMyProfile';


export default class Navbar extends Component {

    render() {
        return(
            <nav className = "navbar">

                <Link className = 'link' to='/'>
                    <h1>babelLibrary</h1>
                </Link>
                
                <li className = "clicked">
                    <Link to="/" className="link">Home</Link>
                </li>
                
                <li className = "clicked">
                    <Link to="/babelTombs" className="link">babelTombs</Link>
                </li>
                
                <li className='clicked'>
                    <Link to="/babelblogls" className='link'>babelBlogls</Link>
                </li>
                
                <li className='clicked'>
                    <Link to = "/babelusers" className='link'>forUsers</Link>
                </li>
            </nav>
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

