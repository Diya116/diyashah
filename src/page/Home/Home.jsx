import React from "react";
import "./Home.scss";
import photo from "../../assets/diyaphoto.jpeg";
import {
  GitHub,
  Instagram,
  Link,
  LinkOffRounded,
  LinkedIn,
  OpenInNew,
  Twitter,
} from "@mui/icons-material";
function Home() {
  return (
    
      <section className="home" id="home">
     
          <div className="photoframe">
            <div className="photofield">
              <img src={photo}/>
            </div>
          </div>
       

        <div className="text">
           <h1>Hello <span className="wave">👋</span><br/>I'm Diya</h1>
           <div className="line">
            <h3 className="lineUp">Web Developer</h3>
            <h3 className="lineUp">Student &</h3>
            <h3 className="lineUp">Nature Lover</h3>
           </div>
         {/* <p>student of btech 2nd year.  passoinate about solving real world peoblem with various tech stack. </p> */}
         <div className="socialmedia">
        
          <a href="https://twitter.com/diyashaah" className="iconsocial">
            <Twitter />
          </a>
          <a href="https://www.instagram.com/diyasha116/" className="iconsocial">
            <Instagram />
          </a>
          
          <a href="https://www.linkedin.com/in/shah-diya-6936b0236/" className="iconsocial">
            <LinkedIn />
          </a>
          <a href="https://github.com/Diya116" className="iconsocial">
            <GitHub />
          </a>
        </div>
          <div className="buttons">
            <a href="https://drive.google.com/file/d/18SLrK_J003igbSdS8eoKmvPNfPN4A-Oe/view"className="btn "><OpenInNew/> <span>Resume</span></a>
            <a href="#contact"className="btn">connect</a>
          </div>
          
        </div>
         
      </section>
      
  
  );
}

export default Home;
