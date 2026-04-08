import React, { useRef, useEffect } from 'react'
import gsap from 'gsap';
import { useLocation } from 'react-router-dom';

const StairAni = (props) => {
   const currentpath = useLocation().pathname;
    const stairParentRef = useRef(null);
    const pageRef = useRef(null);
useEffect(() => {
  if (!stairParentRef.current) return;

  const ctx = gsap.context(() => {
    const strips = stairParentRef.current.querySelectorAll('.stairani');
    gsap.set(stairParentRef.current, { display: 'block' });

    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    tl.from(strips, {
      scaleY: 0,
      transformOrigin: 'top left',
      stagger: 0.06,
      duration: 0.55
    });

    tl.to(strips, {
      yPercent: 100,
      stagger: 0.07,
      duration: 0.75
    }, '+=0.05');

    tl.set(stairParentRef.current, { display: 'none' });

    gsap.fromTo(pageRef.current,
      { opacity: 0, scale: 1.08 },
      { opacity: 1, scale: 1, duration: 0.7 },
    );
  }, stairParentRef);

  return () => ctx.revert();
}, [currentpath]);
  return (
    <div className='overflow-hidden'>
     <div ref={stairParentRef} className='h-screen w-full fixed z-20  top-0'>
       <div className=' h-full w-full flex  top-0'>
        <div className='stairani bg-black h-full w-[20vw]'></div>
        <div className='stairani bg-black h-full w-[20vw]'></div>
         <div className='stairani bg-black h-full w-[20vw]'></div>
        <div className='stairani bg-black h-full w-[20vw]'></div>
         <div className='stairani bg-black h-full w-[20vw]'></div>
      </div>
      </div> 
      <div ref={pageRef} >
        {props.children}
      </div>
    </div>
  )
}
export default StairAni
