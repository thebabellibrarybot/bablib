import { LeftProf, MainProf, RightProf } from './editProfile';
import { LeftTomb, MainTomb, RightTomb } from './editTombs';

export function FilterLeft({props}) {
    const data = props 
    const type = data.rotatorType

    if (type === 'myprofile') return (
        <LeftProf props = {type}/>
    )
    if (type === 'edittombs') return (
        <LeftTomb props = {type}/>
    )
}
export function FilterMain({props, propID}) {
    const data = props
    const id = propID
    const type = data.rotatorType
    console.log(id, 'id from filtermain')

    if (type === 'myprofile') return (
        <MainProf props = {data} propID = {id}/>
    )
    if (type === 'edittombs') return (
        <MainTomb props = {type} propID = {id}/>
    )
}
export function FilterRight({props}) {
    const data = props
    const type = data.rotatorType

    if (type === 'myprofile') return (
            <RightProf props = {type}/>
    )
    if (type === 'edittombs') return (
        <RightTomb props = {type}/>
    )
}