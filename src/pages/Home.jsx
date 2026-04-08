import React from 'react'
import Toptext from '../components/home/Toptext.jsx'
import Bottomtext from '../components/home/Bottomtext.jsx'
import Navbar from '../components/Navigation/Navbar.jsx'
const Home = () => {
  return (
    <div className=''>
      <Navbar/>
      <div className='h-screen w-screen fixed'>
        <video autoPlay muted loop src='https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1775669859~exp=1775673459~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=9d8ae10319fd9c2eed95e6f55061d5bf379b5431e782b027c0890db785d910fa&r=dXMtZWFzdDE%3D'/>
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
