import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const BabelHomePg = () => {
    const [imgs, setimgs] = useState();

    useEffect (() => {
        axios.get('/home')
        .then((res) => {
            setimgs(res.data)
        })
        .catch((err) => console.log(err))
    }, [])

   

    return (
        <div className = 'homepage'>
            {imgs && imgs.map((img) => (
                <img src = {img.s3_uri} alt = {img.book_title} height = "100" width = "100"/>
            ))}
        </div>
    )

}



export default BabelHomePg
