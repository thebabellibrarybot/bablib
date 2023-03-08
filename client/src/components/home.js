import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useTheme from '../hooks/useTheme';
import Navbar from '../navbar';

const BabelHomePg = () => {

    const [imgs, setimgs] = useState();
    const { isDarkMode } = useTheme();
    console.log(isDarkMode, 'from home')

    useEffect (() => {
        axios.get('/home')
        .then((res) => {
            setimgs(res.data)
        })
        .catch((err) => console.log(err))
    }, [])

   

    return (
        <div className={isDarkMode}>
            <Navbar/>
            <div className = 'homepage'>
                {imgs && imgs.map((img) => (
                    <img src = {img.s3_uri} alt = {img.book_title} height = "100" width = "100" key = {img.s3_uri}/>
                ))}
            </div>
        </div>
    )

}



export default BabelHomePg
