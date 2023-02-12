import { useState } from "react";

const ActiveTombForm = (props) => {

    const userid = props.propID
    console.log('userid from activetombform', userid)

    const [tombname, setTombName] = useState('');
    const [tombSubName, setTombSubName] = useState('');
    const [originalLanguage, setOriginalLanguage] = useState('');
    const [dateCreated, setDateCreated] = useState('');
    const [patron, setPatron] = useState('');
    const [country, setCountry] = useState('');
    const [digitization, setDigitization] = useState('');
    const [library, setLibrary] = useState('');


    const [submit, setSubmitted] = useState(false);

    function subTombInfo () {
        setSubmitted(true)

    }

    return (
        <div className={submit ? "invisible" : "userprof-main"}>
        <div className='right-title'>
            <h3>Tomb Info</h3>
        </div>
        <div className='show-cur-user'>
            <div className='cur-username'>
                <div className='edit-cur-username'>
                    <input className='edit-cur-username' value = {tombname} onChange = {(e) => setTombName(e.target.value)} type="text" placeholder="tomb name">
                    </input>
                </div>
            </div>
            <div className='cur-username'>
                <div className='edit-cur-username'>
                    <input className='edit-cur-username' value = {tombSubName} onChange = {(e) => setTombSubName(e.target.value)} type="text" placeholder="tomb sub-name">
                    </input>
                </div>
            </div>
            <div className='cur-username'>
                <div className='edit-cur-username'>
                    <input className='edit-cur-username' value = {originalLanguage} onChange = {(e) => setOriginalLanguage(e.target.value)} type="text" placeholder="original language">
                    </input>
                </div>
            </div>
            <div className='cur-username'>
                <div className='edit-cur-username'>
                    <input className='edit-cur-username' value = {dateCreated} onChange = {(e) => setDateCreated(e.target.value)} type="text" placeholder="date created">
                    </input>
                </div>
            </div>
            <div className='cur-username'>
                <div className='edit-cur-username'>
                    <input className='edit-cur-username' value = {patron} onChange = {(e) => setPatron(e.target.value)} type="text" placeholder="patron or provinance">
                    </input>
                </div>
            </div>
            <div className='cur-username'>
                <div className='edit-cur-username'>
                    <input className='edit-cur-username' value = {country} onChange = {(e) => setCountry(e.target.value)} type="text" placeholder="country of origin">
                    </input>
                </div>
            </div>
            <div className='cur-username'>
                <div className='edit-cur-username'>
                    <input className='edit-cur-username' value = {digitization} onChange = {(e) => setDigitization(e.target.value)} type="text" placeholder="manner of digitization">
                    </input>
                </div>
            </div>

            <div className='cur-username'>
                <div className='edit-cur-username'>
                    <input className='edit-cur-username' value = {library} onChange = {(e) => setLibrary(e.target.value)} type="text" placeholder= "current library or archive">
                    </input>
                </div>
            </div>

            <div className = "cur-username">
                <button className='edit-cur-username' onClick={subTombInfo}>save info</button>
            </div>
        </div>
    </div>
    )
}
export default ActiveTombForm;