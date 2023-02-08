import { useState, useEffect } from 'react';
import CurUserPage from '../../pgcomponents/userDashComponents/curuserpage';
import MyProfile from './myProfile'
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useParams } from 'react-router-dom';
import { FilterLeft, FilterMain, FilterRight } from '../../pgcomponents/userDashComponents/UserFilters';
import useTheme from '../../hooks/useTheme';
import Navbar from '../../navbar';

const UserProfile = () => {

    // add axios req for user info
    const axiosPrivate = useAxiosPrivate()
    const [main, setMain] = useState('usr-head-main');
    const [left, setLeft] = useState('usr-head-left');
    const [right, setRight] = useState('usr-head-right');
    const [data, setData] = useState(null);
    const [rotatorData, setRotatorData] = useState(null);
    const {id} = useParams();
    const { isDarkMode } = useTheme();
    console.log(data, 'data sent to my profile')
    console.log(id, 'id')

    // add if (setMain == pressed) then useDoOpposite()
    function handleMain () {
        setMain('usr-head-main')
        setLeft('usr-head-left')
        setRight('usr-head-right')
    };
    function handleLeft () {
        setLeft('usr-head-main')
        setMain('usr-head-left')
        setRight('usr-head-right')
    };
    function handleRight () {
        setRight('usr-head-main')
        setMain('usr-head-right')
        setLeft('usr-head-left')
    };

    // fetch data
    useEffect(() => {

        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get(`/userspine/${id}`); 
                setData(response.data);
            } catch (err) {
                console.log(err, 'err from userProfile');
            }
        }
        getUsers();
    }, [axiosPrivate, id])

    // fetch rotator data
    useEffect(() => {
        const getRotator = async () => {
            try {
                const response = await axiosPrivate.get(`/userspine/rotator/${id}`)
                setRotatorData(response.data)
            } catch (err) {
                console.log(err, 'err from userProfile rotator')
            }
        }
        getRotator();
    }, [axiosPrivate, id])
    console.log(rotatorData, 'rotatorData form userprofile')

    if (!data) return (
        <p>loading</p>
    )
    if (!rotatorData) return (
        <p>isLoading</p>
    )


    return (
        <div className={ isDarkMode }>
            <div className='logged-in-nav'>
                <Navbar></Navbar>
            </div>
        <div className='user-page'>

            <div className = 'user-page-head'>
                <CurUserPage/>
                <div className='usr-head'>
                    <div className={left}>
                        <div className='usr-head-header'>
                            <div className='user-headbutt' onClick={handleLeft}>{left === 'usr-head-left'? <p>+</p>: <p>-</p> }</div>
                        </div>
                        <FilterLeft props = {rotatorData}/>
                    </div>
                    <div className={main}>
                        <div className='usr-head-header'>
                            <div className='user-headbutt' onClick={handleMain}>{main === 'usr-head-main'? <p>-</p>: <p>+</p> }</div>
                        </div>
                        <FilterMain props = {rotatorData} propID = {data}/>
                    </div>
                    <div className={right}>
                        <div className='usr-head-header'>
                            <div className='user-headbutt' onClick={handleRight}>{right === 'usr-head-right'? <p>+</p>: <p>-</p> }</div>
                        </div>
                        <FilterRight props = {rotatorData}/>
                    </div>
                </div>

            </div>

            <div className = 'user-page-sidebar'>
                <MyProfile props = {data}/>
                <div className='cust-user-sidebar'>
                    <p>sidebara</p>
                </div>
            </div>

        </div>
        </div>
    )
}
export default UserProfile;

// mk filter userProfileMain, userProfileLeft, userProfileRight to return correct component
// mk above components that take data props to show screen basics
