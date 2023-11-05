import React from 'react'
import TourBody from "../containers/TourBody"
import Navbar from '../components/Navbar'

function Tour() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-american-blue-bg">
            <Navbar />
            <TourBody />

        </div>
    
  )
}

export default Tour;
