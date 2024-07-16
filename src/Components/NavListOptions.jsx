import React from 'react'
import './navBar.css';
import { Link } from 'react-router-dom';
import {  animateScroll as scroll } from 'react-scroll';
const NavListOptions = ({name , path , activeState , setActiveState}) => {

    
  const setPage = (name)=>{
      scroll.scrollToTop()  
      setActiveState(name);
    }
   
  return (
    <li>
        <Link to={path} className={ activeState === name ? "options" : "options activestate"   } onClick={()=>{setPage(name)}}>
            {name}
        </Link>
    </li>
  )
 
}

export default NavListOptions
