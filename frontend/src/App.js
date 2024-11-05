// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import BookingConfirmation from './pages/BookingConfirmation';

const App = () => {
  const [flights, setFlights] = useState([]);
  const [booking, setBooking] = useState(null);

  const handleSearch = (searchParams) => {
    // Simulate fetching flights
    const fetchedFlights = [
      { id: 1, airline: "Example Air", origin: searchParams.origin, destination: searchParams.destination, departureTime: "10:00 AM", price: 200 },
      { id: 2, airline: "Sample Flights", origin: searchParams.origin, destination: searchParams.destination, departureTime: "2:00 PM", price: 250 }
    ];
    setFlights(fetchedFlights);
  };

  const handleSelectFlight = (flight) => {
    setBooking(flight);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home onSearch={handleSearch} />} />
        <Route path="/search" element={<SearchResults flights={flights} onSelect={handleSelectFlight} />} />
        <Route path="/booking" element={<BookingConfirmation booking={booking} />} />
      </Routes>
    </Router>
  );
};

export default App;
