import React from 'react';
import './Services.css'; // Make sure this file exists and is styled as in your screenshot

const services = [
  {
    title: "Men's Haircut",
    image: "/images/mens-haircut.jpg",
    description: "Modern, classic, or custom styles. Look sharp, feel fresh.",
    price: "$30 - $40"
  },
  {
    title: "Beard Trim / Shape",
    image: "/images/beard-trim.jpg",
    description: "Sculpted precision to match your style and face.",
    price: "$20 - $25"
  },
  {
    title: "Hair Coloring",
    image: "/images/hair-coloring.jpg",
    description: "Trendy highlights, full coverage, or root touch-ups.",
    price: "$50 - $90"
  },
  {
    title: "Kids Haircut",
    image: "/images/kids-haircut.jpg",
    description: "Quick, comfy, and fun styles for children of all ages.",
    price: "$20 - $30"
  },
  {
    title: "Facial & Skin Care",
    image: "/images/facial.jpg",
    description: "Glowing skin with our premium facial treatments.",
    price: "$40 - $70"
  },
  {
    title: "Manicure & Pedicure",
    image: "/images/manicure.jpg",
    description: "Pamper your hands and feet for a fresh look.",
    price: "$25 - $45"
  }
];

function Services() {
  return (
    <section className="services-section">
      <div className="services-header">
        <h2>OUR SERVICES</h2>
        <p>Premium grooming for every style and age.</p>
      </div>
      <div className="services-cards">
        {services.map((service, idx) => (
          <div className="service-card" key={idx}>
            <img src={service.image} alt={service.title} className="service-img" />
            <div className="service-info">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-price">{service.price}</div>
              <button className="book-btn">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
