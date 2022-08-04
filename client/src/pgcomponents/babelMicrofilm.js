import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from "axios";
import HTMLFlipBook from "react-pageflip";
import '../styles/flip.css'
import cover from '../msm854_fol.32suchgooddatasetheresaveforrestingandalphabet_1L_4.jpg';



const BabelMicrofilm = () => {

    const { id } = useParams()

    const [microfilms, setmicrofilms] = useState();
    
    useEffect (() => {
        axios.get(`/babeltombs/${id}/microfilm`)
    .then((res) => { 
        setmicrofilms(res.data)
    })
    .catch((err) => console.log(err))
    }, [id])

    //console.log(microfilms, 'microfilmssssssssss')


    if (microfilms === undefined) {
        return <>Still loading...</>; 
        }
    

    return (
        <div className="tombscreen">
            <h1>
            Title: {microfilms[0].book_title}
            </h1>
            <p>
            date: {microfilms[0].book_date}
            </p>
            <p>
            location: {microfilms[0].book_location}
            </p>
            <p>
            current lib: {microfilms[0].current_lib}
            </p>
            <p>
            type: {microfilms[0].type}
            </p>


            <div className="App">

        <div className="book">
    
                <HTMLFlipBook
                width={675}
                height={540}
                showCover={true}
                maxShadowOpacity={0.5}
                mobileScrollSupport={true}
                style={{ background: "lavender" }}
            >
                <div className="demoPage">
                <img src={cover} alt="cover" />
                </div>
                {microfilms && microfilms.map((microfilm, i) => (
                <div className="demomicrofilm.obj_url" key={i}>
                    <img src={microfilm.obj_url} alt={microfilm.obj_rurl} />
                    <p>{microfilm.obj_url}
                    </p>
                </div>
                ))}
            </HTMLFlipBook>
            
            
        </div>
        </div>
        </div>
        
    )
}

export default BabelMicrofilm;