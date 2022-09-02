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
    console.log(data, 'data')

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
                            if (data.dashability === 'all')
                            return (
                                <div className="a-dash">
                                    <div className="a-cont">
                                        <p className="icon">{data.dashicon}</p>
                                        <p>{data.dashitem}</p>
                                        <p className = 'buttons' onClick = {handledash}>click</p>
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
