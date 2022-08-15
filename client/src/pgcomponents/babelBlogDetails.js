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
                <h1>{data.title}
                <p>{data.date}
                <p>{data.full}</p></p></h1>
        </div>
        </>
    )

}

export default BabelBlogDeets;
