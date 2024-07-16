import React from 'react'
import './navBar.css';
import { Link } from 'react-router-dom'
const NavListOptions = ({name , path , activeState , setActiveState}) => {


  
 if(name === "Contact"){
      return (
        <li className={ activeState === name ? "options" : "options activestate"} onClick={()=>{setActiveState("Home")}}>
           {name}
        </li>
      )
 }else{ 
  return (
    <li>
        <Link to={path} className={ activeState === name ? "options" : "options activestate"   } onClick={()=>{setActiveState(name)}}   >
            {name}
        </Link>
    </li>
  )
 }
}

export default NavListOptions
