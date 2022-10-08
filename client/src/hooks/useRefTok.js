import axios from 'axios';
import useAuth from './useAuth';

const useRefToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true
        });
        //console.log(response, 'got this res from useRefToken')
        setAuth(prev => {
            //console.log(`from ref= access, roles: ${response.data.accessToken}, ${response.data.roles}, ${response.data.username}, ${response.data._id}, ${response.data.email}`)
            // set ability id and username to the localstate
            return {
                ...prev,
                roles: response.data.roles,
                accessToken: response.data.accessToken
            }
        });
        return response.data.accessToken;
    }

    return refresh;

};
export default useRefToken;