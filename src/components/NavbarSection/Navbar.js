import React from 'react'
import './navbar.css';
import pl from "../../assets/plogo2.jpg";
import btnlogo from "../../assets/contact.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <img src={pl} alt='logo-image' className='logo'/>
        <div className='menus'>
            <Link activeClass='active' to='introsection' spy={true} smooth={true} offset={-110} duration={500} className='menusitemlist'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}  className='menusitemlist'>About</Link>
            <Link activeClass='active' to='education' spy={true} smooth={true} offset={-70} duration={500} className='menusitemlist'>Education</Link>
            
           
        </div>
        <button className='destopmenubtn' onClick={()=>{
              document.getElementById('contactpg').scrollIntoView({behavior:'smooth'})
        }}>
            <img src={btnlogo} className='contactimg'/> Contact Me
        </button>
      </nav>
    </div>
  )
}

export default Navbar;
