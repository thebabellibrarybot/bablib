import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from 'react-router-dom';
import MyProfile from '../../components/userDashComs/myProfile';
import useTheme from '../../hooks/useTheme';
import Navbar from '../../navbar';
import axios from 'axios';


// need to add something that states what dash items are displayed dependant on user login ability

const UserSpine = () => {

    const [data, setData] = useState();
    const [userData, setUserData] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    const id = 'getuser';
    const { isDarkMode } = useTheme();
  

    useEffect(() => {

        const getUsers = async () => {
            try {
                const response = await axios.get(`/userspine/${id}`); 
                setUserData(response.data);
            } catch (err) {
                console.log(err, 'err from userProfile');
            }
        }
        getUsers();
    }, [id])
  
    useEffect(() => {

        const getUsers = async () => {
            try {
                const response = await axios.get('/userspine'); 
                setData(response.data);
            } catch (err) {
                navigate('/babelusers', { state: { from: location }, replace: true });
            }
        }  
        getUsers();
    }, [location, navigate])


    if (!userData) {
        return (
            <p>loading</p>
        )
    }

    return (
        <div className = { isDarkMode }>
        <div className='logged-in-nav'>
            <Navbar></Navbar>
        
        <div className="userspine-full">
            
            <div className="dashboard-main">
                <div className='userspine-header'>
                    <h1>welcome to UserSpine</h1>
                    <MyProfile props = {userData}></MyProfile>
                </div>

                <div className="dashitem">
                    <div className="dashcontnet">
                        {data && data.map((data, i) => {
                       
                            return (
                                <div className="a-dash" key = {i}>
                                    <div className="a-cont">
                                        <p className="icon">{data.dashicon}</p>
                                        <p>{data.dashitem}</p>
                                        <div className = 'buttons'>
                                            <Link to = {`/userspine${data.dashlink}`} className="link">click here</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
        </div>
        </div>
    )
}
export default UserSpine;


/* <div className="profile-nav">

<BirdProfile className = 'icon' ability = {ability}></BirdProfile>
</div>

*/

// https://github.com/codedamn/full-mern-stack-video/blob/part1/client/src/pages/Dashboard.js