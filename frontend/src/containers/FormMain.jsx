import React, { useState,useContext } from "react";
import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';

// The onUsernameSubmit prop needs to be passed from the parent component
const FormMain = () => {
    const navigate = useNavigate();

   const { setUsername } = useContext(UserContext);
  const [formData, setFormData] = useState({
    Name: '',
    FlightNumber: '',
    Desk: '',
    ConcernDescription: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submit action

    try {
      const response = await fetch('http://localhost:8080/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        console.log('Success:', jsonResponse);
        // Assuming the username is in the Name field of the form
     // Call the onUsernameSubmit function passed by the parent component
      
        setUsername(formData.Name);
        navigate('/queue');
    } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div className="font-ubuntu flex w-screen mt-24 p-4 justify-center items-center text-white text-sm">
      <div className="w-1/3  bg-gray-500 rounded-lg p-10">
        <form onSubmit={handleSubmit}>
          <label htmlFor="Name">Name</label><br />
          <input type="text" id="Name" name="Name" value={formData.Name} onChange={handleChange} className="bg-gray-400 rounded w-full h-8" />
          <div>
            <label htmlFor="FlightNumber">Flight #</label><br />
            <input type="text" id="FlightNumber" name="FlightNumber" value={formData.FlightNumber} onChange={handleChange} className="bg-gray-400 rounded w-full h-8" /><br />
            <label htmlFor="Desk">Desk ID</label><br />
            <input type="text" id="Desk" name="Desk" value={formData.Desk} onChange={handleChange} className="bg-gray-400 rounded w-full h-8" /><br />
            <label htmlFor="ConcernDescription">Concern Description</label><br />
            <input type="text" id="ConcernDescription" name="ConcernDescription" value={formData.ConcernDescription} onChange={handleChange} className="bg-gray-400 rounded w-full h-8" />
            <button type="submit" className="bg-american-blue-2 rounded py-3 px-5 mt-5">Join</button>
          </div>
        </form>
      </div>
      <img className='w-100 h-100 absolute bottom-10 object-contain' src={require("../resources/plane.png")} alt="Plane" />
    </div>
  );
};

export default FormMain;
