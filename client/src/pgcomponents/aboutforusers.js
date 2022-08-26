import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import DashGrid from '../components/dashgrid';
import '../styles/usernav.css';

const AboutForusers = () => {
    // set babelusers to const {id} = useParams() and change in router to make useable on other routes
    const [data, setData] = useState();
    useEffect (() => {
        axios.get(`/babelusers`)
        .then((res) => {
            setData(res.data)

        })
        .catch((err) => console.log(err))
        }, []);

    const uniqueNav = Array.from(new Set(data && data.map((data) => data.title))) 
    const [myclass, setMyclass] = useState('forUsers')
    function clickedPart  (val)  {
        setMyclass(val)
    }
        
    return (
        <div className='usernav'>

            <nav className='about-navbar'>
            {uniqueNav && uniqueNav.map((unique, i)=>(
            <button onClick={() => clickedPart(unique)} key = {i}>
                {unique}
            </button>
            ))}
            </nav>

            <DashGrid className = {myclass}></DashGrid>
        </div>
    )
}
export default AboutForusers;