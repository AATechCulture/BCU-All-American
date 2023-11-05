import React from 'react';


const plane = require("../resources/plane.png")

function QueueBody() {
  return (
    <div className='font-ubuntu text-white bg-b text-sm'>
      <div className='flex mt-20 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold flex-column justify-center items-center'>
        <p>Welcome To The <span className='text-american-red'>AA</span> <span className='text-american-bright-blue'>All-American</span> Center!</p>
      </div>
      
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-500 p-8 rounded-md w-5 h-5">
      <p>Put information of queue here!</p>
     </div>


        
      {/* <div className="flex h-screen w-screen items-end justify-center">
        <img className="object-contain h-20 w-20 mb-4" src={plane} alt="Plane"/>
      </div> */}

    </div>
  )
}

export default QueueBody;
