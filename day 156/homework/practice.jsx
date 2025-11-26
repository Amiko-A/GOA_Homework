import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <div className="card sedans">
        <h2>SEDANS</h2>
        <p>
          Choose a sedan for its affordability and excellent fuel economy.
          Ideal for cruising in the city or on your next road trip.
        </p>
        <button>Learn More</button>
      </div>

      <div className="card suvs">
        <h2>SUVS</h2>
        <p>
          Take an SUV for its spacious interior, power, and versatility.
          Perfect for your next family vacation and off-road adventures.
        </p>
        <button>Learn More</button>
      </div>

      <div className="card luxury">
        <h2>LUXURY</h2>
        <p>
          Cruise in the best car brands without the bloated prices.
          Enjoy the enhanced comfort of a luxury rental and arrive in style.
        </p>
        <button>Learn More</button>
      </div>
    </div>
  );
}
