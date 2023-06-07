import React from 'react'
import "./project.scss"
import {cards} from "../../data"
function Project() {

  return (
    <div className='project'id="project">
      <div className='content'>
      <div className='projectdescription'>
            <h1>some of my recent work..</h1>
            <h3>All credit goes to Coffee ☕ and Spotify🎵 </h3>
        </div>
     
      <div className='cards'>
       
        {
          cards.map((e)=>(<div class="container">
          <div class="wrapper">
            <div class="banner-image">
              <img src={e.src}/> </div>
            <h1>{e.heading}</h1>
            <p>{e.about}</p>
           </div>
           <div class="button-wrapper"> 
           <a href={e.github}><button class="btn outline">code</button> </a>
           {/* <a href={e.website}>  <button class="btn fill">live</button></a> */}
           </div>
             </div>
         ))
        }
      
</div>
</div>

    </div>
  )
}

export default Project
