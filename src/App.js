import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Skill from './pages/skill/Skill';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Themes from './components/Themes';

import './App.css';

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Themes/>

    <Routes>
     <Route exact path="/" element= {<Home/>}/>
     <Route exact path="Home" element= {<Home/>}/>
    <Route path='about' element= {<About/>}/>
    <Route path='skill' element= {<Skill/>}/>
    <Route path='portfolio' element= {<Portfolio/>}/>
    <Route path='contact' element= {<Contact/>}/>
    </Routes>
  
    </BrowserRouter>
  )
}

export default App
