import SignOutButt from "../../components/userDashComs/signoutbutt"
import { Link } from "react-router-dom"
import { useState } from "react"

const UserNav = () =>{

    const [cansee, setCansee] = useState(false);

    function handleClick () {
        console.log('handleClick')
        setCansee(!cansee)
    }

    return (
        <div className="usernavbar">
            <div className="userbar">
                <p onClick={(() => handleClick())}>icon</p>
                <div className={cansee ? 'cansee' : 'invisible'}>
                    <nav>
                        <Link to = '/userspine' className="nav-link">userSpine</Link>
                        <p>userSettings</p>
                        <SignOutButt/>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default UserNav