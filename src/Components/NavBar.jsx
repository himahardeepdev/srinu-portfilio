import React, { useState } from 'react';
import './navBar.css';
import NavListOptions from './NavListOptions';

const NavBar = () => {
    const [activeState  , setActiveState] = useState("Home");
  const options = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    {name : "Contact" , path : "/"}
  ];

  return (
    <nav className='navBar'>
      <div>
        <p>Srinivas</p>
      </div>
      <ul>
      {
        options.map((option)=>{
            const {name , path} = option 
            return <NavListOptions key={name} name={name} path={path} activeState={activeState} setActiveState={setActiveState}  />
        })
      }
      </ul>
    </nav>
  );
};

export default NavBar;
