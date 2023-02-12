import ActiveTombForm from "./activeTombForm";
import { useState, useEffect } from "react";
import axios from "axios";

export function LeftTomb({props}) {

    const prop = props
    const [data, setData] = useState(null);
    const [cansee, setCansee] = useState(false)

    useEffect(() => {

        const getUsers = async () => {
            try {
                const response = await axios.get(`/userspine/${prop}/optpanel`); 
                setData(response.data);
            } catch (err) {
                console.log(err, 'err from userProfile');
            }
        }
        getUsers();
    }, [prop])

    function handleops (url) {
        if (url[0] === 'view tombs') {
            setCansee(!cansee)
        }
    }
    if (!data) return (
        <p>loading</p>
    )
    console.log(data, 'from edit profile left')
    return (
        <div className="userprof-left">
            <div className='right-title'>
                <h2>userOpts</h2>
            </div>
            <div className="options-panel">
                <div>{data.map((data) => {
                    return (
                        <p onClick={() => handleops(data)} key = {data}>{data}</p>
                    )
                })}</div>
            </div>
            <div className={cansee ? 'viewtombs' : 'invisible' }>
                <p>you currently have 0 tombs</p>
            </div>
        </div>
    )
}
export function RightTomb({props}) {

    console.log('these are the RightTomb props', props)

    return (
        <p>active image wheele</p>
    ) 
}
export function MainTomb({props, propID}) {

    console.log('these are the MainTomb props', props, propID)

    return (
        <div className="tombeditor">

            <div className="active-image">
                <div className="active-imageview">
                    <p>view active imge[0]</p>
                </div>
                <div className="active-imageinfo">
                    <ActiveTombForm propID = {propID}/>
                </div>
            </div>

            <div className="editor-actions">
                <h3>Effects Manager</h3>
                <div className="effects-buttons">
                    <button>crop to text</button>
                    <button>show text lines</button>
                    <button>build transcription form</button>
                    <button>edit tomb info</button>
                    <button>effect active image</button>
                    <button>effect all images</button>
                </div>
            </div>

        </div>
    )
}