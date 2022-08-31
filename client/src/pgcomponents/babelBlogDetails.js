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

    })
    .catch((err) => console.log(err))
    }, [id])

    console.log(data, 'blogdeets')
    const d = data && data.map((data) => data.body)
    console.log(d, 'd')
    if (data === undefined) {
        return <>Still loading...might not ever stop...</>; 
        }

    return(
        <>
        <div>
            <h2>{data.title}</h2>
            <h3>{data.auth}</h3>
            <div className='body'>
            </div>
        </div>
        </>
    )

}

export default BabelBlogDeets;
