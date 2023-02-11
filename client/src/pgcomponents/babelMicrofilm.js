import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import HTMLFlipBook from "react-pageflip";
//import '../styles/flip.css'
import Navbar from '../navbar';
import useTheme from '../hooks/useTheme';


const BabelMicrofilm = () => {

    // loading data
    const path  = window.location.pathname;
    const [microfilms, setmicrofilms] = useState();
    const {isDarkMode} = useTheme();

    useEffect (() => {
        axios.get(`${path}`)
    .then((res) => { 
        setmicrofilms(res.data)
    })
    .catch((err) => console.log(err))
    }, [path])


    if (microfilms === undefined) {
        return <>Still loading...</>; 
        }

    // setting facts
    const cover_url =microfilms && microfilms.find((e) => {
        const title = ('title_' + microfilms[0].buk + '.jpg')
        return e.access_key === title
    })
    const url = cover_url.obj_url
    const W = cover_url.page_size[0] * .1 
    const H = cover_url.page_size[1] * .1
    console.log(H,'h', W, 'w')
   
    // establishing logic 
    return (
        <div className={isDarkMode}>

          <Navbar/>

          <div className="main-page-container" height = {H} width = {W}>
            <HTMLFlipBook showCover={true} width={W} height={H} className = 'bookpage'>
              <img src={url} alt="" />
              {microfilms.map((el, i) => (
                <div className="demoPage" key={i}>
                  <div className='pg'>
                    <img src={el.obj_url} alt={el.page_num}/>
                  </div>
                  <p>pg:{el.page_num}</p>
                </div>
              ))}
            </HTMLFlipBook>
          </div>
        </div>
      )
              }
export default BabelMicrofilm;