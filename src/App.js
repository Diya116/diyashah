import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './page/Home/Home';
import Main from './page/Main/Main';
import { createContext, useState } from 'react';
import Aboutme from './page/About me/Aboutme';
export const ThemeContext=createContext(null);

function App() {
  const[theme,setTheme]=useState("dark");
  const toggleTheme=()=>{
    setTheme((curr)=>(curr==="light"?"dark":"light"));
    console.log(
      "theme changed"
    )
  }
  
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
   <div className="App" id={theme}>
   <Router>
  <Navbar  /> 
   <Routes>
   <Route path="/" Component={Main}/>
   </Routes>
   <Footer/> 
    </Router>
    </div>
    </ThemeContext.Provider>
  );
}


export default App;
