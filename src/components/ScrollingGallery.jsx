import React from "react";
import "../css/ScrollingGallery.css"

const images = [
  // Sample images (replace with your own)
  "https://images.unsplash.com/photo-1503264116251-35a269479413",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
];

const ScrollingGallery = () => {
  return (
    <div className="gallery-section">
      {[0, 1, 2].map((rowIndex) => (
        <div
          key={rowIndex}
          className={`scroll-row ${rowIndex % 2 === 0 ? "scroll-left" : "scroll-right"}`}
        >
          <div className="image-strip">
            {images.map((src, idx) => (
              <div className="image-container" key={idx}>
                <img src={src} alt={`Gallery ${idx}`} />
              </div>
            ))}
            {/* Repeat images for infinite scroll illusion */}
            {images.map((src, idx) => (
              <div className="image-container" key={`dup-${idx}`}>
                <img src={src} alt={`Gallery ${idx}`} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollingGallery;
