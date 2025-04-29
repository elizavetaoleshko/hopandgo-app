// src/components/MainContent.jsx
import { useState } from 'react';
import HomePage from './HomePage';
import FormSection from './FormSection';
import ResultSection from './ResultSection';
import { generateTrips } from '../utils/tripGenerator';

function MainContent() {
  const [tripOptions, setTripOptions] = useState([]);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [bookingConfirmation, setBookingConfirmation] = useState(null);
  
  // Get current selected trip
  const currentTrip = tripOptions[selectedOptionIndex];
  
  const handleFormSubmit = (formData) => {
    // Generate multiple trip options
    const trips = generateTrips(formData, 4);
    setTripOptions(trips);
    setSelectedOptionIndex(0);
    setShowResults(true);
    setShowBooking(false);
    setBookingConfirmation(null);
  };
  
  const handleStartOver = () => {
    setShowResults(false);
    setShowBooking(false);
    setBookingConfirmation(null);
    const form = document.querySelector('#trip-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleOptionChange = (index) => {
    setSelectedOptionIndex(index);
  };
  
  const handleBookNow = () => {
    setShowBooking(true);
  };
  
  const handleBookingSubmit = (bookingData) => {
    // In a real app, this would send data to a server
    // Here we just create a confirmation object
    setBookingConfirmation({
      ...bookingData,
      trip: currentTrip,
      bookingDate: new Date().toLocaleDateString(),
    });
    setShowBooking(false);
    
    // Scroll to results
    window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' });
  };
  
  return (
    <>
      <HomePage />
      <FormSection onSubmit={handleFormSubmit} />
      <ResultSection
        tripOptions={tripOptions}
        currentTrip={currentTrip}
        selectedOptionIndex={selectedOptionIndex}
        onOptionChange={handleOptionChange}
        onStartOver={handleStartOver}
        onBookNow={handleBookNow}
        show={showResults}
        showBooking={showBooking}
        bookingConfirmation={bookingConfirmation}
        onBookingSubmit={handleBookingSubmit}
      />
    </>
  );
}

export default MainContent;