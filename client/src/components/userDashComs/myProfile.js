import { /*useEffect,*/ useState } from 'react';
//import useStateHook from '../../hooks/useUserState';
import UserNav from "../../pgcomponents/userDashComponents/userNav";

const MyProfile = (props) => {

    const data = props.props
    const [userRole] = useState(window.localStorage.getItem('roles'));
    const acceptedRoles = [1984, 2001];

    


    //console.log(acceptedRoles, 'ask', isUser)
    //console.log(acceptedRoles.includes(parseInt(isUser)), 'accepted roles includes')

    if (acceptedRoles.includes(parseInt(userRole)) === true) return (
            <div className='myprofile'>
                <div className='myprof-titlecard'>
                    <h1>hello user:</h1>
                    <p>{data.username}</p>
                </div>
                <UserNav props = {data.bird}></UserNav> 
            </div>
    )
}
export default MyProfile;