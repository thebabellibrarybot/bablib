import axios from 'axios';
import useAuth from './useAuth';

const useRefToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true
        });
        console.log(response, 'got this res from useRefToken')
        setAuth(prev => {
            return {
                ...prev, accessToken: response.data.accessToken
            }
        });
        return response.data.accessToken;
    }

    return refresh;

};
export default useRefToken;