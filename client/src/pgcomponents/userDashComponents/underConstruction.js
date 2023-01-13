import MyProfile from '../../components/userDashComs/myProfile';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import '../../styles/underConstruction.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


const UnderConstruction = () => {

    const underConstruction = true;
    const id = useParams();
    const axiosPrivate = useAxiosPrivate();
    const [data, setData] = useState(null);

    useEffect(() => {

        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get(`/userspine/${id}`); 
                setData(response.data);
            } catch (err) {
                console.log(err, 'err from userProfile');
            }
        }
        getUsers();
    }, [axiosPrivate, id])
    console.log(data, 'data from userProfile')

    if (!data) {
        return (
            <p>loading</p>
        )
    }

    if (underConstruction === true) return (
        <div className='uc'>
            <div className='ucb'>
                <MyProfile props = {data}/>
            </div>
            <div className = 'underconstruction'>
                <div className='ucborder'>
                <p>this div is under construction please have patience with our handworking team</p>
                </div>
            </div>
        </div>
    )
}
export default UnderConstruction;