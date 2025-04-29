// src/components/auth/Profile.jsx
import { useAuth } from '../../context/AuthContext';
import Button from '../Button';

function Profile() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Profile Information
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1 text-gray-900">{user?.email}</div>
            </div>

            <div className="border-t pt-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Recent Trips
              </h3>
              <p className="text-gray-500">No trips planned yet</p>
              <Button className="mt-4" primary>
                Plan a New Trip
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;