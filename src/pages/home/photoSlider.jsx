import React,{useEffect, useState} from "react";

function PhotoSlider() {

    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  
    // Define an array of photo URLs
    const photos = [
      "./src/light (1).png",
      "./src/World Music.png",
      "./src/light (1).png",
      "./src/World Music.png"
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentPhotoIndex(prevIndex => (prevIndex + 1) % photos.length);
      }, 5000);
  
      return () => clearInterval(interval);
    }, []);

    return (
<div className="photo-slider">
      {photos.map((photo, index) => (
        <div
          key={index}
          className={`photo ${index === currentPhotoIndex ? "active" : ""}`}
        >
          <img src={photo} alt={`Photo ${index + 1}`} />
        </div>
      ))}
    </div>
    );
}

export default PhotoSlider;