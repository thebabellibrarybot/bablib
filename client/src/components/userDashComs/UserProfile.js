import CurUserPage from '../../pgcomponents/userDashComponents/curuserpage';
import MyProfile from './myProfile'

const UserProfile = () => {
    return (
        <div className='user-page'>

            <div className = 'user-page-head'>
                <CurUserPage/>
                <div className='usr-head'>
                    <div className='usr-head-left'>
                        <p>left</p>
                    </div>
                    <div className='usr-head-main'>
                        <p>main</p>
                    </div>
                    <div className='usr-head-right'>
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