import { useEffect, useState } from "react";

// need to add hisotory = usehistory and local storage .getitem back
// in user spine to pass those props over to this component for the 
// req to back-end to get user info for the profile editor

const UserProfile = () => {

    const [data, setData] = useState();

    useEffect = (() => {
        useEffect (() => {
            axios.get('/home')
            .then((res) => {
                setimgs(res.data)
            })
            .catch((err) => console.log(err))
        }, [])
    })


    return (
        <div className="userprofile">
        <BirdProfile className = 'icon' ability = {ability}></BirdProfile>
        <p>welcome: </p>
        </div>
    )
}