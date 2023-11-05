import React from 'react';

const logo = require("../resources/AmericanAirlinesLogo.png")

const Navbar = () => {
    return (
        <div className="home-container flex justify-center items-center b  w-screen h-24 bg-white">
            <div className="font-ubuntu flex flex-row bg-white  items-center">
                <div>
                    <img className='w-20 h-20 object-contain' src={logo} alt="AALogo"/>
                </div>
                <div>
                    <a className="text-4xl tracking-tighter font-black font-ubuntu text-black" href="/">All-American</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;