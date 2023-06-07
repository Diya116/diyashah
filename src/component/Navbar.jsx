import React,{useContext,useState} from 'react'
import "./Navbar.scss"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { LightMode } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { ThemeContext } from '../App';
import { useNavigate,Link, NavLink} from 'react-router-dom';
function Navbar() {
   const{theme,toggleTheme}=useContext(ThemeContext);
   const[sidebar,setSidebar]=useState(false);
   const showSidebar=()=>setSidebar(!sidebar);
    const logo="diya";
    
      // const navigate=useNavigate();
      const date=new Date();
       const hour= date.getHours();
     
       console.log(hour);
      
       const greeting=()=>{
        
         if(hour>=5&&hour<=12)
             return "Good Morning"
          else if(hour>=13&&hour<=18)
             return "Good afternoon"
            else if(hour>=19&&hour<=21)
             return "Good evening"
             else
             return "Good Night"
       }
       var greet=greeting();
      

  return (
 
      <div className='navbar' id="NavBar">
      <div className='leftside'>
            <div className='logo'>
        
               {logo}
             
            </div>
           
               
          
         </div>
        
      <div className='mainnavbar' >
        
         <div className='rightside' >
        
         
            
             <li><a href="#" class="active">Home</a></li>
             <li><a href="#about">About</a></li> 
               <li><a href="#project">Project</a></li>
               <li><a href="#contact">Let's connect</a></li>
              
          
          
         </div>
      </div>
      <div className='option'>
           <span className='greet'>{greet}
             </span> 
            <div className='theme' onClick={toggleTheme}>
              {
               theme=="dark"?<LightMode/>:<DarkModeIcon/>
              }
      </div>
         </div>
      
      </div>
   //</div>
  )
}

export default Navbar
