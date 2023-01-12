import { useState } from 'react';
import CurUserPage from '../../pgcomponents/userDashComponents/curuserpage';
import MyProfile from './myProfile'

const UserProfile = () => {

    const [main, setMain] = useState('usr-head-main');
    const [left, setLeft] = useState('usr-head-left');
    const [right, setRight] = useState('usr-head-right');

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

    return (
        <div className='user-page'>

            <div className = 'user-page-head'>
                <CurUserPage/>
                <div className='usr-head'>
                    <div className={left}>
                        <button onClick={handleLeft}>{left === 'usr-head-left'? <p>+</p>: <p>-</p> }</button>
                        <p>left</p>
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