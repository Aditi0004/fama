import React from "react";
import "./AboutUs.css";
import teamImg from "../assets/salon.jpg"; // Use your actual image path

export default function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-header">
        <span className="about-story-label">About Us</span>
        <h2 className="about-title">
          About <span className="brand-highlight">FAMA Barber and Beauty Salon</span>
        </h2>
        <p className="about-desc">
          Established in 2018, FAMA Barber and Beauty Salon has been providing premium grooming and beauty services. Our mission is to deliver exceptional haircuts, styling, and beauty treatments in a welcoming, classic salon environment.
        </p>
      </div>
      <div className="about-content-row">
        <div className="about-image-wrap">
          <img src={teamImg} alt="FAMA Salon Exterior" className="salon-img" />
          <div className="about-years-badge">5+ years</div>
        </div>
        <div className="about-content-text">
          <p>
            We take pride in our attention to detail and personalized service, ensuring every client leaves looking and feeling their best. Our skilled team combines traditional techniques with modern trends to create styles tailored to each individual’s personality and lifestyle.
          </p>
          <blockquote className="about-quote">
            “More than just grooming — it’s about how you feel when you walk out.”
          </blockquote>
        </div>
      </div>
    </section>
  );
}
