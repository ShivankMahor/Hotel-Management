import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';



import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  const navigate = useNavigate();

  const handleSearch = () => {
    const params = new URLSearchParams({
      location,
      checkIn,
      checkOut,
      guests
    }).toString();

    navigate(`/rooms?${params}`);
  };

  return (
    <div className="bg-[var(--color-surface)] rounded-2xl shadow-2xl p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Location */}
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
            Location
          </label>
          <div className="relative">
            <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--color-muted)] h-4 w-4" />
            <input
              type="text"
              placeholder="Where do you want to stay?"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent bg-[var(--color-background)] text-[var(--color-text)] placeholder-[var(--color-muted)]"
            />
          </div>
        </div>

        {/* Check-in Date */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
            Check-in
          </label>
          <div className="relative">
            <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--color-muted)] h-4 w-4 z-10" />
            <DatePicker
              selected={checkIn}
              onChange={(date) => setCheckIn(date)}
              placeholderText="Select date"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent bg-[var(--color-background)] text-[var(--color-text)] placeholder-[var(--color-muted)]"
              minDate={new Date()}
            />
          </div>
        </div>

        {/* Check-out Date */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
            Check-out
          </label>
          <div className="relative">
            <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--color-muted)] h-4 w-4 z-10" />
            <DatePicker
              selected={checkOut}
              onChange={(date) => setCheckOut(date)}
              placeholderText="Select date"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent bg-[var(--color-background)] text-[var(--color-text)] placeholder-[var(--color-muted)]"
              minDate={checkIn || new Date()}
            />
          </div>
        </div>

        {/* Guests */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
            Guests
          </label>
          <div className="relative">
            <FaUsers className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--color-muted)] h-4 w-4" />
            <select
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent bg-[var(--color-background)] text-[var(--color-text)] appearance-none cursor-pointer"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num} Guest{num > 1 ? 's' : ''}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Search Button */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={handleSearch}
          className="bg-[var(--color-primary)] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center space-x-2 font-medium"
        >
          <FaSearch className="h-4 w-4" />
          <span>Search Hotels</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;