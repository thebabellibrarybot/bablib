import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useRefToken from '../hooks/useRefTok';
import useAuth from '../hooks/useAuth';

const PresistLogin = () => {

    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefToken();
    const { auth } = useAuth();

    useEffect(() => {

        const verifyRefreshToken =  async () => {

            try {
                await refresh();
            }
            catch (err) {
                console.error(err)
            }
            finally {
                setIsLoading(false);
            }
        }
        !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);

    }, [])

    useEffect(() => {
        console.log(`isloading: ${isLoading}`)
        console.log(`AT: ${JSON.stringify(auth?.accessToken)}`)
    }, [isLoading])

    return (
        <>
            {isLoading
                ? <p>Loading...</p>
                : <Outlet />
            }
        </>
    )
}

export default PresistLogin;