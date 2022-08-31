import BirdProfile from "../components/BirdProfile";
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/userDash.css';
//import DashGrid from '../components/dashgrid';


const UserSpine = () => {

    const ability = 'crow'

    const [data, setData] = useState();

    useEffect (() => {
        axios.get('/userspine')
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => console.log(err))
    }, [])
    console.log(data)

    const handledash = () => {
        console.log(
            'handle dash'
        )
    }


    return (
        <div className="userspine-full">
            <div className="profile-nav">
            <BirdProfile className = 'icon' ability = {ability}></BirdProfile>
            </div>
            <div className="dashboard-main">

                <div className="dashitem">
                    <div className="dashcontnet">
                        {data && data.map((data) => {
                            return (
                                <div>
                                <p>{data.dashicon}</p>
                                <p>{data.dashlink}</p>
                                <button onClick = {handledash}>click</button>
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
