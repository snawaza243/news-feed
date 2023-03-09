import React from 'react'

export const Hero = (props) => {
    return (
       <div className='m-0 p-0'>
         <div 
        className="container-fluid bg-dark text-white d-flex  justify-content-center align-items-center flex-column" 
        style={{ height: "35vh" , width:"100%", marginTop:"40px"}}>
        <h4 style={{fontSize:"50px", color:" rgb(207, 13, 13)"}}>News Feed</h4>
        <h5 className='' style={{textTransform:"capitalize"}} >Welcome to the Daily Latest Top News Feed Space</h5>
        <h5 className='heroDesc' style={{textTransform:"uppercase", paddingTop:"20px"}} id='scroll-text' >Get the todays top <i className='heroType'>"{props.cat}"</i> News on your feed</h5>
        {/* <h5 className='heroDesc' style={{textTransform:"capitalize"}} id='scroll-text'>Daily Top News {props.i} : {props.title}</h5> */}
        </div>
       </div>
    )
}
