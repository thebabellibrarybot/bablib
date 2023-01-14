import SignOutButt from "../../components/userDashComs/signoutbutt"
import { Link } from "react-router-dom"
import { useState } from "react"
import BirdProfile from "../../components/BirdProfile";

const UserNav = () =>{

    const [cansee, setCansee] = useState(false);

    function handleClick () {
        console.log('handleClick')
        setCansee(!cansee)
    }

    return (
        <div className="usernavbar">

            <div className={cansee ? 'nav-ls' : 'invisible'}>
                    <nav className="user-nav">
                        <Link to = '/userspine' className="user-nav-link">userSpine</Link>
                        <div className="user-nav-link"><SignOutButt/></div>
                        <Link to = '/userspine/myprofile' className="user-nav-link">userSettings</Link>
                        <p className="user-nav-link">userStats</p>
                    </nav>
            </div>

            <div  onClick={(() => handleClick())} className="nav-icon">
                <BirdProfile ability = 'crow' className = 'icon'/>
            </div>

        </div>
    )
}
export default UserNav