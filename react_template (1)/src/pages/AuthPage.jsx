// src/pages/AuthPage.jsx
import { useLocation, Navigate } from 'react-router-dom';
import Login from '../components/auth/Login';
import SignUp from '../components/auth/SignUp';
import { useAuth } from '../context/AuthContext';

function AuthPage() {
  const location = useLocation();
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/profile" />;
  }

  return (
    <div>
      {location.pathname === '/auth/login' ? <Login /> : <SignUp />}
    </div>
  );
}

export default AuthPage;