import React from 'react'
import './AboutMe.css';
import image2 from '../images/pana.png';
const AboutMe = () => {
  return (
    <div className='about-me'>
    <div className='about-text'>
   
      <h2>About Me </h2>
      <p>I'm an engineer turned passionate UI/UX designer who loves solving complex problems and creating user-friendly experiences. 
        My unique perspective combines technical knowledge with creative design thinking. I believe great design is about empathy and understanding the user’s journey, not just aesthetics.
        I stay updated with the latest trends and best practices in the UI/UX field.
        When not designing, I explore new technologies and seek inspiration from various art forms.</p>
    </div>
    <div>
     
      <img src={image2} alt="my pic " className='aboutme-img' />
    </div>
  </div>
  )
}

export default AboutMe
