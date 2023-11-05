import React from 'react';
import Navbar from '../components/Navbar';
import DestinationTour from '../containers/DestinationTour';

const Destination = () => {
    return (
        <div className="w-screen h-screen  bg-american-blue-bg">
            <Navbar />
            <DestinationTour />
        </div>
    );
};

export default Destination;