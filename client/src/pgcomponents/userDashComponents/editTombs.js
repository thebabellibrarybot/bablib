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

    // get user props // will update if props change (mayb mk props that can change to delet tomb if tomb is uploaded)
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
    const [checkedItem, setCheckedItem] = useState(null);

    // updates when curTombArray changes
    useEffect(() => {
        //console.log(curTombArray, 'from use effecrt')
    }, [curTombArray])

    // set curImage with checkbox-onclickevent
    const handleCheck = (tomb) => {
        setCheckedItem(tomb);
        console.log('checked item', checkedItem);
      };

    // return if no tombs added
    if (curTombArray === 'bop') {
        return (
            <p>no tombs added yet</p>
        )
    }
    // return once tombs are added
    if (curTombArray !== null) {return (
        <div>
            {curTombArray.file.map((tomb, i)=>{
                return (
                    <div key = {i}>
                        <input 
                        type="checkbox"
                        onChange={() => handleCheck(i)}
                        checked={checkedItem === i}
                        />
                        <p>page num: {i}</p>
                        <p>{checkedItem}</p>
                        <img src = {tomb.Location} alt = {tomb.originalName} key = {i}></img>
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