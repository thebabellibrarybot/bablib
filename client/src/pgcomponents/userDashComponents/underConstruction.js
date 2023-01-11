import '../../styles/underConstruction.css';

const UnderConstruction = () => {

    const underConstruction = true

    if (underConstruction === true) return (
        <div className = 'underconstruction'>
            <div className='ucborder'>
            <p>this div is under construction please have patience with our handworking team</p>
            </div>
        </div>
    )
}
export default UnderConstruction;