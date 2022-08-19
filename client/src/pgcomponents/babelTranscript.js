import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import '../styles/bookstyle.css';
// add these to index.html once secured 

const BabelTranscript = () => {

    return (

        <>

        <button className='prev-btn'>
            <FaArrowLeft className='prev'/>
        R
        </button>


        <button className='next-btn'>
            <FaArrowRight className='next'/>
        L
        </button>


        </>
       

    )

}

export default BabelTranscript;
 