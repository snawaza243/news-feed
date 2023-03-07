import React from 'react'

export const Hero = (props) => {
    return (
       <div className='m-0 p-0'>
         <div 
        className="container-fluid bg-dark text-white d-flex  justify-content-center align-items-center flex-column" 
        style={{ height: "50vh" , width:"100%"}}>
        <h4 style={{fontSize:"50px", color:" rgb(207, 13, 13)"}}>News Feed</h4>
        <h5 style={{textTransform:"uppercase"}}>Get the today top <i className='heroType'>"{props.cat}"</i> News headlines </h5>
        </div>
       </div>
    )
}
