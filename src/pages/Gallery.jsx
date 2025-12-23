import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      title: 'Mountain View',
      description: 'Panoramic view from the homestay'
    },
    {
      id: 2,
      title: 'Room Interior',
      description: 'Comfortable and cozy rooms'
    },
    {
      id: 3,
      title: 'Sunrise',
      description: 'Beautiful morning sunrise'
    },
    {
      id: 4,
      title: 'Bonfire Night',
      description: 'Cozy bonfire evenings'
    },
    {
      id: 5,
      title: 'Tea Gardens',
      description: 'Surrounding tea plantations'
    },
    {
      id: 6,
      title: 'Nature Walk',
      description: 'Walking trails nearby'
    },
    {
      id: 7,
      title: 'Common Area',
      description: 'Relaxing common spaces'
    },
    {
      id: 8,
      title: 'Valley View',
      description: 'Open valley views'
    }
  ];

  return (
    <div className="gallery-page">
      <section className="gallery-hero section">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">Gallery</h1>
            <p className="section-description">
              Explore the beauty of Roshni Homestay through our gallery. 
              See the stunning views, comfortable accommodations, and memorable 
              experiences that await you.
            </p>
          </div>
          
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <div key={image.id} className="gallery-item">
                <div className="gallery-image">
                  <div className="image-overlay">
                    <div className="image-content">
                      <h3 className="image-title">{image.title}</h3>
                      <p className="image-description">{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="gallery-note">
            <p>
              <strong>Note:</strong> Actual photographs will be added here. 
              These are representative images showing the type of views and experiences 
              you can expect at Roshni Homestay.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;