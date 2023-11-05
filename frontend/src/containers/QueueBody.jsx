import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const plane = require("../resources/plane.png")

function QueueBody() {

  const { username } = useContext(UserContext);

  return (
    <div className='font-ubuntu text-white bg-b text-sm'>
      <div className='flex mt-20 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold flex-column justify-center items-center'>
        <p>Welcome To The <span className='text-american-red'>AA</span> <span className='text-american-bright-blue'>All-American</span> Center!</p>
      </div>
      
      <div className="font-ubuntu flex w-screen mt-24 p-4 justify-center items-center text-white text-sm">
            <div className="w-1/3  bg-gray-500 rounded-lg p-10">
                  <div className="text-center text-xl" >
                    <p>Hey There, {username}!</p>
                    <p>You are the <span className='text-american-bright-blue'>3rd</span> person in line!</p>
                    <p>We will get to you in 15 more minutes!</p>

                </div>

            </div>
      </div>

      <img className='w-100 h-100 absolute bottom-10 left-1/2 transform -translate-x-1/2 object-contain' src={plane} alt="Plane"/>

    </div>
  )
}

export default QueueBody;
