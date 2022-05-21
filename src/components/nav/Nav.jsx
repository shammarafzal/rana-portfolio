import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser, } from 'react-icons/ai'
import {BiBook, BiMessageSquare} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {DiCoffeescript} from 'react-icons/di'
import {useState} from 'react'
const Nav = () => {
  const [activeNav, setActivenav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={()=>setActivenav('#')} className={activeNav === "#" ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActivenav('#about')} className={activeNav === "#about" ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActivenav('#experience')} className={activeNav === "#experience" ? 'active' : ''}><BiBook/></a>
      {/* <a href="#portfolio" onClick={()=>setActivenav('#portfolio')} className={activeNav === "#portfolio" ? 'active' : ''}><DiCoffeescript/></a> */}
      <a href="#services" onClick={()=>setActivenav('#services')} className={activeNav === "#services" ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>setActivenav('#contact')} className={activeNav === "#contact" ? 'active' : ''}><BiMessageSquare/></a>
    </nav>
  )
}

export default Nav