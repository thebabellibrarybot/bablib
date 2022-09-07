
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();
    console.log(auth, 'auth')
    console.log(auth.roles, 'auth roles')
    console.log(location, 'location')

    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : auth?.user
                ? <Navigate to="/babelblogs" state={{ from: location }} replace />
                : <Navigate to="/babelusers" state={{ from: location }} replace />
    );
}

export default RequireAuth;
// lets add a RequireAuthComponent for this feature