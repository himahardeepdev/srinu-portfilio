import React from 'react'
import Intro from './Intro'
import AboutMe from './AboutMe'
import Quote from './Quote'
import FeaturedWorks from './FeaturedWorks'
import Contact from './Contact'
import { Element } from 'react-scroll';
const Home = () => {
  return (
    <div>
      <Element name="home">
        <Intro/>
      </Element>
      <AboutMe/>
      <Quote/>
      <FeaturedWorks/>
      <Element name="contactSection">
        <Contact />
      </Element>
    </div>
  )
}

export default Home
