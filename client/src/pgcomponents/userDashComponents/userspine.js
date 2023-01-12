import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from 'react-router-dom';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

import '../../styles/userDash.css';

// need to add something that states what dash items are displayed dependant on user login ability

const UserSpine = () => {

    const [data, setData] = useState();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
  
    useEffect(() => {

        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get('/userspine'); 
                setData(response.data);
            } catch (err) {
                navigate('/babelusers', { state: { from: location }, replace: true });
            }
        }
        getUsers();
    }, [axiosPrivate, location, navigate])

    const handledash = (el) => {
        window.location.href = `/userspine${el}`
    }
    console.log(data, 'data from userspine')

    return (
        <div className="userspine-full">
            
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


/* <div className="profile-nav">

<BirdProfile className = 'icon' ability = {ability}></BirdProfile>
</div>

*/

// https://github.com/codedamn/full-mern-stack-video/blob/part1/client/src/pages/Dashboard.js