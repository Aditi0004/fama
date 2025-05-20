import React from 'react';
import Header from './components/Header';
import BusinessInfo from './components/BusinessInfo';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import AppointmentBooking from './components/AppointmentBooking';
import AboutUs from './components/AboutUs';
import Review from './components/Review';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="business">
        <BusinessInfo />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="appointment">
        <AppointmentBooking />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="review">
        <Review />
      </section>
      <Footer />
    </>
  );
}

export default App;
