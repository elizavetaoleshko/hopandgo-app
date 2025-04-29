// src/components/FormSection.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function FormSection({ onSubmit }) {
  const departureCities = [
    'Paris', 'Lyon', 'Marseille', 'Bordeaux', 'Lille',
    'Strasbourg', 'Toulouse', 'Nice', 'Nantes', 'Rennes'
  ];

  const [formData, setFormData] = useState({
    departure: 'Paris',
    budget: '',
    travelStyle: 'Culture',
    transport: 'Any',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div id="trip-form" className="min-h-screen flex items-center justify-center bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Plan Your Trip
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Fill in your preferences and let us do the magic
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="departure" className="block text-sm font-medium text-gray-700">
                Departure City
              </label>
              <select
                id="departure"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                value={formData.departure}
                onChange={(e) =>
                  setFormData({ ...formData, departure: e.target.value })
                }
              >
                {departureCities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
                Budget (€)
              </label>
              <input
                id="budget"
                type="number"
                required
                min="100"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                value={formData.budget}
                onChange={(e) =>
                  setFormData({ ...formData, budget: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="travelStyle" className="block text-sm font-medium text-gray-700">
                Travel Style
              </label>
              <select
                id="travelStyle"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                value={formData.travelStyle}
                onChange={(e) =>
                  setFormData({ ...formData, travelStyle: e.target.value })
                }
              >
                <option value="Culture">Culture</option>
                <option value="Nature">Nature</option>
                <option value="Adventure">Adventure</option>
                <option value="Urban">Urban</option>
              </select>
            </div>
            <div>
              <label htmlFor="transport" className="block text-sm font-medium text-gray-700">
                Preferred Transport
              </label>
              <select
                id="transport"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                value={formData.transport}
                onChange={(e) =>
                  setFormData({ ...formData, transport: e.target.value })
                }
              >
                <option value="Any">Any</option>
                <option value="Train">Train</option>
                <option value="Flight">Flight</option>
                <option value="Bus">Bus</option>
              </select>
            </div>
          </div>

          <div>
            <Button type="submit" primary className="w-full">
              Generate Trip
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

FormSection.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormSection;