// src/App.jsx
import { Outlet } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <div className="bg-white">
        <Nav />
        <Outlet />
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;