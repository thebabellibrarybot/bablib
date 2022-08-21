import React from "react";
//import { Link } from "react-router-dom";
import { useState } from 'react';
import '../styles/foruser.css';
import { FaCrow, FaBalanceScaleRight,FaBookDead, FaCommentDots, FaCubes, FaMortarPestle  } from 'react-icons/fa';
import MakeProfile from './makeprofile';
import ShareTombs from './ShareTombs';
import Community from './Community';
import CustomModels from './CustomModels';
import Storage from './Storage';
import Resources from './Resources';




const Userstuff = () => {

    const [ clickmkprof, setmkprof ] = useState(false);
    const [clickshtomb, setClickshtomb] = useState(false);
    const [clickcomm, setClickcomm] = useState(false);
    const [ clickCusMod, setClickCusMod ] = useState(false);
    const [clickStorage, setClickStorage] = useState(false);
    const [clickresources, setClickresources] = useState(false);
    

    const handleClickmkprof = () => {
        setmkprof(current => !current)
        setClickshtomb(false)
        setClickCusMod(false)
        setClickcomm(false)
        setClickStorage(false)
        setClickresources(false)
    };
    const handleClickshtomb = () => {
        setmkprof(false)
        setClickshtomb(current => !current)
        setClickCusMod(false)
        setClickcomm(false)
        setClickStorage(false)
        setClickresources(false)
    };
    const handleClickcomm =() => {
        setmkprof(false)
        setClickshtomb(false)
        setClickCusMod(false)
        setClickcomm(current => !current)
        setClickStorage(false)
        setClickresources(false)
    };
    const handleCusMod = () => {
        setmkprof(false)
        setClickshtomb(false)
        setClickCusMod(current => !current)
        setClickcomm(false)
        setClickStorage(false)
        setClickresources(false)
    };
    const handleStorage = () => {
        setmkprof(false)
        setClickshtomb(false)
        setClickCusMod(false)
        setClickcomm(false)
        setClickStorage(current => !current)
        setClickresources(false)
    };
    const handleResources =() => {
        setmkprof(false)
        setClickshtomb(false)
        setClickCusMod(false)
        setClickcomm(false)
        setClickStorage(false)
        setClickresources(current => !current)
    };

    return (
        <div className="userstuff">
            <div className="userbar">
                <h2>forUsers</h2>
                <div className='ubar'>

                    <div className="full" id = 'box'>
                        <div className="inner">
                            <FaCrow className = 'icon' id = 'ocr-icon'></FaCrow>
                            <h3>Make Profile</h3>
                        </div>

                        <button onClick = {(handleClickmkprof)}>
                        <p>mk profile stuff</p>
                        </button>
                    </div>


                    <div className="full" id = 'box'>
                        <div className="inner">
                            <FaBookDead className = 'icon' id = 'transcript-icon'></FaBookDead>
                            <h3>Share Tombs</h3>
                        </div>

                        <button onClick={(handleClickshtomb)}>
                        <p>transcript stuff</p>
                        </button>
                    </div>

                    <div className="full" id = 'box'>
                        <div className="inner">
                                <FaCommentDots className = 'icon' id = 'translate-icon'></FaCommentDots>
                                <h3>Community</h3>
                        </div>

                        <button onClick={(handleClickcomm)}>
                        <p>comingsoon XO</p>
                        </button>
                    </div>

                    <div className="full" id = 'box'>
                        <div className="inner">
                            <FaBalanceScaleRight className = 'icon' id = 'transcript-icon'></FaBalanceScaleRight>
                            <h3>Custom Models</h3>
                        </div>

                        <button onClick={(handleCusMod)}>
                        <p>transcript stuff</p>
                        </button>
                    </div>

                    <div className="full" id = 'box'>
                        <div className="inner">
                                <FaCubes className = 'icon' id = 'translate-icon'></FaCubes>
                                <h3>Storage</h3>
                        </div>

                        <button onClick={(handleStorage)}>
                        <p>coming soon</p>
                        </button>
                    </div>

                    <div className="full" id = 'box'>
                        <div className="inner">
                                <FaMortarPestle className = 'icon' id = 'translate-icon'></FaMortarPestle>
                                <h3>Resources</h3>
                        </div>

                        <button onClick={(handleResources)}>
                        <p>Catered Exp</p>
                        </button>
                    </div>

                    
                </div>
            </div>



            <div className={clickmkprof ? "mk-prof" : "invisible"}>
                <MakeProfile></MakeProfile>
            </div>
            <div className={clickshtomb ? "sh-tomb" : "invisible"}>
                <ShareTombs></ShareTombs>
            </div>
            <div className={clickcomm ? "comm" : "invisible"}>
                <Community></Community>
            </div>
            <div className={clickCusMod ? "cus-mod" : "invisible"}>
                <CustomModels></CustomModels>
            </div>
            <div className={clickStorage ? "storage" : "invisible"}>
                <Storage></Storage>
            </div>
            <div className={clickresources ? "resources" : "invisible"}>
                <Resources></Resources>
            </div>
        
        <div>
            <p className="invisible">gonna add a bottomline contact div</p>
        </div>

        </div>
    )
}
export default Userstuff;