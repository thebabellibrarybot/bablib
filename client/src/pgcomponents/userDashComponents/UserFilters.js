import { LeftProf, MainProf, RightProf } from './editProfile';

export function FilterLeft({props}) {
    const data = props 
    const type = data.rotatorType

    if (type === 'myprofile') return (
            <LeftProf props = {type}/>
    )
}
export function FilterMain({props, propID}) {
    const data = props
    const id = propID
    const type = data.rotatorType

    if (type === 'myprofile') return (
            <MainProf props = {data} propID = {id}/>
    )
}
export function FilterRight({props}) {
    const data = props
    const type = data.rotatorType

    if (type === 'myprofile') return (
            <RightProf props = {type}/>
    )
}