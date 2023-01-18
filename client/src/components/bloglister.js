import React from 'react';
import { Link } from "react-router-dom";
import useTheme from '../hooks/useTheme';
import Navbar from '../navbar';


const BlogLister = (props) => {

    const blogls = props.blogls
    const { isDarkMode } = useTheme();
    
    if (blogls === undefined) {
        return <>Still loading...</>; 
        }

    return (
        <div className = { isDarkMode }>
            <Navbar></Navbar>
            <div className = 'blog-page'>
            {blogls.map((blogls, i) => {
                return(
                    <div className= 'clicked'>
                        <Link className = 'link' to = {`/babelblogls/${blogls._id}`}>
                            <div className='blog-option' key = {blogls.title}>
                                <h2 key = {i}>{blogls.title}</h2>
                                <p key = {i}>{blogls.date}</p>
                            </div>
                        </Link>
                    </div>
                    )
            })}
            </div>
        </div>
    )
}

export default BlogLister;