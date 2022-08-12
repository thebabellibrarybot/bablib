import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import BlogLister from '../components/bloglister';
import '../styles/blogchart.css'


const BabelBlogls = () => {

    const [blogls, setBlogls] = useState([]);
    
    useEffect(() => {
        axios('/babelblogls/')
        .then((res) => {
            setBlogls(res.data);
        })
        .catch((err) => console.log(err))
    }, []);

    if (blogls === undefined) {
        return <>Still loading...</>; 
        }

    return (
        <>
        <div>
            <BlogLister blogls = {blogls}></BlogLister>
        </div>
        </>
    )
}

export default BabelBlogls;