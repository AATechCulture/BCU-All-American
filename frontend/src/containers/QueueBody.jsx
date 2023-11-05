import React from 'react';


const plane = require("../resources/plane.png")

function QueueBody() {
  return (
    <div className='font-ubuntu text-white bg-b text-sm'>
      <div className='flex mt-20 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold flex-column justify-center items-center'>
        <p>Welcome To The <span className='text-american-red'>AA</span> <span className='text-american-bright-blue'>All-American</span> Center!</p>
      </div>
      
      <div className="font-ubuntu flex w-screen mt-24 p-4 justify-center items-center text-white text-sm">
            <div className="w-1/3  bg-gray-500 rounded-lg p-10">
                <p>  ANY FORM OF QUEUE INFORMATION GOES IN HERE!</p>
            </div>
      </div>

      <img className='w-100 h-100 absolute bot-0 object-contain' src={plane} alt="Plane"/>

    </div>
  )
}

export default QueueBody;
