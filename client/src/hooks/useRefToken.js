import axios from 'axios';
import useAuth from './useAuth';

const useRefToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true
        });
        setAuth(prev => {
            console.log(JSON.stringify(prev, 'prev from useREFTOKEN.js react'))
            console.log(response.data.accessToken);
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
