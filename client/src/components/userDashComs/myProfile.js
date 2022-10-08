import axios from 'axios';
import { useEffect, useState } from 'react';

import ('../../styles/myprofile.css');

const MyProfile = () => {

    const stuff = localStorage.getItem('roles');
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        console.log('useEffect from my profile')
    })

    useEffect(() => {
        
        const loadUser = async () => {
            if (stuff) {
                console.log(stuff);
                const response = await axios.get('/refresh', {
                    withCredentials: true
                });
                console.log(response, 'response from myPROFILE', response);
                if (response) {
                    setCurrentUser(response);
                }

                return response;
            }
        }
        loadUser();
    }, [stuff])
    
    console.log(currentUser, 'current user')

    return (
        <div className="myprofile">
            <p>MYPROFILE COMP</p>
            <p>MYPROFILE COMP</p>
            <p>MYPROFILE COMP</p>
            <p>MYPROFILE COMP</p>
            <p>MYPROFILE COMP</p>
            <p>MYPROFILE COMP</p>
            <p>MYPROFILE COMP</p>
            <p>MYPROFILE COMP</p>
            <p>MYPROFILE COMP</p>
            
        </div>
    )

}
export default MyProfile;