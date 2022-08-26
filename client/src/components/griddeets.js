import React, { useState, useEffect } from "react";
import axios from "axios"; 

class GridDeets extends React.Component{
    constructor(props) {
        super(props);
        this.state = null

        console.log(this.state, 'this.state')
        
    }
    componentDidUpdate(prevProps) {
        if (this.props.className !== prevProps.className){
            this.setState({
                className: prevProps.className
            })
            console.log('set data to:', prevProps.className)
            
            const id = this.props.className
            
            console.log('axios search with:', id)

            axios.get(`/babelusers/${id}/deet`)
            .then((res) => {
                console.log('set data to:', res.data)
                
                this.setState({data: res.data})
            })
            .catch((err) => console.log(err))
            console.log('set data from axios', this.state)
                
        }
    }
    
    render() {
        if (this.state !== null){
        console.log(this.state.data, '::state::', '::from render')
        return (
        <p>
           hi
       </p>
        )
    }
    }}
export default GridDeets;