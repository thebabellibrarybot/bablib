import { useState, useEffect, useRef } from "react";
import {  Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth'
import React from 'react';
import axios from "axios";
import useStateHook from "../hooks/useUserState";


const LOGIN_URL = '/babelauth';
 
const Login = () => {
    const { setAuth } = useAuth();
    const { isUser, setIsUser } = useStateHook()

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/userspine";

    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ email, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            
            // set localStorage to DARK_MODE so it's clear you're logged in
            /* localStorage.setItem('DARK_MODE', true)

            const foundStuff = localStorage.getItem('DARK_MODE');
            console.log('foundstuff from login local storage', foundStuff)

            if (foundStuff){
                console.log('stuff exsists and looks like this:', foundStuff);
            }
           */
            if (email === response?.data?.user){
                
                setAuth({ email, password, roles, accessToken });
                setEmail('');
                setPassword('');
                alert(`succ login for ${email}, msg from loginstuff`)
                navigate(from, { replace: true });
                window.localStorage.setItem( 'roles', roles )
                window.localStorage.setItem( 'presists', true )
                window.dispatchEvent(new Event('roles'));
                setIsUser(localStorage.getItem('roles'))
                console.log(isUser)

                }
                else {
                    alert(
                        `got: ${response?.data?.email} as user email is this correct???`
                    )
                }

        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing emailname or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (

        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">email:</label>
                <input
                    type="text"
                    id="email"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                />
                <button>Sign In</button>
            </form>
            <p>
                Need an Account?<br />
                <span className="line">
                    <Link to="/register">Sign Up</Link>
                </span>
            </p>
        </section>

    )
}

export default Login;