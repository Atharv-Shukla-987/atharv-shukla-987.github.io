import React, { useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx';
import Agence from './pages/Agence.jsx';
import Navbar from './components/Navigation/Navbar.jsx';
import Fullscreennav from './components/Navigation/Fullscreennav.jsx';  


const App = () => {
  

  return (
    <div >
      <Navbar />
         <Routes >
        <Route path='/' element={<Home />}/>
        <Route path='/menu' element={<Fullscreennav />}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/agence' element={<Agence />}/>
        <Route path='/contact' element={<h1 className='text-[25vw]'>Contact</h1>}/>
        <Route path='/blog' element={<h1 className='text-[25vw]'>Blog</h1>}/>
      </Routes>
   
    </div>
  )
}

export default App
