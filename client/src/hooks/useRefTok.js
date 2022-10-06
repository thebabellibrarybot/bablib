import axios from 'axios';
import useAuth from './useAuth';

const useRefToken = () => {
    const { setAuth } = useAuth();
    console.log('ref token fired')

    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true
        });
        console.log(response, 'got this res from useRefToken')
        setAuth(prev => {
            console.log(`from ref= access, roles: ${response.data.accessToken}, ${response.data.roles}`)
            return {
                ...prev,
                roles: response.data.roles,
                accessToken: response.data.accessToken
            }
        });
        return response.data.accessToken;
    }
    console.log('ref token finished')

    return refresh;

};
export default useRefToken;