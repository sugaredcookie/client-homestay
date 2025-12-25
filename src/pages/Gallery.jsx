import React from 'react';
import './Gallery.css';

// Import all images manually
import img1 from '../assets/1 (1).jpeg';
import img2 from '../assets/1 (2).jpeg';
import img3 from '../assets/1 (3).jpeg';
import img4 from '../assets/1 (4).jpeg';
import img5 from '../assets/1 (5).jpeg';
import img6 from '../assets/1 (6).jpeg';
import img7 from '../assets/1 (7).jpeg';
import img8 from '../assets/1 (8).jpeg';
import img9 from '../assets/1 (9).jpeg';
import img10 from '../assets/1 (10).jpeg';
import img11 from '../assets/1 (11).jpeg';
import img12 from '../assets/1 (12).jpeg';
import img13 from '../assets/1 (13).jpeg';
import img14 from '../assets/1 (14).jpeg';
import img15 from '../assets/1 (15).jpeg';
import img16 from '../assets/1 (16).jpeg';
import img17 from '../assets/1 (17).jpeg';

// Import the video
import video1 from '../assets/video1.mp4';

const Gallery = () => {
  // Array of all imported images
  const images = [
    { id: 1, src: img1, alt: 'Roshni Homestay view 1' },
    { id: 2, src: img2, alt: 'Roshni Homestay view 2' },
    { id: 3, src: img3, alt: 'Roshni Homestay view 3' },
    { id: 4, src: img4, alt: 'Roshni Homestay view 4' },
    { id: 5, src: img5, alt: 'Roshni Homestay view 5' },
    { id: 6, src: img6, alt: 'Roshni Homestay view 6' },
    { id: 7, src: img7, alt: 'Roshni Homestay view 7' },
    { id: 8, src: img8, alt: 'Roshni Homestay view 8' },
    { id: 9, src: img9, alt: 'Roshni Homestay view 9' },
    { id: 10, src: img10, alt: 'Roshni Homestay view 10' },
    { id: 11, src: img11, alt: 'Roshni Homestay view 11' },
    { id: 12, src: img12, alt: 'Roshni Homestay view 12' },
    { id: 13, src: img13, alt: 'Roshni Homestay view 13' },
    { id: 14, src: img14, alt: 'Roshni Homestay view 14' },
    { id: 15, src: img15, alt: 'Roshni Homestay view 15' },
    { id: 16, src: img16, alt: 'Roshni Homestay view 16' },
    { id: 17, src: img17, alt: 'Roshni Homestay view 17' },
  ];

  return (
    <div className="gallery-page">
      <section className="gallery-hero section">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">Simple Moments at Our Home</h1>
            <p className="section-description">
              A glimpse of the peace, views, and simple joys that await you at Roshni Homestay
            </p>
          </div>
          
          <div className="gallery-grid">
            {/* Render all images */}
            {images.map((image) => (
              <div key={image.id} className="gallery-item">
                <div className="gallery-image">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
            
            {/* Render the video */}
            <div className="gallery-item gallery-video-item">
              <div className="gallery-video">
                <video 
                  controls
                  preload="metadata"
                  poster={img1} // Using first image as poster, or you can use a specific one
                >
                  <source 
                    src={video1} 
                    type="video/mp4" 
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
          
          <div className="gallery-note">
            <p>
              <strong>Real moments:</strong> These photos and video show the simple, peaceful experience 
              of staying with us in the hills.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;