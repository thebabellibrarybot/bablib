import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import DashGrid from '../components/dashgrid';
import useTheme from '../hooks/useTheme';

const AboutForusers = () => {

    const [data, setData] = useState();
    const { isDarkMode } = useTheme;

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
        <div className = { isDarkMode }>
        <div className='usernavs'>

            <nav className='navbar'>
                {uniqueNav && uniqueNav.map((unique, i)=>(
                <div className = 'clicked'>
                <button onClick={() => clickedPart(unique)} key = {i}>
                    {unique}
                </button>
                </div>
                ))}
            </nav>

        </div>

        <DashGrid className = {myclass}></DashGrid>

        </div>
    )
}
export default AboutForusers;