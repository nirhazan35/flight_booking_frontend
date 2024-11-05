// src/pages/BookingConfirmation.js
import React from 'react';

const BookingConfirmation = ({ booking }) => (
  <div className="container mx-auto py-8">
    <h1 className="text-2xl font-bold mb-4">Booking Confirmation</h1>
    <p>Thank you for your booking!</p>
    <p>Airline: {booking.airline}</p>
    <p>From: {booking.origin}</p>
    <p>To: {booking.destination}</p>
    <p>Departure: {booking.departureTime}</p>
    <p>Price: ${booking.price}</p>
  </div>
);

export default BookingConfirmation;
