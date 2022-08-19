import React from "react";
//import { Link } from "react-router-dom";
import { useState } from 'react';
import '../styles/toolspg.css';
import { CgTranscript, CgGhostCharacter } from 'react-icons/cg';
import { BsTranslate } from 'react-icons/bs'



const Toolstuff = () => {

    const [ clickocr, setClickocr ] = useState(false);
    const [clicktranslate, setClicktranslate] = useState(false);
    const [clicktranscribe, setClicktranscribe] = useState(false)

    const handletranslate = () => {
        setClicktranslate(current => !current);
        setClicktranscribe(false);
        setClickocr(false);
    };
    const handletranscribe = () => {
        setClicktranscribe(current => !current);
        setClickocr(false);
        setClicktranslate(false);
    };
    const handleClickocr =() => {
        setClickocr(current => !current);
        setClicktranscribe(false);
        setClicktranslate(false)
    };

    return (
        <div className="toolstuff">
            <div className="intro-tools">
                <h1>about the tools</h1>
                <p>here is our mission state and terms of use</p>
            </div>
            <div className="toolbar">
                <h2>toolbar</h2>
                <div className='tbar'>

                    <div className="OCR-full" id = 'box'>
                        <div className="OCR-inner">
                            <CgGhostCharacter className = 'icon' id = 'ocr-icon'></CgGhostCharacter>
                            <h3>ocr</h3>
                        </div>

                        <button onClick = {(handleClickocr)}>
                        <p>ocr stuff</p>
                        </button>
                    </div>

                    <div className="transcript-full" id = 'box'>
                        <div className="transcript-inner">
                            <CgTranscript className = 'icon' id = 'transcript-icon'></CgTranscript>
                            <h3>transcript</h3>
                        </div>

                        <button onClick={(handletranscribe)}>
                        <p>transcript stuff</p>
                        </button>
                    </div>

                    <div className="translate-full" id = 'box'>
                        <div className="translate-inner">
                                <BsTranslate className = 'icon' id = 'translate-icon'></BsTranslate>
                                <h3>translate</h3>
                        </div>

                        <button onClick={(handletranslate)}>
                        <p>coming soon</p>
                        </button>
                    </div>
                    
                </div>
            </div>



            <div className={clickocr ? "ocr-stuff" : "invisible"}>
                    <div className="ocr-title">
                        <h2>ocr-stuff</h2>
                    </div>
                    <div className="ocr-info">
                        <div className="info" id='ocropy'>
                            <h3>ocropy</h3>
                            <p>ocr is a ...</p>
                        </div>
                        <div className="info" id ='ocropy2'>
                            <h3>ocropy2</h3>
                            <p>ocr2 is a ...a adlkfsajdlkas</p>
                        </div>
                    </div>
            </div>

            <div className={clicktranscribe ? "transcribe-stuff" : "invisible"}>
                    <div className="transcribe-title">
                        <h2>transcribe-stuff</h2>
                    </div>
                    <div className="transcribe-info">
                        <div className="info" id='transcribeopy'>
                            <h3>transcribeopy</h3>
                            <p>transcribe is a ...</p>
                        </div>
                        <div className="info" id ='transcribeopy2'>
                            <h3>transcribeopy2</h3>
                            <p>transcribe2 is a ...a adlkfsajdlkas</p>
                        </div>
                    </div>
            </div>

            <div className={clicktranslate ? "translate-stuff" : "invisible"}>
                    <div className="translate-title">
                        <h2>translate-stuff</h2>
                    </div>
                    <div className="translate-info">
                        <div className="info" id='translateopy'>
                            <h3>translateopy</h3>
                            <p>THERE IS NOTHING HERE YET OKAY</p>
                        </div>
                    </div>
            </div>



        </div>
    )
}
export default Toolstuff;