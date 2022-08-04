import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 



export default class Navbar extends Component {

    render() {
        return(
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
                <li className = "nav-item">
                    <Link to="/babeltools" className="nav-link">babelTools</Link>
                </li>
                <li className = "nav-item">
                    <Link to="/about" className = "nav-link">aboutBabel</Link>
                </li>
                
            </nav>
        )
    }
};


/*
const Navbar = () => {
    return (
        <nav className = "navbar">
            <h1>The BabelLibrary</h1>
            <div className = "links">
                <a href = "/">Home</a>
                <a href = "/babelTombs">babelTombs</a>
                <a href = "/create">createBabelTombs</a>
                <a href = "/babelBlog">babelBlog</a>
                <a href = "/babelTools">babelTools</a>
                <a href = "/about">aboutBabel</a>
            </div>
        </nav>
    );
}

export default Navbar;

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

