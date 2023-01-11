import axios from "axios";
import useAuth from "./useAuth";

const useLogout = () => {
    const { setAuth } = useAuth();

    const logout = async () => {
        setAuth({});
        try {
            const response = await axios('/logout', {
                withCredentials: true
            });
            console.log(response, 'from logout');
        } catch (err) {
            console.error(err);
        }
    }

    return logout;
}

export default useLogout;