// src/components/FlightCard.js
import React from 'react';

const FlightCard = ({ flight, onSelect }) => (
  <div className="border p-4 rounded-lg shadow-md mb-4">
    <h2 className="font-bold text-xl mb-2">{flight.airline}</h2>
    <p>From: {flight.origin}</p>
    <p>To: {flight.destination}</p>
    <p>Departure: {flight.departureTime}</p>
    <p>Price: ${flight.price}</p>
    <button
      onClick={() => onSelect(flight)}
      className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
    >
      Book Now
    </button>
  </div>
);

export default FlightCard;
