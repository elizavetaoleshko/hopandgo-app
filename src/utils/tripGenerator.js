// src/utils/tripGenerator.js
const destinations = [
  // France
  { city: 'Fontainebleau', country: 'France', description: 'Historic palace and magnificent forest' },
  { city: 'Provins', country: 'France', description: 'Medieval UNESCO World Heritage city' },
  { city: 'Chantilly', country: 'France', description: 'Château and renowned art museum' },
  { city: 'Senlis', country: 'France', description: 'Charming historic town' },
  { city: 'Giverny', country: 'France', description: "Home to Monet's famous gardens" },
  { city: 'Vaux-le-Vicomte', country: 'France', description: 'Magnificent château and gardens' },
  { city: 'Auvers-sur-Oise', country: 'France', description: "Van Gogh's final residence" },
  { city: 'Lyon', country: 'France', description: 'Culinary capital with Renaissance architecture' },
  { city: 'Marseille', country: 'France', description: 'Vibrant port city with Mediterranean charm' },
  { city: 'Strasbourg', country: 'France', description: 'Picturesque city with Germanic influence' },
  { city: 'Bordeaux', country: 'France', description: 'World-famous wine region with elegant architecture' },
  { city: 'Nice', country: 'France', description: 'Glamorous Riviera city with stunning coastline' },
  { city: 'Mont Saint-Michel', country: 'France', description: 'Medieval island monastery and village' },
  { city: 'Annecy', country: 'France', description: 'Alpine town with canals and crystal-clear lake' },
  { city: 'Carcassonne', country: 'France', description: 'Fortified medieval citadel and picturesque old town' },
  { city: 'Colmar', country: 'France', description: 'Colorful Alsatian town with half-timbered buildings' },
  { city: 'Chamonix', country: 'France', description: 'Alpine resort near Mont Blanc' },
  
  // Europe
  { city: 'London', country: 'United Kingdom', description: 'Historic metropolis with royal heritage' },
  { city: 'Barcelona', country: 'Spain', description: 'Artistic city with Gaudí architecture and beaches' },
  { city: 'Rome', country: 'Italy', description: 'Ancient capital with millennia of history' },
  { city: 'Amsterdam', country: 'Netherlands', description: 'Picturesque canal city with vibrant culture' },
  { city: 'Berlin', country: 'Germany', description: 'Dynamic capital with avant-garde arts scene' },
  { city: 'Prague', country: 'Czech Republic', description: 'Fairy-tale city with preserved medieval center' },
  { city: 'Vienna', country: 'Austria', description: 'Elegant imperial capital known for classical music' },
  { city: 'Venice', country: 'Italy', description: 'Romantic city built on canals and lagoons' },
  { city: 'Lisbon', country: 'Portugal', description: 'Coastal capital with colorful neighborhoods' },
  { city: 'Copenhagen', country: 'Denmark', description: 'Design-focused city with Nordic charm' },
  { city: 'Dublin', country: 'Ireland', description: 'Literary hub with lively pub culture' },
  { city: 'Athens', country: 'Greece', description: 'Cradle of Western civilization with ancient ruins' },
  
  // Beyond Europe
  { city: 'Marrakech', country: 'Morocco', description: 'Ancient walled city with vibrant souks' },
  { city: 'Istanbul', country: 'Turkey', description: 'Transcontinental city spanning Europe and Asia' },
  { city: 'New York', country: 'United States', description: 'Iconic metropolis with world-class everything' },
  { city: 'Tokyo', country: 'Japan', description: 'Ultra-modern city blending tradition and innovation' }
];

const hotels = [
  'Boutique Hotel Riverside',
  'Grand Plaza Hotel',
  'Urban Comfort Inn',
  'Historic City Hotel',
  'Modern Suite Resort',
  'Luxury Palace Hotel',
  'Central City Apartments',
  'Panorama View Hotel',
  'Heritage Inn & Spa',
  'Contemporary Design Hotel',
  'Oceanfront Resort',
  'Alpine Lodge Retreat',
  'Metropolitan Business Hotel',
  'Art Deco Boutique Hotel',
  'Old Town Guesthouse'
];

const departureCities = [
  'Paris',
  'Lyon',
  'Marseille',
  'Bordeaux',
  'Lille',
  'Strasbourg',
  'Toulouse',
  'Nice',
  'Nantes',
  'Rennes'
];

const transportModes = {
  'train': {
    name: 'Train',
    destinations: ['France', 'United Kingdom', 'Belgium', 'Netherlands', 'Germany', 'Switzerland', 'Italy', 'Spain']
  },
  'flight': {
    name: 'Flight',
    destinations: ['all']
  },
  'bus': {
    name: 'Bus',
    destinations: ['France', 'Belgium', 'Netherlands', 'Germany', 'Switzerland']
  }
};

const activities = {
  Nature: [
    'Hiking in nearby forests',
    'Garden and park tours',
    'Scenic countryside walks',
    'Nature photography sessions',
    'Picnic in local parks',
    'Cycling through scenic routes',
    'Boat tours on rivers or lakes',
    'Wildlife watching',
    'Beach relaxation',
    'Mountain exploration',
    'Vineyard tours'
  ],
  Culture: [
    'Château and palace visits',
    'Historical city tours',
    'Museum and art gallery exploration',
    'Local food tasting',
    'Traditional craft workshops',
    'Architecture walking tours',
    'Theater and performing arts',
    'Local festivals and events',
    'Historical monument visits',
    'Culinary workshops and cooking classes',
    'Wine and cheese tasting'
  ],
  Adventure: [
    'Rock climbing',
    'Water sports activities',
    'Hot air balloon rides',
    'Zip-lining adventures',
    'Caving explorations',
    'Mountain biking trails',
    'Paragliding experiences',
    'Kayaking and canoeing',
    'Winter sports',
    'ATV and off-road tours'
  ],
  Urban: [
    'Shopping in local boutiques',
    'Nightlife exploration',
    'Street food tours',
    'Rooftop bar hopping',
    'Modern architecture tours',
    'Urban photography walks',
    'Market explorations',
    'Contemporary art spaces',
    'Trendy neighborhood tours',
    'Coffee culture experiences'
  ]
};

const weathers = [
  'Sunny with light breeze',
  'Partly cloudy',
  'Clear skies',  
  'Mild temperature',
  'Perfect spring weather'
];

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function calculatePrices(budget) {
  const total = parseInt(budget);
  const transportPercentage = 0.3;
  const hotelPercentage = 0.4;
  
  return {
    transportPrice: Math.round(total * transportPercentage),
    hotelPrice: Math.round(total * hotelPercentage),
    totalBudget: total
  };
}

// Generate a unique booking reference number
function generateBookingReference() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let reference = 'HG-';
  
  for (let i = 0; i < 6; i++) {
    reference += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  return reference;
}

// Create a single trip option
function createTripOption(formData, usedDestinations = []) {
  // Find an unused destination
  let destination;
  do {
    destination = getRandomElement(destinations);
  } while (usedDestinations.some(used => used.city === destination.city));
  
  const prices = calculatePrices(formData.budget);
  
  // Determine transport type based on destination and user preference
  let transportType;
  
  // If user specified a preferred transport, try to use it if appropriate
  if (formData.transport !== 'Any') {
    transportType = formData.transport;
  } else {
    // Choose appropriate transport based on destination
    if (destination.country === 'France') {
      // For destinations within France, favor train
      transportType = Math.random() > 0.3 ? 'Train' : 'Bus';
    } else if (['United Kingdom', 'Belgium', 'Netherlands', 'Germany', 'Switzerland', 'Italy', 'Spain'].includes(destination.country)) {
      // For European destinations, mix of train and flight
      transportType = Math.random() > 0.5 ? 'Train' : 'Flight';
    } else {
      // For distant destinations, always fly
      transportType = 'Flight';
    }
  }
  
  // Calculate distance for transport duration and price
  let distance;
  
  if (destination.country === 'France') {
    // Shorter distances within France
    distance = Math.floor(Math.random() * 500) + 100;
  } else if (['United Kingdom', 'Belgium', 'Netherlands', 'Germany', 'Switzerland', 'Italy', 'Spain'].includes(destination.country)) {
    // Medium distances in Europe
    distance = Math.floor(Math.random() * 1000) + 500;
  } else {
    // Long distances for international travel
    distance = Math.floor(Math.random() * 8000) + 2000;
  }
  
  // Calculate transport duration based on type and distance
  let transportDuration;
  if (transportType === 'Flight') {
    transportDuration = `${Math.ceil(distance / 800)} hours`; // ~800 km/h
  } else if (transportType === 'Train') {
    transportDuration = `${Math.ceil(distance / 200)} hours`; // ~200 km/h
  } else {
    transportDuration = `${Math.ceil(distance / 80)} hours`;  // ~80 km/h
  }
  
  // Get activities based on selected travel style
  const selectedActivities = activities[formData.travelStyle] || 
    Object.values(activities).flat();
  
  // Generate two unique activities
  const activity1 = getRandomElement(selectedActivities);
  let activity2;
  do {
    activity2 = getRandomElement(selectedActivities);
  } while (activity2 === activity1);
  
  // Add a small random variation to prices for different options (+/- 15%)
  const priceVariation = 0.85 + (Math.random() * 0.3); // between 0.85 and 1.15
  
  // Transport cost depends on distance and mode
  let transportPrice;
  if (transportType === 'Flight') {
    transportPrice = Math.round((50 + distance * 0.1) * priceVariation);
  } else if (transportType === 'Train') {
    transportPrice = Math.round((30 + distance * 0.08) * priceVariation);
  } else {
    transportPrice = Math.round((20 + distance * 0.05) * priceVariation);
  }
  
  // Ensure transport price doesn't exceed 40% of budget
  transportPrice = Math.min(transportPrice, Math.floor(formData.budget * 0.4));
  
  const hotelPrice = Math.round(prices.hotelPrice * priceVariation);
  
  return {
    departure: formData.departure,
    destination: `${destination.city}, ${destination.country}`,
    description: destination.description,
    transport: transportType,
    transportDuration: transportDuration,
    transportPrice: transportPrice,
    hotel: getRandomElement(hotels),
    hotelPrice: hotelPrice,
    activities: [activity1, activity2],
    weather: getRandomElement(weathers),
    totalBudget: transportPrice + hotelPrice,
    bookingReference: generateBookingReference()
  };
}

export function generateTrips(formData, count = 3) {
  const trips = [];
  const usedDestinations = [];
  
  for (let i = 0; i < count && i < destinations.length; i++) {
    const trip = createTripOption(formData, usedDestinations);
    trips.push(trip);
    
    // Add this destination to the used list to ensure unique destinations
    const destName = trip.destination.split(',')[0].trim();
    usedDestinations.push(destinations.find(d => d.city === destName));
  }
  
  return trips;
}

// Kept for backward compatibility
export function generateTrip(formData) {
  return generateTrips(formData, 1)[0];
}