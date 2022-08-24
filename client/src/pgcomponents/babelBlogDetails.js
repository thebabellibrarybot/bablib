import axios from 'axios';
import React, { useEffect } from "react";
import { useState } from 'react';
import { useParams } from "react-router-dom";

//import BlogDeetViews from '../components/blogdeets';

const BabelBlogDeets = () => {

    const { id } = useParams()
    
    const [data, setData] = useState();
    
    useEffect (() => {
        axios.get(`/babelblogls/${id}`)
    .then((res) => {
        
        setData(res.data, 'res.data');
        console.log(res.data, 'res data')

    })
    .catch((err) => console.log(err))
    }, [id])

    console.log(data, 'blogdeets')
    if (data === undefined) {
        return <>Still loading...might not ever stop...</>; 
        }

    return(
        <>
        <div>
            <img src = {data.img} alt = {data.alt}/>
            <h2>{data.title}</h2>
            <h3>{data.author}</h3>
            <p>{data.full}</p>
            
        </div>
        </>
    )

}

export default BabelBlogDeets;
