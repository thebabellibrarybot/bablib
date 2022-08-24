import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/dashgrid.css';
import BirdProfile from './BirdProfile';


const DashGrid = (props) => {

    const id = props.className
    const [data, setData] = useState();
    const unique = Array.from(new Set(data && data.map((data) => data.title)));
    
    useEffect (() => {
        axios.get(`/babelusers/${id}`)
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => console.log(err))
        }, [id]);
    
   
    return (
    <div className='fullbox'>
    <div className='gridbox'>
        <div className='title'>
            {unique && unique.map((unique)=>{
                return (
                <p>{unique}</p>
                )
            })}
        </div>

        <div className='grid'>
        {data && data.map((data)=>{
            return (
            <div className='header'>
                <div className='inner'>
                    <BirdProfile className = 'icon' ability = {data.icon}></BirdProfile>
                    <h3>{data.bodyhead}</h3>
                </div>

                <button className='butts'>
                    <p>{data.bodybutton}</p>
                </button>
            </div>
            )
        })}
        </div>
    </div>
    <p>extra</p>
    </div>
    )   
}
export default DashGrid;