import React from 'react'
import Home from '../Home/Home';
import Aboutme from '../About me/Aboutme';
import Project from '../Project/Project';
import Skill from '../skill/Skill';
import "./main.scss"
import Contact from '../contcat me/Contact';
function Main() {
  return (
    <div className='main'>
       <Home/>
       <Aboutme/> 
        <Skill/> 
       <Project/> 
       <Contact/>  
    </div>
  )
}

export default Main
