// src/components/Nav.jsx
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from './Button';

function Nav() {
  const { user, logout } = useAuth();

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold text-sky-600">
            Hop&Go
          </Link>
          
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link 
                  to="/profile" 
                  className="text-gray-700 hover:text-sky-600 transition-colors"
                >
                  Profile
                </Link>
                <Button onClick={logout}>Logout</Button>
              </>
            ) : (
              <>
                <Link to="/auth/login">
                  <Button>Login</Button>
                </Link>
                <Link to="/auth/signup">
                  <Button primary>Sign Up</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;