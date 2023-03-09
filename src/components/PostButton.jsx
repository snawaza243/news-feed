import React from 'react'
import { Link } from 'react-router-dom'

export const PostButton = () => {
  return (
<div class="fixed-top " style={{marginTop:"92vh", marginLeft:"84vw"}}>
    <button className='pageText p-2' ><Link to={"./post"} style={{textDecoration:"none", fontWeight:"bold" ,color:"white"}}>Post News</Link></button>
</div>
  )
}
