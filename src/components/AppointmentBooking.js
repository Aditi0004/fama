import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./AppointmentBooking.css";

//import bgImage from "../assets/barber-bg.jpg";
import barber1 from "../assets/barber1.jpg";
import barber2 from "../assets/barber2.jpg";
import barber3 from "../assets/barber3.jpg";
import barber4 from "../assets/barber4.jpg";

const locations = [
  { id: 1, address: "2972 Westheimer Rd. Santa Ana, Illinois 85486" },
  { id: 2, address: "435 South Garfield Ave. Manitowoc, WI 54220" },
  { id: 3, address: "968 Big Rock Cove Court Kennesaw, GA 30144" },
];

const servicesList = [
  "Men's Haircut", "Beard Trim / Shape", "Hair Coloring", "Kids Haircut",
  "Facial & Skin Care", "Manicure & Pedicure"
];

const barbers = [
  { 
    id: 1, 
    name: "Dennis Daniels", 
    image: barber1,
    details: "10+ years experience. Expert in classic and modern cuts.",
    expertise: "Classic Cuts, Beard Sculpting, Fades"
  },
  { 
    id: 2, 
    name: "Johan Sanford", 
    image: barber2,
    details: "Creative stylist with a passion for color and trends.",
    expertise: "Hair Coloring, Trend Styles, Kids Cuts"
  },
  { 
    id: 3, 
    name: "Ron Edwards", 
    image: barber3,
    details: "Precision barber with attention to detail.",
    expertise: "Beard Trims, Face Shaves, Flat Tops"
  },
  { 
    id: 4, 
    name: "Floyd Miles", 
    image: barber4,
    details: "Friendly and patient, great with all ages.",
    expertise: "Kids Cuts, Manicures, Pedicures"
  }
];

// Email regex for basic validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function AppointmentBooking() {
  const [selectedLocation, setSelectedLocation] = useState(1);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBarber, setSelectedBarber] = useState(1);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [hoveredBarber, setHoveredBarber] = useState(null);
  const [details, setDetails] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [confirmation, setConfirmation] = useState("");
  const [error, setError] = useState("");

  // Combine date and time into a single Date object
  function getAppointmentDateTime() {
    if (!date || !time) return null;
    const appointment = new Date(date);
    appointment.setHours(time.getHours(), time.getMinutes(), 0, 0);
    return appointment;
  }

  const handleServiceChange = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleInputChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!details.name.trim() || !details.phone.trim() || !details.email.trim()) {
      setError("Please fill in all your details.");
      return false;
    }
    if (!emailRegex.test(details.email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (!date || !time) {
      setError("Please select both date and time.");
      return false;
    }
    const appointmentDateTime = getAppointmentDateTime();
    if (!appointmentDateTime || appointmentDateTime < new Date()) {
      setError("Please select a future date and time.");
      return false;
    }
    if (selectedServices.length === 0) {
      setError("Please select at least one service.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const appointmentDateTime = getAppointmentDateTime();
    const formattedDate = appointmentDateTime
      ? appointmentDateTime.toLocaleString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })
      : "";

    setConfirmation(
      `Thank you, ${details.name}! Your appointment for "${selectedServices.join(
        ", "
      )}" is booked on ${formattedDate}.`
    );
    // Optionally, reset the form here
    // setDetails({ name: "", phone: "", email: "" });
    // setSelectedServices([]);
    // setDate(null);
    // setTime(null);
  };

  return (
    <section
      className="booking-section"
      style={{
        background: `url(${bgImage}) center center/cover no-repeat, #232324`
      }}
    >
      <div className="booking-overlay">
        <div className="booking-container">
          <h1 className="booking-title">ONLINE APPOINTMENT BOOKING</h1>
          <form className="booking-form" onSubmit={handleSubmit} autoComplete="off">
            {/* LOCATIONS */}
            <div className="booking-group">
              <label className="booking-label">OUR LOCATIONS</label>
              <div className="location-options">
                {locations.map((loc) => (
                  <div
                    key={loc.id}
                    className={`location-card ${selectedLocation === loc.id ? "selected" : ""}`}
                    onClick={() => setSelectedLocation(loc.id)}
                  >
                    <span role="img" aria-label="location">📍</span>
                    <span>{loc.address}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* SERVICES */}
            <div className="booking-group">
              <label className="booking-label">PREFERRED SERVICE</label>
              <div className="service-options">
                {servicesList.map((service) => (
                  <label key={service} className="service-checkbox">
                    <input
                      type="checkbox"
                      checked={selectedServices.includes(service)}
                      onChange={() => handleServiceChange(service)}
                    />
                    <span>{service}</span>
                  </label>
                ))}
              </div>
            </div>
            {/* DATE & TIME */}
            <div className="booking-group">
              <label className="booking-label">SELECT APPOINTMENT DATE & TIME</label>
              <div className="datetime-row">
                <DatePicker
                  selected={date}
                  onChange={setDate}
                  dateFormat="dd-MM-yyyy"
                  placeholderText="dd-mm-yyyy"
                  className="date-input"
                  calendarClassName="calendar-popup"
                  popperPlacement="bottom-start"
                  minDate={new Date()}
                  showPopperArrow={false}
                />
                <DatePicker
                  selected={time}
                  onChange={setTime}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="HH:mm"
                  placeholderText="--:--"
                  className="time-input"
                  popperPlacement="bottom-end"
                  showPopperArrow={false}
                />
              </div>
            </div>
            {/* BARBER */}
            <div className="booking-group">
              <label className="booking-label">PREFERRED BARBER</label>
              <div className="barber-options">
                {barbers.map((barber) => (
                  <div
                    key={barber.id}
                    className={`barber-card ${selectedBarber === barber.id ? "selected" : ""} ${hoveredBarber === barber.id ? "hovered" : ""}`}
                    onClick={() => setSelectedBarber(barber.id)}
                    onMouseEnter={() => setHoveredBarber(barber.id)}
                    onMouseLeave={() => setHoveredBarber(null)}
                    tabIndex={0}
                    onFocus={() => setHoveredBarber(barber.id)}
                    onBlur={() => setHoveredBarber(null)}
                  >
                    <img src={barber.image} alt={barber.name} />
                    <span className="barber-name">{barber.name}</span>
                    {hoveredBarber === barber.id && (
                      <div className="barber-popup">
                        <div className="barber-details">{barber.details}</div>
                        <div className="barber-expertise">{barber.expertise}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* DETAILS */}
            <div className="booking-group">
              <label className="booking-label">YOUR DETAILS</label>
              <div className="details-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name *"
                  value={details.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number *"
                  value={details.phone}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={details.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            {error && <div style={{ color: "#ffb8b8", marginBottom: "10px", textAlign: "center" }}>{error}</div>}
            <button type="submit" className="booking-submit">
              Book Appointment
            </button>
          </form>
          {confirmation && (
            <div
              style={{
                marginTop: "28px",
                background: "#232324",
                borderRadius: "10px",
                color: "#ffe0a3",
                textAlign: "center",
                fontWeight: "600",
                fontSize: "1.1rem",
                padding: "22px 18px 18px 18px",
                boxShadow: "0 2px 16px rgba(0,0,0,0.18)"
              }}
            >
              {confirmation}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default AppointmentBooking;
