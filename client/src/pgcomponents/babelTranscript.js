import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import '../styles/bookstyle.css';


const BabelTranscript = () => {


    const { id } = useParams()

    const [transcripts, settranscripts] = useState();
    const length = transcripts && transcripts.length



    useEffect (() => {
        axios.get(`/babeltombs/${id}/transcript`)
    .then((res) => { 
        settranscripts(res.data)
    })
    .catch((err) => console.log(err))
    }, [id])

    const [verso, setVerso] = useState(0);

    const [reverso, setReverso] = useState(1);

    const [verso2, serVerso2] = useState(reverso+1);
    const [reverso2, setReverso2] = useState(verso2+1);

    console.log(verso, reverso)

    const bpageClick = () => {
        setVerso(verso-1)
        setReverso2(verso2-1)
        setReverso(reverso-1)
        setReverso2(reverso2-1)
    }
    const fpageClick = () => {
        setVerso(verso+1)
        serVerso2(verso2+1)
        setReverso(reverso+1)
        setReverso2(reverso2+1)
    }

    let currentloc = 1;
    let numpg = length;
    let maxloc = numpg + 1;

    function openBook() {

        // set css to flip transformation
        //  set css to opened
        // set data to new configuration
        //


    }

    function closeBook() {

    }

    const [flip, setFlip] = useState(false);
    
    const goNextPg = () => {
        if(currentloc < maxloc) {
            switch(currentloc) {
                case 1:
                    openBook();
                    setFlip(current => !current);
                    break;
                default:
                    throw new Error("unknown state");
            }
            currentloc++;
        }
    }
    /// needs to do

    //  run flip effect by setting class to flipped
    //  set content to new page configuration
    //  set class to open so a new page is loaded again
    //  if numpg === maxpg {closebook()}


    function goPrevPg() {

    }






    if (transcripts === undefined) {
        return <>Still loading...</>; 
        }


    return (

        <>

        <button className='prev-btn'>
            <FaArrowLeft className='prev'/>
        R
        </button>

        <div className='book'>
            <p>book</p>

            <div className= {flip ? 'flipped1 page': 'page'} id = 'pg1'>
                <div className='front'>
                    <div className='front-content' id='f1'>
                        <h1>front 1:{verso}</h1>
                    </div>
                </div>

                <div className='back'>
                    <div className='back-content' id='f1'>
                        <h1>back 1:{reverso}</h1>
                    </div>
                </div>
            </div>

            <div className= {flip ? 'flipped2 page': 'page'} id = 'pg2'>
                <div className='front'>
                    <div className='front-content' id='f2'>
                        <h1>front 2:{verso}</h1>
                    </div>
                </div>

                <div className='back'>
                    <div className='back-content' id='f2'>
                        <h1>back 2:{reverso}</h1>
                    </div>
                </div>
            </div>


        </div>

        <button className='next-btn' onClick={goNextPg}>
            <FaArrowRight className='next'/>
        L
        </button>


        </>
       

    )

}

export default BabelTranscript;
    
/*

            <p>
                L = {length}
            </p>

        <button className= 'left-button' onClick={bpageClick}>
        <div className='left-arrow'>
            <FaArrowLeft></FaArrowLeft>
            <p>{verso}</p>
       </div>
       </button>

       <div className='book-pages'>
            <div id='p1' className='front-page'>
                <div id = 'f1' className='front-content'>
                    <h1>Front 1: {verso}</h1>
                </div>
            </div>
            <div className='back-page'>
                <div id = 'b2' className='back-content'>
                    <h1>Back 1: {reverso}</h1>
                </div>
            </div>

            <div id='p2' className='front-page'>
                <div id = 'f2' className='front-content'>
                    <h1>Front 2: {verso2}</h1>
                </div>
            </div>
            <div className='back-page'>
                <div id = 'b2' className='back-content'>
                    <h1>Back 2: {reverso2}</h1>
                </div>
            </div>

        


       </div>

       <button className='right-button' onClick={fpageClick}>
       <div className='right-arrow'>
            <FaArrowRight></FaArrowRight>
       </div>
       <p>{reverso}</p>
       </button>

       */