// components/Gallery.js

import React, { useState } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([1, 2, 3]);

  const addImage = () => {
    const newImageId = images.length + 1;
    setImages([...images, newImageId]);
  };

  return (
    <div className="gallery">
      <div className="gallery-header">
        <button className="gallery-nav">&lt;</button>
        <span>Gallery</span>
        <button className="gallery-nav">&gt;</button>
      </div>
      <div className="gallery-images">
        {images.map((image) => (
          <div className="image" key={image}>
            <img src={`https://via.placeholder.com/150?text=Image+${image}`} alt={`Image ${image}`} />
          </div>
        ))}
      </div>
      <button className="add-image" onClick={addImage}>+ Add Image</button>
    </div>
  );
};

export default Gallery;
