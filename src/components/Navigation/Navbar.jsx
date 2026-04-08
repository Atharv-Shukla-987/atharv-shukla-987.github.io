import React, { useRef } from 'react'
import { Link } from 'react-router-dom' 
import { gsap } from 'gsap';

const Navbar = () => {
  const overlayRef = useRef(null);
  const iconRef = useRef(null);

  const handleMouseEnter = () => {
    
    gsap.to(overlayRef.current, { 
      y: '0%', 
      duration: 0.2, 
      ease: 'power2.out' 
    });
    

    gsap.to(iconRef.current, {
      stroke: '#000',
      duration: 0.2,
      ease: 'power2.out' 
    });
  };

  const handleMouseLeave = () => {
    
    gsap.to(overlayRef.current, { 
      y: '-100%', 
      duration: 0.2, 
      ease: 'power2.in' 
    });

    
    gsap.to(iconRef.current, {
      stroke: '#ffffff',
      duration: 0.2,
      ease: 'power2.in' 
    });
  };

  return (
    <div className='flex fixed items-start justify-between w-full top-0 z-50'>
      
      <Link to='/'>
        <div className='p-[8.65px] w-36 cursor-pointer'>
          <svg className='w-full top-0 left-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
            <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
          </svg> 
        </div>
      </Link>

      
      <Link to="/menu" className="block">
        <div 
          className="relative w-55 h-[49px] bg-black overflow-hidden cursor-pointer flex items-center justify-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          
          <div 
            ref={overlayRef}
            className="absolute inset-0 bg-[#D3FD50] -translate-y-full z-0"
          />
          
        
          <svg 
            ref={iconRef}
            className="w-8 h-8 relative z-10" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#ffffff" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
      </Link>

    </div>
  )
}

export default Navbar