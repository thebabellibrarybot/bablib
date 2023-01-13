import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useEffect, useState } from 'react';
import '../../styles/userProfile.css';
import { useNavigate } from 'react-router-dom';

export function LeftProf({props}) {

    const navigate = useNavigate()
    const axiosPrivate = useAxiosPrivate()
    const prop = props
    const [data, setData] = useState(null);

    useEffect(() => {

        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get(`/userspine/${prop}/optpanel`); 
                setData(response.data);
            } catch (err) {
                console.log(err, 'err from userProfile');
            }
        }
        getUsers();
    }, [axiosPrivate, prop])
    console.log(data, 'data from user ops')

    function handleops (url) {
        console.log(url, 'from handleops')
        if (url[0] === 'edit user') {
            console.log('pass')
        } 
        if (url[0] === 'add user'){
            navigate('/register')
        }
        if (url[0] === 'delet user') {
            navigate('/deletuser')
        }
        
    }
    if (!data) return (
        <p>loading</p>
    )
    return (
        <div className="userprof-left">
            <p>{prop}</p>
            <div className="options-panel">
                <div>{data.map((data) => {
                    return (
                        <p onClick={() => handleops(data)} key = {data}>{data}</p>
                    )
                })}</div>
            </div>
        </div>
    )
}
export function RightProf({props}) {

    const prop = props
    const navigate = useNavigate()
    const axiosPrivate = useAxiosPrivate()
    const [data, setData] = useState(null);

    useEffect(() => {

        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get(`/userspine/${prop}/userstats`); 
                setData(response.data);
            } catch (err) {
                console.log(err, 'err from userProfile');
            }
        }
        getUsers();
    }, [axiosPrivate, prop])
    console.log(data, 'data from user ops')


    function handleClickedStat({url}) {
        console.log(url, 'url from right panel')
        if (url === '/mymodels') {
            navigate('/userspine/mymodels')
        }
        if (url === '/mytombs') {
            navigate('/userspine/mytombs')
        }
        if (url === '/myblogs') {
            navigate('/userspine/myblogs')
        }
    }

    if (!data) return (
        <p>loading</p>
    )

    return (
        <div className="userprof-right">
            <p>{prop}'s statistics</p>
            <div className='options-panel'>
                <div>{data.map((data) => {
                    return (
                        <p onClick={() => handleClickedStat(data)} key = {data}>{data}</p>
                    )
                })}
                </div>
            </div>
        </div>
    )
}
export function MainProf() {
    const hi = 'hi from main'
    return (
        <div className="userprof-main">
            <p>{hi}</p>
        </div>
    )
}
// i should just have a component named options panel that can
// be used where the myProfile drop-down usernav is too....