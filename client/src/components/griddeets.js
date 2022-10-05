import React from "react";

const GridDeets = (props) => {
    const data = props.className

    if (props.className === null) {
        return (null)
    }
    if (props.className !== null) {
    return (

        <div className="grid-deet">
            {data && data.map((data, i)=>
            
                <div className="deetline" key = {i}>
                    <div className="head">
                    <h3>{data.bodydeetH}</h3>
                    </div>
                    {data.bodydeetB.map((cont, i)=>{
                    return (
                    <div className="line" key = {i}>
                        <p>{cont.content}</p>
                        <p>{cont.links}</p>
                    </div>
                )
                })} 
                </div>
            
            )}
        </div>

    )}
    
}
export default GridDeets;