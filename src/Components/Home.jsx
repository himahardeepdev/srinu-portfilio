import React from 'react'
import Intro from './Intro'
import AboutMe from './AboutMe'
import Quote from './Quote'
import FeaturedWorks from './FeaturedWorks'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
      <Intro/>
      <AboutMe/>
      <Quote/>
      <FeaturedWorks/>
      <Contact id="contact" />
    </div>
  )
}

export default Home
