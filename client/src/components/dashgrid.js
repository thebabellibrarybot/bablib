import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import '../styles/dashgrid.css';
import BirdProfile from './BirdProfile';
import GridDeets from './griddeets';


const DashGrid = (props) => {

    const id = props.className

    // add component did mount for if id or data changes...
    const [data, setData] = useState();
    useEffect (() => {
        axios.get(`/babelusers/${id}`)
        .then((res) => {
            setData(res.data)
            setMyclass(null)
        })
        .catch((err) => console.log(err))
        }, [id]);

    const [myclass, setMyclass] = useState(null)
    const [on, setOn] = useState(false)
    function clickedpart  (val)  {
        setMyclass(val)
        setOn(true)
    }    
    
    const uniqueAboutHead = Array.from(new Set(data && data.map((data) => data.abouthead))) 
    const uniqueAboutBody = Array.from(new Set(data && data.map((data) => data.aboutbody))) 
   
    return (

    <div className='fullbox'>
        <div className='aboutsection'>
                <h2>{uniqueAboutHead}</h2>
                <p>{uniqueAboutBody}</p>
        <div className='anddeet'>
        {data && data.map((d, i) => {
             return(
                <div className='extra' key = {i}>
                    <div className = 'title'>
                        <p>{d.gridtitle}</p>

                    <div className='grid'>
                        {d.body.map((body, i)=>{
                            return (
                                <div className='header' key={i}>
                                    <div className='inner'>
                                        <BirdProfile className = 'icon' ability = {body[0].icon}></BirdProfile>
                                        <h3>{body[0].bodyhead}</h3>
                                    </div>
                                    <div className='butts'>
                                        <p onClick={() => clickedpart(body[0].bodydeet)}>{body[0].bodybutton}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    </div>
                </div>
            )
        })}
        </div>

        
    
        </div> 
        <div className={on ? 'deet': 'invisible'}>
        <GridDeets className = {myclass} key = {myclass}></GridDeets>
        </div>
    </div>  
    )
}
export default DashGrid;