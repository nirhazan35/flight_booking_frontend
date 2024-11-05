// src/pages/SearchResults.js
import React from 'react';
import FlightCard from '../components/FlightCard';

const SearchResults = ({ flights, onSelect }) => (
  <div className="container mx-auto py-8">
    <h1 className="text-2xl font-bold mb-4">Available Flights</h1>
    {flights.length > 0 ? (
      flights.map((flight) => (
        <FlightCard key={flight.id} flight={flight} onSelect={onSelect} />
      ))
    ) : (
      <p>No flights found.</p>
    )}
  </div>
);

export default SearchResults;
