import React, { useState } from "react";
import "../styles/global.css";

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = Array(39)
    .fill(null)
    .map((_, i) => `/photos/p-${i}.jpg`);

  return (
    <div className="photo-gallery">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Gallery Image ${i + 1}`}
          onClick={() => setSelectedImage(src)}
          className={selectedImage === src ? "selected" : ""}
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default PhotoGallery;
