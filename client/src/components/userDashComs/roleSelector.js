import { useState, useEffect } from "react";
import axios from 'axios';

const UserRoleSelector = () => {

    // get data for rotator 
    const [data, setData] = useState();
    const path  = window.location.pathname;
    useEffect (() => {
        axios.get(`${path}`)
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => console.log(err))
    }, [path])
    //console.log(data, 'data from ROLESELECTOR')

    const handleextra = (el) => {
        console.log('handle extra triggered', el)
    }

    return (
        <div className="rotator">
            {data && data.map((d, i) => {
                return (
                    <div className="roles">
                    {d && d.rotatorRoles.map((d)=>{
                        return (
                            <div>
                                {d && d.map((d)=>{
                                    return (
                                        <div className = 'role'>
                                            <p onClick={() => handleextra(d.roles)}>{d.roles}: from role selector</p>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                        })}
                    </div>
                )
            })}
        </div>

    )
}
export default UserRoleSelector;

/*
{d && d.map((d)=>{
                        console.log(d.roles, 'more roles')
                        return (
                        <div className="roles">
                            <p>{d.roles}</p>
                        </div>
                        )
                    })}
*/