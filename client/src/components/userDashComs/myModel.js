import UserRoleSelector from "./roleSelector"
import CurUserPage from "../../pgcomponents/userDashComponents/curuserpage";

const UserModel = () => {


    return (
        <div className="usermodel">
            <h1>welcome to user models</h1>
            <UserRoleSelector></UserRoleSelector>
            <CurUserPage/>            
        </div>
    )
}
export default UserModel;