import React from "react";
import "./Hero.css";
import teamImg from "../assets/team.jpg"; // Replace with your actual image path

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-subheading">Premium Barber Services in Denton</span>
          <h1>
            Classic Cuts, Modern <br />
            Style <br />
            <span className="hero-highlight">Premium Barber Shop</span>
          </h1>
          <p className="hero-desc">
            At PMC Barbershop, we combine traditional barbering techniques with modern styling to give you the perfect look.
            Our experienced barbers deliver precision cuts, beard grooming, and relaxing hot towel shaves in a classic barbershop atmosphere.
          </p>
          <div className="hero-location">
            <span className="hero-location-icon">📍</span> Denton, TX
          </div>
          <div className="hero-actions">
            <button className="hero-services-btn">Our Services</button>
            <button className="hero-book-btn">Book Now</button>
          </div>
        </div>
        <div className="hero-image-wrap">
          <img src={teamImg} alt="PMC Barbershop Team" className="hero-img" />
        </div>
      </div>
    </section>
  );
}
