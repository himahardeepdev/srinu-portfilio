import React from 'react'
import './intro.css';
import image1 from '../images/navbarimg.svg';
const Intro = () => {
  return (
    <div className='intro'>
      <div className='intro-text'>
       
        <h2>Hi, I am Srinivas </h2>
        <h4>UI UX Designer</h4>
        <p>I create solutions with care to enhance user experiences.</p>
      </div>
      <div className='intro-pic'>
        <img src={image1} alt="my pic " className='intro-img' />
      </div>
    </div>
  )
}

export default Intro
