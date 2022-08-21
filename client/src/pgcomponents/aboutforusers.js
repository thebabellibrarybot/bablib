import React from 'react';
import Usersuff from '../components/userstuff';
import Toolstuff from '../components/toolstuff';
import Bibstuff from '../components/bibstuff';
import Aboutstuff from '../components/aboutstuff';
import Learnstuff from '../components/learn';
import { useState } from 'react';
import '../styles/usernav.css';

const AboutForusers = () => {

    const [about, setAbout] = useState(false);
    const [user, setUser] = useState(true);
    const [tool, setTool] = useState(false);
    const [learn, setLearn] = useState(false);
    const [bib, setBib] = useState(false);

    const handleabout = () => {
        setAbout(current => !current)
        setUser(false)
        setTool(false)
        setBib(false)
        setLearn(false)

    }
    const handleuser= () => {
        setUser(current => !current)
        setTool(false)
        setAbout(false)
        setBib(false)
        setLearn(false)
    }
    const handletool = () => {
        setUser(false)
        setTool(current => !current)
        setAbout(false)
        setBib(false)
        setLearn(false)
    }
    const handlelearn = () => {
        setUser(false)
        setTool(false)
        setAbout(false)
        setBib(false)
        setLearn(current => !current)
    }
    const handlebib = () => {
        setUser(false)
        setTool(false)
        setAbout(false)
        setBib(current => !current)
        setLearn(false)
    }


    return (
        <div>
            <nav className = "about-navbar">
                <button onClick = {(handleabout)}>
                    aboutBabel
                </button>
                <button onClick = {(handleuser)}>
                    forUsers
                </button>
                <button onClick = {(handletool)}>
                    babelTools
                </button>
                <button onClick = {(handlelearn)}>
                    babelLearn
                </button>
                <button onClick={(handlebib)}>
                    babelBib
                </button>
            </nav>


            <div className={user ? 'user-stuff': 'invisible'}>
                <Usersuff></Usersuff>
            </div>   
            <div className = {tool ? 'tools-stuff': 'invisible'}>
                <Toolstuff></Toolstuff>
            </div>  
            <div className= {about ? 'about-stuff' : 'invisible'}>
                <Aboutstuff></Aboutstuff>
            </div>
            <div className={bib ? 'learn-stuff': 'invisible'}>
                <Bibstuff></Bibstuff>
            </div>   
            <div className={learn ? 'learn-stuff': 'invisible'}>
                <Learnstuff></Learnstuff>
            </div>    
        </div>
    )

}



export default AboutForusers;