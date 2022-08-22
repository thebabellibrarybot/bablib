import { FaEarlybirds, FaKiwiBird } from 'react-icons/fa';
import { GiBirdTwitter, GiEgyptianBird, GiKiwiBird, GiNestBirds } from 'react-icons/gi';
import '../styles/register.css';
import { FaCrow } from "react-icons/fa";


const BirdProfile = (props) => {

    const type = props.ability;
    console.log(type, 'type')

    if (type === 'crow') {
        return (
            <FaCrow className='icon'></FaCrow>
        )
    }
    if (type === 'early-bird') {
        return (
            <FaEarlybirds className='icon'></FaEarlybirds>
        )
    }
    if (type === 'kiwi-bird') {
        return (
            <FaKiwiBird className='icon'></FaKiwiBird>
        )
    }
    if (type === 'bird-twitter') {
        return (
            <GiBirdTwitter className='icon'></GiBirdTwitter>
        )
    }
    if (type === 'egyptian-bird') {
        return (
            <GiEgyptianBird className='icon'></GiEgyptianBird>
        )
    }
    if (type === 'gi-bird') {
        return (
            <GiKiwiBird className='icon'></GiKiwiBird>
        )
    }
    if (type === 'nest-bird') {
        return (
            <GiNestBirds className='icon'></GiNestBirds>
        )
    }
}
export default BirdProfile;