import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import axios from 'axios';
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

//    const prop = props
    const id = propID
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ability, setAbility] = useState(id.bird);
    const [theme, setTheme] = useState('userlight');

    async function editUserSettings () {

        // save data in localstorage for theme global hook
        // change settings in backend so reload shows updated status
        // have an err catch that will show is user is no longer available

        const response = await axios.post('/register/edit',
        JSON.stringify({
            username,
            email,
            password, 
            ability,
            theme
        }),
        {
            headers: {'Content-Type': 'application/json'},
            withCredentials: true
        }
        );
        const newdata = await response.json();

        if(newdata.status) {
            navigate.push('/userspine/myprofile')
        }
    }

    return (
        <div className="userprof-main">
            <div className='right-title'>
                <h2>userSettings Editor</h2>
            </div>
            <form className='show-cur-user' onSubmit={(editUserSettings)}>
                <div className='cur-username'>
                    <div className='show-cur-username'>
                        <h2>{id.username}</h2>
                        <BirdProfile ability = {id.bird}></BirdProfile>
                    </div>
                    <div className='edit-cur-username'>
                        <input className='edit-cur-username' value = {username} onChange = {(e) => setUsername(e.target.value)} type="text" placeholder="change username">
                        </input>
                    </div>
                </div>
                <div className='cur-username'>
                    <div className='show-cur-username'>
                        <p>current email: {id.email}</p>
                    </div>
                    <div className='edit-cur-username'>
                        <input className='edit-cur-username' value = {email} onChange = {(e) => setEmail(e.target.value)} type="text" placeholder="change email">
                        </input>
                    </div>
                </div>

                <div className='cur-username'>
                    <div className='show-cur-username'>
                        <p>current password: XXX</p>
                    </div>
                    <div className='edit-cur-username'>
                        <input className='edit-cur-username' value = {password} onChange = {(e) => setPassword(e.target.value)} type="text" placeholder="change password">
                        </input>
                    </div>
                </div>

                <div className='cur-username'>
                    <div className='show-cur-username'>
                        <p> current bird: {id.bird}</p>
                    </div>
                    <div className='edit-cur-username'>
                        <select value = {ability} onChange = {(e) => setAbility(e.target.value)}>
                            <option value = "crow">crow</option>
                            <option value = "early-bird">'early-bird'</option>
                            <option value = "kiwi-bird">kiwi-bird</option>
                            <option value = "bird-twitter">bird-twitter</option>
                            <option value = "egyptian-bird">egyptian-bird</option>
                            <option value = "gi-bird">gi-bird</option>
                            <option value = "nest-bird">nest-bird</option>
                        </select>
                        <BirdProfile ability = {ability}></BirdProfile>
                    </div>
                </div>

                <div className='cur-username'>
                    <div className='show-cur-username'>
                        <p>current theme: ___</p>
                    </div>
                    <div className='edit-cur-username'>
                        <div>
                            <select value = {theme} onChange = {(e) => setTheme(e.target.value)}>
                                <option value = "dark">darkmode default</option>
                                <option value = "userdark">darkmode user</option>
                                <option value = "light">lightmode consistent</option>
                                <option vlaue = "userlight">lightmode default</option>
                            </select>
                        </div>
                    </div>
                </div>

                <input className = "submit-useredits" type='submit' value="save edits"/>
            </form>
        </div>
    )
}
// i should just have a component named options panel that can
// be used where the myProfile drop-down usernav is too.... 

// do i need to be drilling // filering these props or is it really functionally useful...
// lets add a myTombs or myModels before we know for sure
