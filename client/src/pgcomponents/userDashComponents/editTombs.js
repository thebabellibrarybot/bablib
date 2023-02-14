import ActiveTombForm from "./activeTombForm";
import { useState, useEffect } from "react";
import axios from "axios";
import { TombUploader } from "./tombUploader";
import useCurTomb from "../../hooks/useCurTomb";

export function LeftTomb({props}) {

    const prop = props
    const [data, setData] = useState(null);
    const [cansee, setCansee] = useState(false)
    const [form, setForm] = useState(false);

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
            if (form === true) {
                setForm(false)
            }
            setCansee(!cansee)
        }
        if (url[0] === 'add pages') {
            console.log('add pages button tiggered')
            if (cansee === true) {
                setCansee(false)
            }
            setForm(!form)
        }
    }
    if (!data) return (
        <p>loading</p>
    )
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
            <div className={form ? 'viewform' : 'invisible'}>
                <TombUploader/>
            </div>
        </div>
    )
}
export function RightTomb() {

    const { curTombArray } = useCurTomb();

    useEffect(() => {
        console.log(curTombArray, 'from use effecrt')
    }, [curTombArray])

    if (curTombArray === 'bop') {
        return (
            <p>no tombs added yet</p>
        )
    }
    if (curTombArray !== null) {return (
        <div>
            <p>active image wheele</p>
            {curTombArray.file.map((tomb, i)=>{
                console.log(tomb.name, i, 'from added to right')
                return (
                    <div>
                    <p>page name:{tomb.name}</p>
                    <p>page num: {i}</p>
                    </div>
                )
            })}
        </div>
    ) 
    }
}
export function MainTomb({props, propID}) {



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