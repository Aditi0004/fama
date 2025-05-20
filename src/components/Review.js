import React from "react";
import "./Review.css";
//import happyCustomersImg from "../assets/happy-customers.jpg"; // update the path as needed

const reviews = [
  {
    name: "Emily R.",
    text: "Loved the haircut and the vibe. Super relaxing and professional service!",
    rating: 4.9,
  },
  {
    name: "Jason M.",
    text: "Great beard shaping and friendly staff. Highly recommended!",
    rating: 4.7,
  },
  {
    name: "Sophia L.",
    text: "Clean salon, cozy atmosphere, and excellent hair coloring service.",
    rating: 4.6,
  },
];

export default function Review() {
  return (
    <section className="reviews-section">
      <h2 className="reviews-title">Customer Reviews</h2>
      <div className="reviews-grid">
        {reviews.map((review, idx) => (
          <div className="review-card" key={idx}>
            <h4>{review.name}</h4>
            <p className="review-text">"{review.text}"</p>
            <div className="review-rating">
              <span className="star" role="img" aria-label="star">★</span>
              <span className="rating-score">{review.rating} / 5</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
