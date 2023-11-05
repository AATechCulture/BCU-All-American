import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const plane = require("../resources/plane.png")

function HomeMain() {
  return (
    <div className='font-ubuntu text-white text-sm'>
      <div className='flex mt-20 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold flex-column justify-center items-center'>
        <p>Welcome To The <span className='text-american-red'>AA</span> <span className='text-american-bright-blue'>All-American</span> Center!</p>
      </div>
      <div className='flex w-full flex-col md:flex-row items-center justify-center'>
        <div className='mt-12 md:mx-7 lg:mx-12 xl:mx-24 mb-3 flex flex-col justify-center'>
          <a href='' className='outline px-6 py-3 text-center w-full tracking-tighter text-lg text-extrabold rounded-lg'>
            Join Desk #54!
          </a>
          <div className='mt-3 flex flex-row'>
            <p>join another desk's queue</p>
            <ExpandMoreIcon  />
          </div>
        </div>
        <div className='bg-white md:hidden w-1/2 h-1 rounded-md'>
        </div>
        <a href='' className='outline md:mx-7 lg:mx-12 xl:mx-24 mt-8 px-6 py-3 tracking-tighter text-lg text-extrabold rounded-lg'>
            View Queue Status
        </a>
      </div>
      <div className='flex w-full flex-col md:flex-row items-center justify-center'>
        <div className='mt-12 md:mx-7 lg:mx-12 xl:mx-24 mb-3 flex flex-col justify-center'>
          <a href='/game' className='border bo bg-american-red-2 opacity-70 px-6 py-3 text-center w-full tracking-tighter text-lg text-extrabold rounded-lg'>
            Play our NEW All-American Safety Game!
          </a>
        </div>
        <a href='/tour' className=' bg-american-blue-2 border-american-bright-blue border-10 opacity-70 md:mx-7 lg:mx-12 xl:mx-24 mt-8 px-6 py-3 tracking-tighter text-lg text-extrabold rounded-lg'>
            Take A Virtual Tour of Any Destination!
        </a>
      </div>

    <img className='w-100 h-100 absolute bot-0 object-contain' src={plane} alt="Plane"/>
    </div>
  )
}

export default HomeMain