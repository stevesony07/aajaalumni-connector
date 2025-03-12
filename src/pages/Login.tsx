
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('Login');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', { email, password });
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-center mb-2">Join the aajaAlumni community!</h1>
      
      {/* Tabs */}
      <div className="flex border-b mb-8">
        <button
          className={`flex-1 py-3 ${
            activeTab === 'Login' ? 'border-b-2 border-primary text-primary font-medium' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('Login')}
        >
          Login
        </button>
        <Link
          to="/register"
          className={`flex-1 py-3 text-center ${
            activeTab === 'Sign Up' ? 'border-b-2 border-primary text-primary font-medium' : 'text-gray-500'
          }`}
        >
          Sign Up
        </Link>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">Welcome Back</h2>
        <p className="text-center text-gray-600 mb-8">
          Access your alumni profile and connect with your community
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Username or Email
            </label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg"
              placeholder="Enter your username or email"
              required
            />
          </div>

          <div className="mb-6">
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
                placeholder="Enter your password"
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

          <div className="flex justify-end mb-6">
            <Link to="/forgot-password" className="text-accent hover:underline">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-accent hover:bg-accent/90 text-white py-3 rounded-lg mb-6"
          >
            Login
          </button>
        </form>

        <div className="text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-primary hover:underline">
              Switch to Sign Up
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

export default Login;
