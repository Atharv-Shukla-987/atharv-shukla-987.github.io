import React from 'react'
import Toptext from '../components/home/Toptext.jsx'
import Bottomtext from '../components/home/Bottomtext.jsx'
import Navbar from '../components/Navigation/Navbar.jsx'
const Home = () => {
  return (
    <div className=''>
      <Navbar/>
      <div className='h-screen w-screen fixed'>
        <video autoPlay muted loop src='public\video\69496b2d.mp4'/>
      </div>
     <div className='h-screen w-screen relative flex flex-col justify-between overflow-hidden
      '>
      <Toptext />
      <Bottomtext />
     </div>
    </div>
  )   
}    

export default Home
