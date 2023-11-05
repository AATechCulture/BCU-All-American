import React, { useState } from 'react';
import axios from 'axios';

function DestinationTour() {
  const [city, setCity] = useState('');
  const [images, setImages] = useState([]);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const fetchTouristImages = () => {
    // Replace 'YOUR_FLICKR_API_KEY' with your actual Flickr API key
    const apiKey = 'ea2bcfb8bcd0cb9265d755f2f4424028';
    const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${city} Tourist Places&format=json&nojsoncallback=1`;

    axios.get(apiUrl)
      .then((response) => {
        const photoArray = response.data.photos.photo;
        const imageUrls = photoArray.map((photo) => {
          return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
        });
        setImages(imageUrls);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl text-white mb-4">City Tourist Images</h2>
      <input
        type="text"
        placeholder="Enter a city name"
        value={city}
        onChange={handleCityChange}
        className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-white-300 mb-4"
      />
      <div className="mb-4">
        <button onClick={fetchTouristImages} className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300">
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((imageUrl, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow">
            <img src={imageUrl} alt={`Tourist Place ${index + 1}`} className="w-full h-48 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
  

}

export default DestinationTour;
