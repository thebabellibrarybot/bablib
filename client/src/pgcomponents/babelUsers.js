import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  AboutForusers  from '../pgcomponents/aboutforusers';
import { FaCrow } from "react-icons/fa";
import Loginstuff from '../components/loginstuff';
import '../styles/usernav.css';


const BabelUsers = () => {
   
    const [login, setlogin] = useState(false);

    const handleLogin = () => {
        setlogin(current => !current)
    }
    

    return (
        <div>
            <nav className = "usernav">
                <div className='usernav-items'>
                    <div className={login ? 'user-inputs': 'invisible'}>
                        <Loginstuff></Loginstuff>
                    </div>
                    <li className = "user-item">
                        <button className="nav-link" onClick={(handleLogin)}>Login</button>
                    </li>
                    <li className = "user-item">
                        <Link to="/register" className="nav-link">Register</Link>
                    </li>
                    <div className='user-icon'>
                    <FaCrow></FaCrow>
                    </div>
                </div>
            </nav>

            <>
                <AboutForusers/>
            </>
        </div>
    )

}



export default BabelUsers;