import { useState, useEffect } from 'react';
import CurUserPage from '../../pgcomponents/userDashComponents/curuserpage';
import MyProfile from './myProfile'
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

const UserProfile = () => {

    // add axios req for user info
    const axiosPrivate = useAxiosPrivate()
    const [main, setMain] = useState('usr-head-main');
    const [left, setLeft] = useState('usr-head-left');
    const [right, setRight] = useState('usr-head-right');
    const [userInfo, setUserInfo] = useState(null);

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
        const getUserInfo = async () => {
            try {
                const response = await axiosPrivate.get('/userSpine')
                setUserInfo(response.data)
            }
            catch (err) {
                console.log(err, 'err from getuserinfo in myProfile')
            }
        }
        getUserInfo();
    }, [userInfo, setUserInfo, axiosPrivate])
    console.log(userInfo)

    return (
        <div className='user-page'>

            <div className = 'user-page-head'>
                <CurUserPage/>
                <div className='usr-head'>
                    <div className={left}>
                        <div className='usr-head-header'>
                            <h2>left</h2>
                            <button onClick={handleLeft}>{left === 'usr-head-left'? <p>+</p>: <p>-</p> }</button>
                        </div>
                    </div>
                    <div className={main}>
                        <button onClick={handleMain}>{main === 'usr-head-main'? <p>-</p>: <p>+</p> }</button>
                        <p>main</p>
                    </div>
                    <div className={right}>
                        <button onClick={handleRight}>{right === 'usr-head-right'? <p>+</p>: <p>-</p> }</button>
                        <p>right</p>
                    </div>
                </div>

            </div>

            <div className = 'user-page-sidebar'>
                <MyProfile/>
                <div className='cust-user-sidebar'>
                    <p>sidebara</p>
                </div>
            </div>

        </div>
    )
}
export default UserProfile;