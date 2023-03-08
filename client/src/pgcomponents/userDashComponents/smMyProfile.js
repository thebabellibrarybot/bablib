//import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useStateHook from '../../hooks/useUserState';
import UserNav from "../../pgcomponents/userDashComponents/userNav";

import ('../../styles/myprofile.css');

const SmMyProfile = () => {

    const [userRole, setUserRole] = useState(window.localStorage.getItem('roles'));
    const acceptedRoles = [1984, 2001]
    const { isUser } = useStateHook()
    const navigate = useNavigate()

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

    function handleClick () {
        navigate('/userspine')
    }


    console.log(acceptedRoles, 'ask', isUser)
    console.log(acceptedRoles.includes(parseInt(isUser)), 'accepted roles includes')

    if (acceptedRoles.includes(parseInt(isUser)) === true) return (
        <div className='smmyprofile' onClick={handleClick}>
            <UserNav></UserNav> 
        </div>
    )
}
export default SmMyProfile;