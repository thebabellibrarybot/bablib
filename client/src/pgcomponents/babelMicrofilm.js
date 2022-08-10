import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from "axios";
import HTMLFlipBook from "react-pageflip";
import '../styles/flip.css'



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



    if (microfilms === undefined) {
        return <>Still loading...</>; 
        }
    
    
    const cover_url = microfilms.find((e) => {
        const title = ('title_' + microfilms[0].buk + '.jpg')
        console.log(title, 'title')
        console.log(e.access_key, 'access')
        return e.access_key === title

    })
    const url = cover_url.obj_url
    console.log(url, 'url')

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
                <img src = {url} alt = "alt" />
                <p>{microfilms[0].book_title}</p>
                </div>
                {microfilms && microfilms.map((microfilm, i) => (
                <div className="demomicrofilm.obj_url" key={i}>
                    <img src={microfilm.obj_url} alt={i} />
                    <p>{microfilm.book_title} page:{microfilm.page_num}
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