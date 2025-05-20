import React, { useState } from "react";
import "./Contact.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact-section">
      <div className="contact-top-row">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <div className="business-details">
            <h3>Fama Barber Shop and Beauty Salon</h3>
            <p><strong>Category:</strong> Barber shop</p>
            <p><strong>Rating:</strong> 4.6 stars (116+ reviews)</p>
            <p><strong>Status:</strong> <span className="open">Open</span> · Closes 7 pm</p>
            <p><strong>Location:</strong> 500 N Bell Ave #109, Denton, TX 76209</p>
            <p><strong>Phone:</strong> <a href="tel:+19406129127">+1 940-612-9127</a></p>
            <p>
              <strong>Directions:</strong>{" "}
              <a
                href="https://www.google.com/maps/place/500+N+Bell+Ave+%23109,+Denton,+TX+76209"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Maps
              </a>
            </p>
            <p className="service-comment">
              <strong>Service Comment:</strong> “Costly compared to other barbershops with better haircuts.”
            </p>
          </div>
        </div>
        <div className="map-container">
          <iframe
            title="Fama Barber Shop and Beauty Salon Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13351.23541781001!2d-97.1373152788518!3d33.2191070286647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864dca8e4261aec1%3A0xb5d271024d7890e2!2s500%20N%20Bell%20Ave%20%23109%2C%20Denton%2C%20TX%2076209%2C%20USA!5e0!3m2!1sen!2sin!4v1747732987909!5m2!1sen!2sin"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            placeholder="How can we help you?"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
          />
        </label>
        <button type="submit" className="contact-submit">
          Send Message
        </button>
        {submitted && (
          <p className="contact-success">
            Thank you for contacting us! We’ll get back to you soon.
          </p>
        )}
      </form>
    </section>
  );
}
