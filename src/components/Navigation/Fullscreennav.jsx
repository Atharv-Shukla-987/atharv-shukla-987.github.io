import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const Fullscreennav = () => {
  const container = useRef();

  const overlayRef = useRef(null);
  const iconRef = useRef(null);

  const navItems = [
    { 
      title: "Projects", 
      marquee: "To see everything", 
      path: "/projects",
      img1: "https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b",
      img2: "https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
    },
    { 
      title: "Agence", 
      marquee: "Know us", 
      path: "/agence",
      img1: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop", 
      img2: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop"  
    },
    { 
      title: "Contact", 
      marquee: "Send us a fax", 
      path: "/contact",
      img1: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=800&auto=format&fit=crop", 
      img2: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=800&auto=format&fit=crop"  
    },
    { 
      title: "Blog", 
      marquee: "Read articles", 
      path: "/blog",
      img1: "", 
      img2: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop"  
    }
  ];

  // Nav Close Button Hover Handlers
  const handleNavEnter = () => {
    gsap.to(overlayRef.current, { y: '0%', duration: 0.2, ease: 'power2.out' });
    gsap.to(iconRef.current, { stroke: '#000', duration: 0.2, ease: 'power2.out' });
  };

  const handleNavLeave = () => {
    gsap.to(overlayRef.current, { y: '-100%', duration: 0.2, ease: 'power2.in' });
    gsap.to(iconRef.current, { stroke: '#ffffff', duration: 0.2, ease: 'power2.in' });
  };

  useGSAP(() => {
    // 1. Infinite Marquee Loop
    gsap.to(".marquee-part", {
      xPercent: -100,
      repeat: -1,
      duration: 6,
      ease: "none",
    });

    // 2. Individual Hover Timelines for Links
    const items = gsap.utils.toArray('.link-container');

    items.forEach((item) => {
      const wrapper = item.querySelector('.marquee-wrapper');
      const mainLink = item.querySelector('.main-link');

      const tl = gsap.timeline({ paused: true });

      tl.to(mainLink, {
        backgroundColor: "#D3FD50",
        color: "#000",
        duration: 0.3,
        ease: "power2.inOut"
      })
      .to(wrapper, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.4,
        ease: "power3.inOut"
      }, "<");

      item.onmouseenter = () => tl.play();
      item.onmouseleave = () => tl.reverse();
    });
  }, { scope: container });

  return (
    <div ref={container} className='h-screen w-full bg-black flex flex-col overflow-hidden font-sans relative'>
      
      <div className="absolute top-0 left-0 w-full z-50 flex items-start justify-between">
    
        <Link to='/'>
          <div className='p-[8.65px] w-36'>
            <svg className='w-full top-0 left-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
              <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
            </svg> 
          </div>
        </Link>

        
        <Link to="/" className="block">
          <div 
            className="relative w-55 h-[60px] px-8 bg-black overflow-hidden cursor-pointer flex items-center justify-center"
            onMouseEnter={handleNavEnter}
            onMouseLeave={handleNavLeave}
          >
        
            <div ref={overlayRef} className="absolute inset-0 bg-[#D3FD50] -translate-y-full z-0" />
            
       
            <svg 
              ref={iconRef} 
              className="w-12 h-12 relative z-10" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#ffffff" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
        </Link>
      </div>

      <div className="flex-1 flex flex-col justify-center w-full mt-[10vh]">
        {navItems.map((item, index) => (
          <Link 
            to={item.path} 
            key={index} 
            className="link-container relative w-full border-t border-white/20 last:border-b block no-underline"
          >
            <div className="main-link flex items-center justify-center h-[20vh] w-full transition-colors overflow-hidden">
              <h1 className="uppercase text-[18vh] font-bold tracking-tighter text-white leading-[0.8] mt-2">
                {item.title}
              </h1>
            </div>

            <div 
              className="marquee-wrapper absolute top-0 left-0 w-full h-full bg-[#D3FD50] flex items-center overflow-hidden pointer-events-none"
              style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }}
            >
              <div className="flex whitespace-nowrap">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="marquee-part flex items-center gap-10 pr-10">
                    <h2 className="uppercase text-[18vh] font-bold tracking-tighter text-black leading-[0.8] mt-2">
                      {item.marquee}
                    </h2>
                    
                    <div className="h-3/5 w-[20vw] rounded-full overflow-hidden bg-black/10">
                        <img 
                            src={item.img1} 
                            className="w-full h-full object-cover"
                            alt={`${item.title} work 1`}
                        />
                    </div>

                    <h2 className="uppercase text-[18vh] font-bold tracking-tighter text-black leading-[0.8] mt-2">
                      {item.marquee}
                    </h2>

                    <div className="h-3/5 w-[20vw] rounded-full overflow-hidden bg-black/10">
                        <img 
                            src={item.img2} 
                            className="w-full h-full object-cover"
                            alt={`${item.title} work 2`}
                        />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  )
}

export default Fullscreennav