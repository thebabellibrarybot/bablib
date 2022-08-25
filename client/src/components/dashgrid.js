import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/dashgrid.css';
import BirdProfile from './BirdProfile';


const DashGrid = (props) => {

    const id = props.className
    const [data, setData] = useState();
    const unique = Array.from(new Set(data && data.map((data) => data.gridtitle)));
    const uniqueAboutHead = Array.from(new Set(data && data.map((data) => data.abouthead))) 
    const uniqueAboutBody = Array.from(new Set(data && data.map((data) => data.aboutbody))) 


    useEffect (() => {
        axios.get(`/babelusers/${id}`)
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => console.log(err))
        }, [id]);

    const [myclass, setMyclass] = useState('forUsers')
    function clickedPart  (val)  {
        setMyclass(val)
    }
    console.log(myclass, 'from dashgrid to griddeets')
    
   
    return (
    <div className='fullbox'>
        <div className='aboutsection'>
            <h1>{uniqueAboutHead}</h1>
            <p>{uniqueAboutBody}</p>
        </div>

    <div className='gridbox'>
        <div>
            {unique && unique.map((unique)=>{
                return (
                <div className='extra'>
                <div className='title'>
                <p>{unique}</p>

                <div className='grid'>
                {data && data.map((data)=>{
                    return (
                    <div className='header'>
                        <div className='inner'>
                            <BirdProfile className = 'icon' ability = {data.icon}></BirdProfile>
                            <h3>{data.bodyhead}</h3>
                        </div>

                        <div className='butts'>
                            <p onClick={() => clickedPart(data.bodyhead)}>{data.bodybutton}</p>
                        </div>
                    </div>
                        )
                    })}
                </div>
                </div>
                    <p>mk a div for this and put grid deets comp in it</p>
                </div>
                
                )
            })}
        </div>
 
    </div>
    </div>
    )   
}
export default DashGrid;