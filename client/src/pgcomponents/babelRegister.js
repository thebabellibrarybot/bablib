import {  useState } from "react";
import React from 'react';
import BirdProfile from "../components/BirdProfile";
import axios from "axios";
import { FaEarlybirds, FaKiwiBird } from 'react-icons/fa';
import { GiBirdTwitter, GiEgyptianBird, GiKiwiBird, GiNestBirds } from 'react-icons/gi';
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar";
import useTheme from "../hooks/useTheme";

const BabelReg = () => {

    const history = useNavigate();
    const { isDarkMode } = useTheme();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ability, setAbility] = useState('crow');
    //     ^^^^^^^^    ability will also display icon num so if ability === 1-6 user can do this or that 

    const setNewUser = (e) => {
        setUsername(e.target.value)
        setAbility('nest-bird')
    }

    async function registerUser () {
        const response = await axios.post('/register',
        JSON.stringify({
            username,
            email,
            password, 
            ability
        }),
        {
            headers: {'Content-Type': 'application/json'},
            withCredentials: true
        }
        );
        const data = await response.json();

        if(data.status) {
            history.push('/babelusers')
        }
    }

    return ( 
        <div className={isDarkMode}>
            <Navbar/>
            <div className="babelReg">

                <form className = 'form-reg' onSubmit={(registerUser)}>
                    <input className = 'input' 
                    value = {username}
                    onChange={(e) => setNewUser(e)}
                    type="text" 
                    placeholder="username" />

                    <input className = 'input' 
                    value = {email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text" 
                    placeholder="email" />

                    <input className = 'input'
                    value = {password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="text"
                    placeholder="password" />
                    
                    <input className = 'input'
                    value = {ability}
                    onChange={(e) => setAbility(e.target.value)}
                    type="text"
                    placeholder="ability"/>

                    <div className="ablities">
                        <p>set ability</p>
                            <FaEarlybirds className="i" onClick={() => setAbility('early-bird')}></FaEarlybirds>
                            <FaKiwiBird className="i" onClick = {() => setAbility('kiwi-bird')}></FaKiwiBird>
                            <GiBirdTwitter className="i" onClick = {() => setAbility('bird-twitter')}></GiBirdTwitter>
                            <GiEgyptianBird className="i" onClick = {() => setAbility('egyptian-bird')}></GiEgyptianBird>
                            <GiKiwiBird className="i" onClick = {() => setAbility('gi-bird')}></GiKiwiBird>
                            <GiNestBirds className="i" onClick = {() => setAbility('nest-bird')}></GiNestBirds>
                    </div>
                    <div className="user-icon">
                        <BirdProfile ability = {ability} className = "icon"></BirdProfile>
                    </div>
                    <div className="clicked">
                    <input className = "submit" type='submit' value="register newUser"/>
                    </div>
                </form>
            </div>
            
        </div>

    )
}
export default BabelReg;


// on how to use ability in app 
// https://medium.com/dailyjs/managing-user-permissions-in-your-react-app-a93a94ff9b40