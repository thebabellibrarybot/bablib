import BasicTable from "../babelTombList";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export function LeftTombViewer({props}) {

    const prop = props
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {

        const getUsers = async () => {
            try {
                const response = await axios.get(`/userspine/${prop}/optpanel`); 
                setData(response.data);
            } catch (err) {
                console.log(err, 'err from userProfile');
            }
        }
        getUsers();
    }, [prop]);

    function handleops (url) {
        if (url[0] === 'my tombs') {
            console.log('my tombs pressed')
        };
        if (url[0] === 'public tombs'){
            navigate('/babeltombs')
        };
    };

    if (!data) return (
        <p>loading</p>
    );

    return (
        <div className="userprof-left">
            <div className='right-title'>
                <h2>userOpts</h2>
            </div>
            <div className="options-panel">
                <div>{data.map((data) => {
                    return (
                        <p onClick={() => handleops(data)} key = {data}>{data}</p>
                    )
                })}</div>
            </div>
        </div>
    )
};
export function MainTombViewer({propID}) {

    const id = propID;
    const username = id.username;
    console.log(id,'id')
    const url = '/usertombs/mytombs';
    const urlProp = `${url}/${username}`;
    const style = 'small-table';
    const prop = {
        url: urlProp,
        style: style,
        endpoint: 'usermicrofilm'
    }
    

    return (
       
        <div className="userprof-main">
            <div className='right-title'>
                <h2>{username}'s Tombs</h2>
            </div>
            <BasicTable prop = {prop}/>
        </div>
    )
};