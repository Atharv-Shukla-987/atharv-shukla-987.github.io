import React from 'react'
import { Link } from 'react-router-dom'

const Bottomtext = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2 text-white'>
    
      <div className=' flex items-center border-5  border-white rounded-full
 hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors'>
         <Link className='text-[6.5vw]  px-10 pt-8 leading-[5.5vw] pb-1 ' to='/projects
  '>
       WORK
      </Link>
      </div>
        <div className=' flex items-center border-5  border-white rounded-full
         hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors'>
          <Link className='text-[6.5vw]  px-10 pt-8 leading-[5.5vw] pl-2 pr-2 pb-1
        ' to= '/agence '>
        AGENCY
      </Link>
      </div>
    </div>
  )
}

export default Bottomtext
