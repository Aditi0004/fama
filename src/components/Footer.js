import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-col">
          <h4>FAMA BEAUTY SALON</h4>
          <p>
            Delivering elegance, comfort, and premium grooming for every customer. Your look, our passion.
          </p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/book">Book Appointment</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <p>+1 940-612-9127</p>
          <p>500 N Bell Ave #109, Denton, TX 76209</p>
          <div className="footer-socials">
            <a href="https://facebook.com" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="https://instagram.com" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="https://twitter.com" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="https://youtube.com" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        <p>
          © 2025 <strong>FAMA Barber Shop &amp; Beauty Salon</strong>. All rights reserved.
        </p>
        <p className="footer-made-with">
          Made with <span style={{color: "#e25555"}}>❤️</span> using React
        </p>
      </div>
    </footer>
  );
}
