// src/components/Footer.jsx
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="mb-4">© 2025 Hop&Go. Your quick getaway planner.</p>
        <div className="space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">
            Contact
          </a>
          <span className="text-gray-500">|</span>
          <a href="#" className="text-gray-300 hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;