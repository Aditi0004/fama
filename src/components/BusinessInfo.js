import React from 'react';
import './BusinessInfo.css';

function BusinessInfo() {
  return (
    <section className="business-section">
      <div className="business-container">
        <span className="business-story-label">Our Story</span>
        <h2 className="business-title">
          Welcome to <span className="brand-highlight">Our Business</span>
        </h2>
        <div className="business-title-underline"></div>
        <p className="business-desc">
          We offer the best solutions tailored for your needs. With a commitment to quality and customer satisfaction, we ensure that you get the best service every time.
        </p>
      </div>
    </section>
  );
}

export default BusinessInfo;
