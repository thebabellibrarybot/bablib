//import axios from 'axios';
import { useEffect, useState } from 'react';

import useStateHook from '../../hooks/useUserState';
import UserNav from "../../pgcomponents/userDashComponents/userNav";

import ('../../styles/myprofile.css');

const MyProfile = () => {

    const [userRole, setUserRole] = useState(window.localStorage.getItem('roles'));
    const acceptedRoles = [1984, 2001]
    const { isUser } = useStateHook()

    useEffect(() => {
        const handleStorageEvent = (event) => {
            console.log(event)
            if (event.key === 'roles' && event.newValue !== userRole) {
                setUserRole(event.newValue)
            }
        };

        window.addEventListener('storage', handleStorageEvent);
        
        return () => {
            window.removeEventListener('storage', handleStorageEvent)
        };
    

    }, [userRole])


    console.log(acceptedRoles, 'ask', isUser)
    console.log(acceptedRoles.includes(parseInt(isUser)), 'accepted roles includes')

    if (acceptedRoles.includes(parseInt(isUser)) === true) return (
        <div className='myprofile'>
            <h1>{acceptedRoles.includes(isUser) ? 'hello fiend' : 'hello user'}</h1>
            <div>
                <h1>below is:</h1>
                <p>{isUser}</p>
                
            </div>
            <UserNav></UserNav>
        </div>
    )
    /*return (
        <div className="myprofile">
            <p>MYPROFILE COMP</p>
            <p onClick={() => onclickfunc()}>{userRole}</p>
            <p>{count}</p>
            <usesignOutBut></usesignOutBut>
        </div>
        if (acceptedRoles.includes(isUser))
    )
    */

}
export default MyProfile;