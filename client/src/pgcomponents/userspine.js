import BirdProfile from '../components/BirdProfile';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
//import { useNavigate  } from 'react-router-dom';
import '../styles/userDash.css';



const UserSpine = () => {


    const ability = 'crow'

    const [data, setData] = useState();
    //const [user, setUser] = useState();

    //async function populateUser() {
    //    const req = await fetch('/userspine')
    //}

    useEffect (() => {
        axios.get('/userspine')
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => console.log(err))
    }, [])
    console.log(data, 'data')


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
                        {data && data.map((data) => {
                            if (data.dashability === 'all')
                            return (
                                <div className="a-dash">
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
// https://github.com/codedamn/full-mern-stack-video/blob/part1/client/src/pages/Dashboard.js



/*

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
*/
}
export default UserSpine;
