import React from "react";
import "./Gallery.css";

// Import your images from assets
import img1 from "../assets/gallery1.jpg";
import img2 from "../assets/gallery2.jpg";
import img3 from "../assets/gallery3.jpg";
import img4 from "../assets/gallery4.jpg";
import img5 from "../assets/gallery5.jpg";
import img6 from "../assets/gallery6.jpg";

const galleryItems = [
  {
    title: "Haircut",
    img: img1,
    desc: "Sharp, modern look tailored to your style."
  },
  {
    title: "Beard Trim",
    img: img2,
    desc: "Expert beard styling for a polished appearance."
  },
  {
    title: "Kids Haircut",
    img: img3,
    desc: "Gentle and stylish cuts for the little champs."
  },
  {
    title: "Hair Coloring",
    img: img4,
    desc: "Vibrant, bold, or natural – color your confidence."
  },
  {
    title: "Bridal & Groom Makeup",
    img: img5,
    desc: "Flawless makeup for your big day, crafted with care."
  },
  {
    title: "Happy Customers",
    img: img6,
    desc: "Smiles that reflect satisfaction and style!"
  }
];

export default function Gallery() {
  return (
    <section className="gallery-section">
      <h2 className="gallery-title">GALLERY</h2>
      <p className="gallery-subtitle">
        Take a look at our transformations and happy moments!
      </p>
      <div className="gallery-grid">
        {galleryItems.map((item, idx) => (
          <div className="gallery-card" key={idx}>
            <img src={item.img} alt={item.title} className="gallery-img" />
            <div className="gallery-card-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
