import React from 'react'

export const Hero = (props) => {
  return (
    <div className='m-0 p-0'>
      <div className="container-fluid bg-dark text-white d-flex "
        style={{ height: "40vh", width: "100%", marginTop: "40px" }}>
      <div className="container-fluid bg-dark text-white d-flex  justify-content-center align-items-center flex-column">
        <h4 style={{ fontSize: "50px", color: " rgb(207, 13, 13)" }}>News Feed</h4>
        <h5 className='' style={{ textTransform: "capitalize" }} >Welcome to the Daily Latest Top News Feed Space</h5>
        <h5 className='heroDesc' style={{ textTransform: "uppercase", paddingTop: "20px" }} id='scroll-text' >Get the todays top News on your feed.</h5>
        {/* <h5 className='heroDesc' style={{textTransform:"capitalize"}} id='scroll-text'>Daily Top News {props.i} : {props.title}</h5> */}
      </div>
        <div>
        <div  className=''> Country: {props.countryName} </div>
         <div  style={{borderRadius:"5px", padding:"10px", margin:"10px", backgroundColor:"#ce0d0d", color:"white", width:"200px", border:"none"}}> Category: {props.newsCat}</div>
        </div>
      </div>
    </div>
  )
}
