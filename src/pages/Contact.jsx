import React from 'react'
import './contact.css'
export const Contact = () => {
  const handleSubmit=(e)=>{
    e.preventDefault();

  }
  return (
    <div classNameName='m-5' style={{ minHeight: "100vh" , marginTop:"80px"}}>
      <div classNameName='p-4 py-5'>
      <h1></h1>
        <h3 style={{ marginLeft:"120px"}}>Contact Form</h3>
        <div className="container">
          <form action="/action_page.php" style={{width:"400px", margin:"10px"}} >
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." />

            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

            <label for="lname">Phone</label>
            <input type="text" id="lname" name="lastname" placeholder="Your phone number" />

            <label for="lname">Email</label>
            <input type="text" id="lname" name="lastname" placeholder="Your email" />

            <label for="country">Country</label>
            <select id="country" name="country">
              <option value="india">India</option>
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>

            <label for="subject">Message</label>
            <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>
            <input type="submit" onClick={handleSubmit} value="Submit" style={{backgroundColor:"black"}} />
          </form>
        </div>
      </div>
    </div>
  )
}
