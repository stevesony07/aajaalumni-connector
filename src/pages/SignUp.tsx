
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('Sign Up');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic
    console.log('Sign up attempt with:', { username, email, password, confirmPassword, role });
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-center mb-2">Join the aajaAlumni community!</h1>
      
      {/* Tabs */}
      <div className="flex border-b mb-8">
        <Link
          to="/login"
          className={`flex-1 py-3 text-center ${
            activeTab === 'Login' ? 'border-b-2 border-primary text-primary font-medium' : 'text-gray-500'
          }`}
        >
          Login
        </Link>
        <button
          className={`flex-1 py-3 ${
            activeTab === 'Sign Up' ? 'border-b-2 border-primary text-primary font-medium' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('Sign Up')}
        >
          Sign Up
        </button>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">Create an Account</h2>
        <p className="text-center text-gray-600 mb-8">
          Join our alumni network and connect with former classmates
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="username" className="block text-gray-700 mb-2">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg"
              placeholder="Choose a username"
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg"
                placeholder="Create a password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-500" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>
          </div>

          <div className="mb-5">
            <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg"
              placeholder="Confirm your password"
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="role" className="block text-gray-700 mb-2">
              Role
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg"
              required
            >
              <option value="" disabled>Select your role</option>
              <option value="student">Student</option>
              <option value="alumni">Alumni</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">Note: Admin access is restricted.</p>
          </div>

          <button
            type="submit"
            className="w-full bg-accent hover:bg-accent/90 text-white py-3 rounded-lg mb-6"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-primary hover:underline">
              Switch to Login
            </Link>
          </p>
        </div>
      </div>

      <p className="text-center text-gray-500 mt-8">
        © 2023 aajaAlumni. All rights reserved.
      </p>
    </div>
  );
};

export default SignUp;
