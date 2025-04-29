// src/components/ResultSection.jsx
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import BookingForm from './BookingForm';

function ResultSection({
  tripOptions,
  currentTrip,
  selectedOptionIndex,
  onOptionChange,
  onStartOver,
  onBookNow,
  show,
  showBooking,
  bookingConfirmation,
  onBookingSubmit
}) {
  useEffect(() => {
    if (show) {
      window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' });
    }
  }, [show]);

  if (!show || !currentTrip) return null;

  // Render booking confirmation if available
  if (bookingConfirmation) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-sky-50 px-4 py-16">
        <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg animate-fade-in">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Booking Confirmed!</h2>
            <p className="text-gray-600">Booking Reference: <span className="font-semibold">{currentTrip.bookingReference}</span></p>
            <p className="text-gray-600">Booked on {bookingConfirmation.bookingDate}</p>
          </div>

          <div className="border-t border-b py-4 my-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Reservation Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-gray-600 font-medium">Name</p>
                <p className="text-gray-800">{bookingConfirmation.name}</p>
              </div>
              <div>
                <p className="text-gray-600 font-medium">Email</p>
                <p className="text-gray-800">{bookingConfirmation.email}</p>
              </div>
              <div>
                <p className="text-gray-600 font-medium">Phone</p>
                <p className="text-gray-800">{bookingConfirmation.phone}</p>
              </div>
              <div>
                <p className="text-gray-600 font-medium">Travelers</p>
                <p className="text-gray-800">{bookingConfirmation.travelers}</p>
              </div>
            </div>
          </div>

          <div className="border-b py-4 mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Trip Details</h3>
            
            <div className="mb-4 p-4 bg-sky-50 rounded-lg">
              <div>
                <h4 className="font-semibold text-sky-600">{currentTrip.departure} → {currentTrip.destination}</h4>
                <p className="text-gray-600 text-sm">{currentTrip.description}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 font-medium">Transport</p>
                <p className="text-gray-800">{currentTrip.transport} - {currentTrip.transportPrice}€</p>
                {currentTrip.transportDuration && (
                  <p className="text-gray-500 text-sm">Duration: {currentTrip.transportDuration}</p>
                )}
              </div>
              <div>
                <p className="text-gray-600 font-medium">Accommodation</p>
                <p className="text-gray-800">{currentTrip.hotel} - {currentTrip.hotelPrice}€</p>
              </div>
              <div>
                <p className="text-gray-600 font-medium">Payment Method</p>
                <p className="text-gray-800">{bookingConfirmation.paymentMethod}</p>
              </div>
              <div>
                <p className="text-gray-600 font-medium">Total</p>
                <p className="text-gray-800 font-semibold">{currentTrip.totalBudget}€</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <Button onClick={onStartOver}>Plan Another Trip</Button>
          </div>
        </div>
      </div>
    );
  }

  // Render booking form if booking is active
  if (showBooking) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-sky-50 px-4 py-16">
        <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Book Your Trip
          </h2>
          
          <div className="mb-6 p-4 bg-sky-50 rounded-lg">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-sky-600 mb-2">
                {currentTrip.departure} → {currentTrip.destination}
              </h3>
              <p className="text-gray-600 text-sm">{currentTrip.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-gray-600">Transport:</span> {currentTrip.transport} ({currentTrip.transportPrice}€)
              </div>
              <div>
                <span className="text-gray-600">Duration:</span> {currentTrip.transportDuration || 'Not specified'}
              </div>
              <div>
                <span className="text-gray-600">Hotel:</span> {currentTrip.hotel} ({currentTrip.hotelPrice}€)
              </div>
              <div>
                <span className="text-gray-600">Weather:</span> {currentTrip.weather || 'Not specified'}
              </div>
              <div className="col-span-2 font-semibold">
                Total: {currentTrip.totalBudget}€
              </div>
            </div>
          </div>
          
          <BookingForm onSubmit={onBookingSubmit} onCancel={() => onStartOver()} />
        </div>
      </div>
    );
  }

  // Render trip options
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-sky-50 px-4 py-16">
      <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg animate-fade-in">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Your Perfect Weekend Getaway Options
        </h2>

        {/* Trip options navigation */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center p-1 bg-gray-100 rounded-lg">
            {tripOptions.map((_, index) => (
              <button
                key={index}
                onClick={() => onOptionChange(index)}
                className={`px-4 py-2 text-sm rounded-md ${
                  selectedOptionIndex === index 
                    ? 'bg-sky-600 text-white font-medium' 
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                Option {index + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="border-b pb-4">
            <div className="p-4 bg-sky-50 rounded-lg mb-4">
              <h3 className="text-xl font-semibold text-sky-600 mb-2">
                {currentTrip.departure} → {currentTrip.destination}
              </h3>
              <p className="text-gray-600 mb-2">{currentTrip.description}</p>
              <div className="bg-yellow-50 border-l-4 border-yellow-200 p-2 mt-2">
                <p className="text-gray-600 text-sm">
                  <span className="font-medium">Expected Weather:</span> {currentTrip.weather}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-white border rounded-md shadow-sm">
                <h4 className="font-semibold text-gray-800 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-sky-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H11a1 1 0 001-1v-6a1 1 0 00-.293-.707l-2-2A1 1 0 009 6H4a1 1 0 00-1 1v7a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H11a1 1 0 001-1V7a1 1 0 00-1-1H8.5l-1-1H3z" />
                  </svg>
                  Transport
                </h4>
                <p className="text-gray-600 mt-1">
                  <span className="font-medium">{currentTrip.transport}</span> - {currentTrip.transportPrice}€
                </p>
                {currentTrip.transportDuration && (
                  <p className="text-gray-500 text-sm mt-1">Duration: {currentTrip.transportDuration}</p>
                )}
              </div>

              <div className="p-3 bg-white border rounded-md shadow-sm">
                <h4 className="font-semibold text-gray-800 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-sky-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  Accommodation
                </h4>
                <p className="text-gray-600 mt-1">
                  <span className="font-medium">{currentTrip.hotel}</span> - {currentTrip.hotelPrice}€
                </p>
              </div>
            </div>

            <div className="p-3 bg-white border rounded-md shadow-sm">
              <h4 className="font-semibold text-gray-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-sky-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Activities
              </h4>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                {currentTrip.activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>

            <div className="border-t pt-4 mt-6">
              <h4 className="text-xl font-bold text-gray-800 flex justify-between items-center">
                <span>Total Estimated Budget:</span> <span className="text-sky-600">{currentTrip.totalBudget}€</span>
              </h4>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <Button onClick={onStartOver} className="bg-gray-600 hover:bg-gray-700">
            Start Over
          </Button>
          <Button onClick={onBookNow} className="bg-sky-600 hover:bg-sky-700">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}

ResultSection.propTypes = {
  tripOptions: PropTypes.array,
  currentTrip: PropTypes.object,
  selectedOptionIndex: PropTypes.number,
  onOptionChange: PropTypes.func,
  onStartOver: PropTypes.func.isRequired,
  onBookNow: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  showBooking: PropTypes.bool,
  bookingConfirmation: PropTypes.object,
  onBookingSubmit: PropTypes.func
};

export default ResultSection;