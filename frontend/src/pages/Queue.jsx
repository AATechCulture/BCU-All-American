import React from 'react'
import Navbar from '../components/Navbar';
import QueueBody from "../containers/QueueBody"




function Queue() {
  return (
    <div className="w-full h-screen overflow-hidden bg-american-blue-bg">
    <Navbar />
    <QueueBody />
    
    </div>
    
  )
}

export default Queue;
