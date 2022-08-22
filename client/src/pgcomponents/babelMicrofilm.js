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
  
        return e.access_key === title

    })
    const url = cover_url.obj_url
    const H = `${microfilms[1].page_size[1] * .1}`
    const W = `${microfilms[1].page_size[0] * .1}`
    console.log(H, W)
   


    return (
        <div className='tombpage'>
            <div className='topstuff'>
                <p>stuff</p>
            </div>
        
        <div className="tombscreen">

            <div className="book">
        
                <HTMLFlipBook
                width= {W}
                height = {H}
                showCover={true}
                maxShadowOpacity={0.5}
                mobileScrollSupport={true}
                >

                <div className="demoPage">
                <img src = {url} alt = "alt" height = {H} width = {W}/>
                <p>{microfilms[0].book_title}</p>
                </div>

                {microfilms && microfilms.map((microfilm, i) => (
                <div className="page" key={i}>
                    <img src = {microfilm.obj_url} alt = 'alt' height = {H} width = {W} />
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


/*
<div className="demoPage" key='title'>
                            <img src = {url} alt = "alt" />
                            <p>{microfilms[0].book_title}</p>
                            
                        </div>
                        */