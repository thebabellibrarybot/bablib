import React from "react";

const GridDeets = (props) => {
    const data = props.className
    console.log(data, 'data')

    if (props.className === null) {
        return (null)
    }
    if (props.className !== null) {
    return (

        <div className="grid-deet">
            {data && data.map((data)=>
            
                <div className="deetline">
                    <div className="head">
                    <h3>{data.bodydeetH}</h3>
                    </div>
                    {data.bodydeetB.map((cont)=>{
                    console.log(cont)
                    return (
                    <div className="line">
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