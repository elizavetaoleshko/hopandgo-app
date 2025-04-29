// src/components/HomePage.jsx
import Button from './Button';

function HomePage() {
  const scrollToForm = () => {
    const form = document.querySelector('#trip-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-sky-50 px-4">
      <div className="max-w-3xl text-center space-y-8">
        <h1 className="text-5xl font-bold text-gray-900 sm:text-6xl">
          Discover Your Perfect Weekend Getaway
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Plan an unforgettable weekend trip to charming destinations near Paris.
          Let us help you create memories that last a lifetime.
        </p>
        <Button onClick={scrollToForm} primary size="lg">
          Start Planning
        </Button>
      </div>
    </div>
  );
}

export default HomePage;