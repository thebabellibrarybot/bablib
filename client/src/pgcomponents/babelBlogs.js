import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import BlogLister from '../components/bloglister';
import useTheme from '../hooks/useTheme';

const BabelBlogls = () => {

    const { isDarkMode } = useTheme;
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
        <div className={ isDarkMode }> 
            <div className='blogls'>
                <BlogLister blogls = {blogls}></BlogLister>
            </div>
        </div>
    )
}

export default BabelBlogls;