import React, { useContext } from 'react';
import './navBar.css';
import NavListOptions from './NavListOptions';
import { Link as ScrollLink} from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { GlobalScope } from '../globalScope/GlobalScope';

const NavBar = () => {
    const {activeState , setActiveState} = useContext(GlobalScope);
    const navigate = useNavigate();
  const options = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
  ];

 
  const handleContact = ()=>{
      navigate("/"); 
      setActiveState("contact");
    }
 
  return (
    <nav className='navBar'>
      <div>
        <p>Srinivas  </p>
      </div>
      <ul>
      
      {
        options.map((option)=>{
            const {name , path} = option 
            return <NavListOptions key={name} name={name} path={path} activeState={activeState} setActiveState={setActiveState}/>
        })
      }
          <li>
          <ScrollLink
            to="contactSection"
            smooth={true}
            duration={500}
            offset={-50}
            className={ activeState === "contact" ? "options" : "options activestate"   } onClick={handleContact}
          >
            Contact
          </ScrollLink>
        </li>

      </ul>
    </nav>
  );
};

export default NavBar;
