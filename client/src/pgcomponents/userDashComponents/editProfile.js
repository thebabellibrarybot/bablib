import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useEffect, useState } from 'react';
import '../../styles/userProfile.css';
import { useNavigate } from 'react-router-dom';
import BirdProfile from '../../components/BirdProfile';

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

    function handleops (url) {
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
            <div className='right-title'>
                <h2>userOtionsList</h2>
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
}

export function RightProf({props}) {

    const navigate = useNavigate()
    const axiosPrivate = useAxiosPrivate()
    const prop = props
    const [data, setData] = useState(null);

    useEffect(() => {
        
        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get(`/userspine/userstats/${prop}`); 
                setData(response.data);
            } catch (err) {
                console.log(err, 'err from userProfile');
            }
        }
        getUsers();
    }, [axiosPrivate, prop])

    function handleops (url) {
        if (url[0] === 'num of myModels') {
            navigate('/userspine/myModels')
        } 
        if (url[0] === 'num of myBlogs'){
            navigate('/userspine/myblogs')
        }
        if (url[0] === 'num of myTombs') {
            navigate('/userspine/mytombs')
        }   
    }
    if (!data) return (
        <p>loading</p>
    )
    return (
        <div className="userprof-right">
            <div className='right-title'>
                <h2>userStats</h2>
            </div>
            <div className="options-panel-right">
                <div>{data.map((data) => {
                    return (
                        <p onClick={() => handleops(data)} key = {data}>{data}: 0</p>
                    )
                })}</div>
            </div>
        </div>
    )
}

export function MainProf({props, propID}) {
    const prop = props
    const id = propID
    console.log(prop, 'from main', id)
    return (
        <div className="userprof-main">
            <div className='right-title'>
                <h2>userSettings Editor</h2>
            </div>
            <div className='show-cur-user'>
                <div className='cur-username'>
                    <div className='show-cur-username'>
                        <h2>{id.username}</h2>
                        <BirdProfile ability = {id.bird}></BirdProfile>
                    </div>
                    <div className='edit-cur-username'>
                        <form>
                            
                        </form>
                    </div>
                </div>
                <p>email: {id.email}</p>
                <p>password: xxxxxxxxxxx</p>
                <p>bird: {id.bird}</p>
            </div>
        </div>
    )
}
// i should just have a component named options panel that can
// be used where the myProfile drop-down usernav is too.... 

// do i need to be drilling // filering these props or is it really functionally useful...
// lets add a myTombs or myModels before we know for sure
