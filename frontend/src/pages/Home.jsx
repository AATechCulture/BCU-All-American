import React from 'react';
import Navbar from '../components/Navbar';
import Main from '../containers/HomeMain';

const Home = () => {
    return (
        <div className="w-full h-screen overflow-hidden bg-american-blue-bg">
            <Navbar />
            <Main />
        </div>
    );
};

export default Home;
