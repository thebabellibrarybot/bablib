import { useState } from 'react';

const Teamstuff = () => {

    const[teamstuff, setTeamstuff] = useState(false);

    const handleteamstuff = () => {
        setTeamstuff(true)
    }
    
    return (
        <div className={teamstuff ? "teamstuff" : "invisible"}>
            <h3>team stuff</h3>
            <p>from './teamstuff.js'</p>
            <button onClick = {(handleteamstuff)}></button>
        </div>
    )
}
export default Teamstuff;
