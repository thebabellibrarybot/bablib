import { FaEarlybirds, FaKiwiBird } from 'react-icons/fa';
import { GiBirdTwitter, GiEgyptianBird, GiKiwiBird, GiNestBirds } from 'react-icons/gi';
import '../styles/register.css';
import { FaCrow, FaReceipt, FaBalanceScaleRight,FaBookDead, FaCommentDots, FaCubes, FaMortarPestle  } from 'react-icons/fa';
import { CgTranscript, CgGhostCharacter } from 'react-icons/cg';
import { BsTranslate } from 'react-icons/bs';
import { GiHillConquest, GiBrain, GiSeveredHand } from 'react-icons/gi';
import { SiTestinglibrary } from 'react-icons/si';

const BirdProfile = (props) => {

    const type = props.ability;

    if (type === 'crow' ) {
        return (
            <FaCrow className='icon'></FaCrow>
        )
    }
    if (type === 'mk-crow' ) {
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
    if (type === 'scales') {
        return (
        <FaBalanceScaleRight className='icon'></FaBalanceScaleRight>
            )
    }
    if (type === 'word-box') {
        return (
        <FaCommentDots className='icon'></FaCommentDots>
            )
    }
    if (type === 'dead-book') {
        return (
        <FaBookDead className='icon'></FaBookDead>
            )
    }
    if (type === 'cubes') {
        return (
        <FaCubes className='icon'></FaCubes>
            )
    }
    if (type === 'mortar-pestal') {
        return (
        <FaMortarPestle className='icon'></FaMortarPestle>
            )
    }
    if (type === 'ghost') {
        return (
        <CgGhostCharacter className='icon'></CgGhostCharacter>
            )
    }
    if (type === 'transcript') {
        return (
        <CgTranscript className='icon'></CgTranscript>
            )
    }
    if (type === 'translate') {
        return (
        <BsTranslate className='icon'></BsTranslate>
            )
    }
    if (type === 'mission') {
        return (
            <GiHillConquest className='icon'></GiHillConquest>
        )
    }
    if (type === 'ls') {
        return (
            <FaReceipt className='icon'></FaReceipt>
        )
    }
    if (type === 'NN') {
        return (
            <GiBrain className='icon'></GiBrain>
        )
    }
    if (type === 'more') {
        return (
            <GiSeveredHand className='icon'></GiSeveredHand>
        )
    }
    if (type === 'data') {
        return (
            <SiTestinglibrary className='icon'></SiTestinglibrary>
        )
    }
    // add brain for neural networks in babelBib 'brainstem'

    // add dead-hand for componens and moar in babelBib 'dead-hand'

    // add octupuss for data_set in babelBib 'octopussy'



    
}
export default BirdProfile;