import React from 'react'
import "./aboutme.scss"
import photo from "../../assets/profile.jpg";
function Aboutme() {

  return (
    <div className='about' id="about">
        <div className='heading'>
            so,who am i?
        </div>
        <div className='content'>
            
        
        <div className='description'>
          <div className='img'>
            <img src={photo}/>
          </div>
            <div className='text'>Namste, I'm Diya shah a 2nd year btech student of CSE at sardar vallabhbhai patel institute of technology.I am self taught web developer who love's to build user friendly webapp.I like to explore new technologies. Mainly my interest is in web development & block chain development. currently, i am exploring new technologies and frameworks around web dev and making new projects.<br/> <br/>

Other than this i like to read books mostly fictional ones and I am noob guitar player.i love to explore new places and make memories.💗</div>
        </div>
        
        </div>
    </div>
  )
}

export default Aboutme
