// src/pages/Home.js
import React from 'react';
import SearchForm from '../components/SearchForm';

const Home = ({ onSearch }) => (
  <div className="container mx-auto py-8">
    <h1 className="text-2xl font-bold mb-4">Flight Booking</h1>
    <SearchForm onSearch={onSearch} />
  </div>
);

export default Home;
