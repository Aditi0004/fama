import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3 sticky-top">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand fw-bold fs-3 d-flex align-items-center" href="#home">
            <span className="brand-logo me-2"></span>
            FAMA
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#gallery">Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>

              {/* Phone Number */}
              <li className="nav-item d-flex align-items-center ms-lg-3 me-3 phone-number">
                <span>📞</span>
                <a href="tel:+19406129127" className="ms-2 text-white text-decoration-none">
                  +1 940-612-9127
                </a>
              </li>

              {/* Book Appointment Button */}
              <li className="nav-item ms-lg-0 mt-3 mt-lg-0">
                <a
                  href="#appointment"
                  className="btn btn-gold fw-bold px-4 py-2"
                  style={{ borderRadius: '8px' }}
                >
                  Book an Appointment
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
