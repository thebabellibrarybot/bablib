import { LeftProf, MainProf, RightProf } from './editProfile';

export function FilterLeft({props}) {
    const data = props
    const type = data.rotatorType

    if (type === 'myprofile') return (
            <LeftProf props = {type}/>
    )
}
export function FilterMain({props}) {
    const data = props
    const type = data.rotatorType

    if (type === 'myprofile') return (
            <MainProf/>
    )
}
export function FilterRight({props}) {
    const data = props
    const type = data.rotatorType

    if (type === 'myprofile') return (
            <RightProf props = {type}/>
    )
}