import { LeftProf, MainProf, RightProf } from './editProfile';
import { LeftTomb, MainTomb, RightTomb } from './editTombs';
import { LeftTombViewer, MainTombViewer } from './tombviewer';

export function FilterLeft({props}) {
    const data = props 
    const type = data.rotatorType

    if (type === 'myprofile') return (
        <LeftProf props = {type}/>
    )
    if (type === 'edittombs') return (
        <LeftTomb props = {type}/>
    )
    if (type === 'viewtombs') return (
        <LeftTombViewer props = {type}/>
    )
}
export function FilterMain({props, propID}) {
    const data = props
    const id = propID
    const type = data.rotatorType

    if (type === 'myprofile') return (
        <MainProf props = {data} propID = {id}/>
    )
    if (type === 'edittombs') return (
        <MainTomb props = {type} propID = {id}/>
    )
    if (type === 'viewtombs') return (
        <MainTombViewer props = {type} propID = {id}/>
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
    if (type === 'viewtombs') return (
        <RightProf props = {type}/>
    )
}