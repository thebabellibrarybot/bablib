import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
//import { Link } from 'react-router-dom';


const BabelBlogls = () => {

    //const params = useParams();
    const [blogls, setBlogls] = useState([]);
    
    useEffect(() => {
        axios('/babelblogs/')
        .then((res) => {
            setBlogls(res.data);
        })
        .catch((err) => console.log(err))
    }, []);

    if (blogls === undefined) {
        return <>Still loading...</>; 
        }

    return (
        <div>
              {blogls.map(blogls => {
                return (
                <div className='blogchart'>
                <h4>{blogls.title}</h4>
                <p>{blogls.date}</p>
                </div>
                )
              })}
        </div>
    )
}


export default BabelBlogls;