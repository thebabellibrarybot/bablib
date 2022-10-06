import BirdProfile from '../components/BirdProfile';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from 'react-router-dom';
import useAxiosPrivate from '../hooks/useAxiosPrivate';


import '../styles/userDash.css';

// need to add something that states what dash items are displayed dependant on user login ability

const UserSpine = () => {


    const ability = 'crow' // replace this with a req for user data and find user icon

    const [data, setData] = useState();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
 
    useEffect(() => {
        //let isMounted = true;
        //const controller = new AbortController();

        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get('/userspine');
                //console.log(response.data);
                //isMounted && 
                setData(response.data);
            } catch (err) {
                console.error(err);
                navigate('/babelusers', { state: { from: location }, replace: true });
            }
        }

        getUsers();
/*
        return () => {
            isMounted = false;
        }
*/
    }, [axiosPrivate, location, navigate])


    // go to screen from dash options  COPY ACTIONS THAT LEAD FROM LOGIN TO {EL} INVOKING USEAUTH
    const handledash = (el) => {
        window.location.href = `/userspine${el}`
    }



    return (
        <div className="userspine-full">
            <div className="profile-nav">

            <BirdProfile className = 'icon' ability = {ability}></BirdProfile>
            </div>
            <div className="dashboard-main">
                <h1>welcome user</h1>

                <div className="dashitem">
                    <div className="dashcontnet">
                        {data && data.map((data, i) => {
                       
                            return (
                                <div className="a-dash" key = {i}>
                                    <div className="a-cont">
                                        <p className="icon">{data.dashicon}</p>
                                        <p>{data.dashitem}</p>
                                        <Link to = {`/userspine/${data.dashlink}`}/>
                                        <div className = 'buttons' onClick = {() => handledash(data.dashlink)}>
                                            <p>click me</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}
export default UserSpine;

// https://github.com/codedamn/full-mern-stack-video/blob/part1/client/src/pages/Dashboard.js