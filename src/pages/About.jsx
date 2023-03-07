import React from 'react'
import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <div className='my-5' style={{ minHeight: "100vh" }}>

      <div className='p-4'>
        <h4>About Us!</h4>
        <h3 style={{ textAlign: "center" }}>Welcome To <span id="W_Name1">News Feed</span></h3>
        <p>News Feed is a Professional Daily News Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of <span id="W_Type2">Daily News</span>, with a focus on dependability and <span id="W_Spec">Online Daily News Top Head Line</span>. We're working to turn our passion for <span id="W_Type3">Daily News</span>. We hope you enjoy our <span id="W_Type4">Daily News</span> as much as we enjoy offering them to you.</p>
        <p>I will keep posting more important posts on my Website for all of you. Please give your support and love.</p>
        <p style={{ textAlign: "center" }}>Thanks For Visiting Our Site<br />
          <span style={{ color: "blue", size: "16px", textAlign: "center" }}>Have a nice day! </span></p>

      </div>
    </div>
  )
}
