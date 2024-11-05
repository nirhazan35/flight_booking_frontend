// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import BookingConfirmation from './pages/BookingConfirmation';

const App = () => {
  const [flights, setFlights] = useState([]);
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    // Initialize with some default flights
    const defaultFlights = [
      { id: 1, airline: "Example Air", origin: "New York", destination: "Los Angeles", departureTime: "10:00 AM", price: 200 },
      { id: 2, airline: "Sample Flights", origin: "New York", destination: "Miami", departureTime: "2:00 PM", price: 250 },
      { id: 3, airline: "SkyJet", origin: "San Francisco", destination: "Seattle", departureTime: "3:30 PM", price: 150 },
      { id: 4, airline: "Airway", origin: "Chicago", destination: "Las Vegas", departureTime: "5:00 PM", price: 300 },
    ];

    setFlights(defaultFlights);
  }, []);

  const handleSearch = (searchParams) => {
    // Simulate fetching flights based on search params
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
