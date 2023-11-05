import React, { useState } from "react";
import axios from 'axios';

// Make sure this path is correct for the plane image
const plane = require("../resources/plane.png");

const FormMain2 = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    flightNumber: '',
    concern: '',
    desk: '' // Assuming you have an input for desk id as well
  });

  // Update form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to your backend server using formData
      const response = await axios.post('http://localhost:8080/create-user', formData);
      console.log('User created:', response.data);
      // Handle response or state updates here
    } catch (error) {
      console.error('Error creating user:', error);
      // Handle errors here
    }
  };

  return (
    <div className="font-ubuntu flex w-screen mt-24 p-4 justify-center items-center text-white text-sm">
      <div className="w-1/3 bg-gray-500 rounded-lg p-10">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label><br />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-400 rounded w-full h-8"
          /><br />

          <label htmlFor="flightNumber">Flight #</label><br />
          <input
            type="text"
            id="flightNumber"
            name="flightNumber"
            value={formData.flightNumber}
            onChange={handleChange}
            className="bg-gray-400 rounded w-full h-8"
          /><br />

          <label htmlFor="concern">Concern Description</label><br />
          <input
            type="text"
            id="concern"
            name="concern"
            value={formData.concern}
            onChange={handleChange}
            className="bg-gray-400 rounded w-full h-8"
          /><br />

          <label htmlFor="desk">Desk ID</label><br />
          <input
            type="text"
            id="desk"
            name="desk"
            value={formData.desk}
            onChange={handleChange}
            className="bg-gray-400 rounded w-full h-8"
          /><br />

          <button type="submit" className="bg-blue-500 py-2 px-4 mt-4 text-white rounded">
            Submit
          </button>
        </form>
      </div>
      <img
        className='w-100 h-100 absolute bottom-10 object-contain'
        src={plane}
        alt="Plane"
      />
    </div>
  );
};

export default FormMain2;
