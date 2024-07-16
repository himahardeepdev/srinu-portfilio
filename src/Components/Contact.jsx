import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaBehance } from "react-icons/fa";
import { MdOutlineArticle } from "react-icons/md";
import './Contact.css';
const Contact = () => {
  const buttonData = [{title : "Connect on LinkedIn" , icon : <CiLinkedin className='contact-icon' /> , action: () => window.open('https://www.linkedin.com/in/srinivasch16/', '_blank'), } , {title : "Connect on Mail" , icon : <MdEmail className='contact-icon' /> ,action: () => window.location.href = 'mailto:chsrinivas200216@gmail.com',}]
  const openResume = () => {
    window.open(`${process.env.PUBLIC_URL}/resume.pdf`, '_blank');
  };
  
  return (
    <div className='contact' >
     <div className='contact-text'>
     <h3>Resume</h3>
      <div className='setting'>
      <div className='contact-resume' onClick={openResume} ><MdOutlineArticle className='contact-icon'/>View resume</div>
      </div>
      <h3>Connect with me</h3> 
      <div className='setting'>
      {
        buttonData.map((item)=>{
          const {title , icon,action} = item
          return <button className='contact-button' onClick={action} >{icon}<span className='button-title' >{title}</span> </button>
        })
      }
      </div>  
     
      <h3>Other Portfolio</h3>
      <div className='setting'>
      <button className='contact-button behance' onClick={()=>{window.open('https://www.behance.net/srinivasch16', '_blank')}} ><FaBehance className='contact-icon' /><span className='button-title'>Behance</span></button>
      </div>
     </div>
    </div>
  ) 
}

export default Contact
