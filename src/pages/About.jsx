import React from 'react'
import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <div classNameName='m-5' style={{ minHeight: "100vh", marginTop: "80px" }}>
      <div classNameName='p-4 py-5'>
        <div className='container my-2 d-flex justify-content-top align-items-center flex-column my-3' style={{ minHeight: "100vh" }}>
          <div className='p-4' style={{width: "600px"}}>
          
          <h3 style={{ textAlign: "left" }}><span className='pageText'>About Us</span></h3>
            <h4 style={{ textAlign: "left", paddingTop: '30px' }}>Welcome To <Link>News Feed</Link></h4>
            <p>News Feed is a Professional Daily News Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of <span id="W_Type2">Daily News</span>, with a focus on dependability and <span id="W_Spec">Online Daily News Top Head Line</span>. We're working to turn our passion for <span id="W_Type3">Daily News</span>. We hope you enjoy our <span id="W_Type4">Daily News</span> as much as we enjoy offering them to you.</p>
            <p>I will keep posting more important posts on my Website for all of you. Please give your support and love.</p>
            <p style={{ textAlign: "center" }}>Thanks For Visiting Our Site<br />
              <span className='text-danger' style={{ size: "16px", textAlign: "center" }}>Have a nice day! </span></p>

          </div>
        </div>
      </div>
    </div>
  )
}
