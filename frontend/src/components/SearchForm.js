// src/components/SearchForm.js
import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ origin, destination });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-700">Origin</label>
        <input
          type="text"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          className="w-full border p-2 rounded"
          placeholder="City or Airport"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Destination</label>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full border p-2 rounded"
          placeholder="City or Airport"
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Search Flights
      </button>
    </form>
  );
};

export default SearchForm;
