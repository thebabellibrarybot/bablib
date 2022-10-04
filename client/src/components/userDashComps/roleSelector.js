import { useState, useEffect } from "react";
import { axiosPrivate } from "../../api/axiosPrivate";


const UserRoleSelector = () => {

    // get data for rotator 
    const [data, setData] = useState();
    const path  = window.location.pathname;
    console.log(path, 'rotatorpath')
    useEffect (() => {
        axiosPrivate.get(`${path}`)
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => console.log(err))
    }, [path])
    console.log(data, 'data')


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
                                            <p onClick={() => handleextra(d.roles)}>{d.roles}</p>
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