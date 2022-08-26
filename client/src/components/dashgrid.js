import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/dashgrid.css';
import BirdProfile from './BirdProfile';
import GridDeets from './griddeets';


const DashGrid = (props) => {

    const id = props.className
    //console.log(id, 'id from dashgrid')
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

    const [myclass, setMyclass] = useState(null)
    function clickedpart  (val)  {
        //console.log(val, 'val')
        // i could add something like 
        // if data.bodyhead == myclass setstate(val)
        // else setState(null)
        setMyclass(val)
    }    
   
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
                {data && data.map((data, i)=>{
                    return (
                    <div className='header'>
                        <div className='inner'>
                            <BirdProfile className = 'icon' ability = {data.icon}></BirdProfile>
                            <h3>{data.bodyhead}</h3>
                        </div>

                        <div className='butts'>
                            <p onClick={() => clickedpart(data.bodyhead)} key = {i}>{data.bodybutton}</p>
                        </div>
                    </div>
                        )
                    })}
                </div>
                </div>
                    <GridDeets className = {myclass}></GridDeets>
                </div>
                
                )
            })}
        </div> 
 
    </div>
    </div>
    )   
}
export default DashGrid;