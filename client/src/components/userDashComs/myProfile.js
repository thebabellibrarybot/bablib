import { useEffect, useState } from 'react';
import useStateHook from '../../hooks/useUserState';
import UserNav from "../../pgcomponents/userDashComponents/userNav";

import ('../../styles/myprofile.css');

const MyProfile = (props) => {

    const data = props.props
    const [userRole, setUserRole] = useState(window.localStorage.getItem('roles'));
    const acceptedRoles = [1984, 2001]
    const { isUser } = useStateHook()

    useEffect(() => {
        const handleStorageEvent = (event) => {
            if (event.key === 'roles' && event.newValue !== userRole) {
                setUserRole(event.newValue)
            }
        };
        window.addEventListener('storage', handleStorageEvent);
        return () => {
            window.removeEventListener('storage', handleStorageEvent)
        };
    }, [userRole])


    //console.log(acceptedRoles, 'ask', isUser)
    //console.log(acceptedRoles.includes(parseInt(isUser)), 'accepted roles includes')

    if (acceptedRoles.includes(parseInt(isUser)) === true) return (
        <div className='myprofile'>
            <div>
                <h1>hello user:</h1>
                <p>{data.username}</p>
            </div>
            <UserNav props = {data.bird}></UserNav> 
        </div>
    )
}
export default MyProfile;