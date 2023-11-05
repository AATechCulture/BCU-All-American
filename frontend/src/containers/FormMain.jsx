import React from "react";

const plane = require("../resources/plane.png")

const FormMain = () => {

    return (
        <div className="font-ubuntu flex w-screen mt-24 p-4 justify-center items-center text-white text-sm">
            <div className="w-1/3  bg-gray-500 rounded-lg p-10">
                <form action="">
                    <label htmlFor="name">Name</label><br/>
                    <input type="text" id="name" name="name" className="bg-gray-400 rounded w-full h-8" />
                    <div>
                    <label htmlFor="flightNumber">Flight #</label><br/>
                    <input type="text" id="flightNumber" name="flightNumber" className="bg-gray-400 rounded w-full h-8" /><br/>
                    <label htmlFor="concern">Concern Description</label><br/>
                    <input type="text" id="concern" name="concern" className="bg-gray-400 rounded w-full h-8" />
                    <input type="submit" value="Join" className="bg-american-blue-2 py-3 px-5 mt-5"/>
                    </div>
                    <img className='w-100 h-100 absolute bot-0 object-contain' src={plane} alt="Plane"/>
                </form>
            </div>
        </div>
    )
}

export default FormMain;