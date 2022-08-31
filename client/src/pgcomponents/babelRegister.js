import {  useState } from "react";
import BirdProfile from "../components/BirdProfile";
//import axios from "axios";
import '../styles/register.css';
import { FaEarlybirds, FaKiwiBird } from 'react-icons/fa';
import { GiBirdTwitter, GiEgyptianBird, GiKiwiBird, GiNestBirds } from 'react-icons/gi';






const BabelReg = () => {

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
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                username,
                email,
                password,
                ability
            })
        })
        const data = await response.json();
        console.log(data);
    }

    return ( 
        <div>
            <div className="babelReg">
                <BirdProfile ability = {ability} className = "icon"></BirdProfile>
                <form className = 'mainform' onSubmit={(registerUser)}>
                    <input className = 'main-input' 
                    value = {username}
                    onChange={(e) => setNewUser(e)}
                    type="text" 
                    placeholder="username" />
                    <input className = 'main-input' 
                    value = {email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text" 
                    placeholder="email" />
                    <input className = 'main-input'
                    value = {password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="text"
                    placeholder="password" />
                    <input className = 'main-input'
                    value = {ability}
                    onChange={(e) => setAbility(e.target.value)}
                    type="text"
                    placeholder="ability"/>
                    <div>
                        <div className="ablities">
                        <p>set ability</p>
                            <FaEarlybirds className="i" onClick={() => setAbility('early-bird')}></FaEarlybirds>
                            <FaKiwiBird className="i" onClick = {() => setAbility('kiwi-bird')}></FaKiwiBird>
                            <GiBirdTwitter className="i" onClick = {() => setAbility('bird-twitter')}></GiBirdTwitter>
                            <GiEgyptianBird className="i" onClick = {() => setAbility('egyptian-bird')}></GiEgyptianBird>
                            <GiKiwiBird className="i" onClick = {() => setAbility('gi-bird')}></GiKiwiBird>
                            <GiNestBirds className="i" onClick = {() => setAbility('nest-bird')}></GiNestBirds>
                        </div>
                    </div>
                    <input className = "submit" type='submit' value="register user"/>
                </form>
            </div>
            
        </div>

    )
}
export default BabelReg;


// on how to use ability in app 
// https://medium.com/dailyjs/managing-user-permissions-in-your-react-app-a93a94ff9b40