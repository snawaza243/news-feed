import React, { useState } from 'react'
import styled from 'styled-components';
import { BsFillArrowUpCircleFill, FaArrowCircleUp } from 'react-icons/fa';

const Button1 = styled.div`
    position: fixed;
    width: 100%;
    left: 90%;
    right: 40px;
    bottom: 40px;
    height: 20px;
    font-size: 3rem;
    z-index: 1;
    cursor: pointer;
    color: #ce0d0d;
    border-radius: 50%;
    padding-bottom: 50px;
`;
const TopUp = () => {
  
    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
     
      });
    };
    
    window.addEventListener('scroll', toggleVisible);
    
  return (
    <Button1>
    <span onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}}> <FaArrowCircleUp /></span>
    </Button1>
  )
}

export default TopUp
