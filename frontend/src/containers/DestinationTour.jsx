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
    const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${city} buildings&format=json&nojsoncallback=1`;

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
    <div>
      <h2>City Tourist Images</h2>
      <input
        type="text"
        placeholder="Enter a city name"
        value={city}
        onChange={handleCityChange}
      />
      <button onClick={fetchTouristImages}>Search</button>
      <div className="image-grid">
        {images.map((imageUrl, index) => (
          <div className="image-container" key={index}>
            <img src={imageUrl} alt={`Tourist Place ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DestinationTour;
