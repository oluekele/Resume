import React from 'react'
import './Navbar.css'
import logo from '../../access/Letter.png'
import { Link } from 'react-scroll';
import contact from '../../access/contact.webp'
import { FcMenu } from "react-icons/fc";
import { useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
        <img src={logo} alt='' className='logo'/>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Clients</Link>
        </div>
        <button className='desktopMenuBtn' onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={contact} alt='' className='desktopMenuImg'/>
            Contact Me
        </button>
        <FcMenu className='mobMenu' onClick={() => setShowMenu(!showMenu)}/> 
        <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>Clients</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar