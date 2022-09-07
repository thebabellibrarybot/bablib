import { useState, useEffect, useRef } from "react";
import {  useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth'
import React from 'react';

const Loginstuff = () => {

    const userRef = useRef();

    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/userspine";


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    useEffect(() => {
        userRef.current.focus();
    }, [])
    

    async function userLogin (event) {
        event.preventDefault();

        const response = await fetch('/babelusers/login', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            withCredentials: true,
            body: JSON.stringify({

                email,
                password,
                
            })
        })
        const data = await response.json();

        if (data.user) {
            //localStorage.setItem('token', data.user)
            //localStorage.setItem('user', data.userinfo)
            const token = data.user;
            const roles = [data.userinfo.ability];
            console.log(roles)
            const user = email;
        
            setAuth({user, password, roles, token})
            setEmail('')
            setPassword('')
            alert('login succ! -from loginstuff')
            navigate(from, { replace: true })
        } else { alert('plz check ur usrNam3 n passW0rdzz dummy')}
    }

 
    return (
        <form onSubmit={(userLogin)}>

            <input className = 'main-input' 
                value = {email}
                ref = {userRef}
                onChange={(e) => setEmail(e.target.value)}
                type="text" 
                autoComplete="off"
                placeholder="email"

                required />
            <input className = 'main-input'
                value = {password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                autoComplete="off"
                placeholder="password"

                required />

            <input 
            className = "submit"
            type='submit'
            value="login user"/>

        </form>
    )
}
export default Loginstuff;
