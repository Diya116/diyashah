import React from 'react'
import html from "../../assets/html.svg"
import "./skill.scss"
import { logos } from '../../data' 
function Skill() {

  return (
    <div className='skill'>
   
      <div class="container">
      <div className='heading'>
        Skills
      </div>
      
      <div className='allskill'>
        {
      logos.map((e)=>( 
      <div className='singleskill'>
   
      <div className='skillicon'>
        <img src={e.src}/>
      </div>
    </div>))
    }
        </div>
        <div class="scroll-element secondary">
        {
      logos.map((e)=>( 
      <div className='singleskill'>
   
      
        <img src={e.src}/>
      </div>
    ))
    }
        </div>
      </div>
      </div>
  )
}

export default Skill
{/* <div className='allskill'>
{
      logos.map((e)=>( 
      <div className='singleskill'>
   
      <div className='skillicon'>
        <img src={e.src}/>
      </div>
      <div className='skillname'>
        Javascript
      </div>
    </div>))
    }
 
</div> */}