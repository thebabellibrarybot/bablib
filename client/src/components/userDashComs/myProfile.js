import axios from 'axios';
import { useEffect, useState } from 'react';
import BirdProfile from '../BirdProfile';
import { FaBars } from 'react-icons/fa';
import UserNav from './profileNav';


import ('../../styles/myprofile.css');

  
const MyProfile = () => {

    const stuff = localStorage.getItem('roles');
    const [currentUser, setCurrentUser] = useState(null);

    const [display, setDisplay] = useState(false);


    const toggleClick =()=>{
        setDisplay(curr => !curr)
    }

    useEffect(() => {
        
        const loadUser = async () => {
            if (stuff) {

                const response = await axios.get('/refresh', {
                    withCredentials: true
                });
                if (response) {
                    setCurrentUser(response);
                }
                return response;
            }
            if (!stuff) {
                setCurrentUser(null)
            }
        }
        loadUser();
    }, [stuff])
    
    if (currentUser !== null){

        return (
            <div className="myprofile">

                <div className='ability'>
                <BirdProfile ability = {currentUser.data.bird}></BirdProfile>
                </div>
                
                <UserNav visability = {display}/>

                <div onClick = {toggleClick} className = 'text'>
                    <p>{currentUser.data.username}</p>
                    <FaBars className='bars'/>
                </div>
                
            </div>
        )
    }
}
export default MyProfile;