import axios from 'axios';
import React, { useEffect } from "react";
import { useState } from 'react';
import { useParams } from "react-router-dom";
import '../styles/blogbody.css';

const BabelBlogDeets = () => {

    const { id } = useParams()
    
    const [data, setData] = useState();
    
    useEffect (() => {
        axios.get(`/babelblogls/${id}`)
    .then((res) => {
        
        setData(res.data, 'res.data');

    })
    .catch((err) => console.log(err))
    }, [id])

    console.log(data, 'blogdeets')
    
    if (data === undefined) {
        return <>Still loading...might not ever stop...</>; 
        }

    return(
        <div className='fullblog'>
            <div className='blogTitle'>
            <h2>{data.title}</h2>
            <h3>{data.date}</h3>
            </div>
            <div className='bcontent'>
                {data && data.body.map((body)=>{
                return (
                    <div>
                        {body && body.deets.map((e)=>{
                            return (
                                <div className='para'>
                                <h3>{e.sTitle}</h3>
                                {e && e.sBody.map((sbody, i)=>{
                                    return (
                                        <div className='body'>
                                            <img src = {sbody.pic} alt = {i}></img>
                                            <p>{sbody.textbody}</p>
                                        </div>
                                    )
                                })}
                                </div>
                                

                            )
                        })}
                    </div>
                )
                    
                })}
            </div>
        </div>
    )

}

export default BabelBlogDeets;
