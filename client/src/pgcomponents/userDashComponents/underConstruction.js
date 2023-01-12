import MyProfile from '../../components/userDashComs/myProfile';
import '../../styles/underConstruction.css';

const UnderConstruction = () => {

    const underConstruction = true

    if (underConstruction === true) return (
        <div className='uc'>
            <div className='ucb'>
                <MyProfile/>
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