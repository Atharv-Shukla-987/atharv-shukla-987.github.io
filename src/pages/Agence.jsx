import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Agence = () => {


  const imgDivRef = useRef(null)
  const imgRef = useRef(null)
  const imgArray = [ '/img/pic1.jpg',
  '/img/pic2.jpg',
  '/img/pic3.jpg',
  '/img/pic4.jpg',
  '/img/pic5.jpg',
  '/img/pic6.jpg',
  '/img/pic7.jpg',
  '/img/pic8.jpg',
  '/img/pic9.jpg',]
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(function(){
    gsap.to(
      imgDivRef.current,{
        scrollTrigger:{
          trigger:imgDivRef.current,
         
          start:'top 22% ',
          end:'top -200%',
          scrub:true,
          pin:true,
          onUpdate:function(elem){
         var imageindex = Math.floor(elem.progress*imgArray.length)
         console.log(imageindex )
         imgRef.current.src = imgArray[imageindex]
          }
        }
      }
    )
  })  
  return (
    <div className='scroll-hidden h-screen  '>
     <div className="sec1">
       <div   ref={imgDivRef}
        className='absolute h-68 w-51 bg-red-900  top-35 left-102.5 overflow-hidden rounded-3xl '>
        <img ref={imgRef} className='h-full w-full object-cover' src='/img/pic1.jpg'/>
      </div>
      <div className='relative font-[font2] mt-[26vw] text-black
       '>
        <h1 className='text-[20vw] text-center
         leading-[17vw] uppercase'>
         SEVEN7Y  
         <br/>
         TWO
        </h1>
       <div className='pl-[40%] mt-20 ' >
         <p className='text-5xl  '>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  We’re inquisitive <br/>
   and open-minded, and we <br/>
   make sure creativity crowds<br/>
    out ego from every corner. A<br/>
     brand is a living thing, with<br/>
      values, a personality and a<br/>
       story. If we ignore that, we can<br/>
        achieve short-term success,<br/>
         but not influence that goes the<br/>
          distance. We bring that<br/>
           perspective to every brand<br/>
            story we help tell.<br/>
        </p>
       </div>
      </div>
     </div>
    <div className="sec2">

    </div>
    </div>
  )
}

export default Agence
