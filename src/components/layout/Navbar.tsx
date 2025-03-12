
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-primary">aajaAlumni</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/alumni" className="nav-link">Alumni Directory</Link>
            <Link to="/events" className="nav-link">Events</Link>
            <Link to="/features" className="nav-link">Features</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            
            <div className="flex items-center ml-4">
              <Link to="/register" className="text-secondary font-medium mr-4">Sign Up</Link>
              <Link to="/login" className="bg-primary text-white px-4 py-2 rounded-md">Login</Link>
              <Link to="/profile" className="ml-4">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <User className="h-5 w-5 text-gray-500" />
                </div>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block nav-link">Home</Link>
            <Link to="/alumni" className="block nav-link">Alumni Directory</Link>
            <Link to="/events" className="block nav-link">Events</Link>
            <Link to="/features" className="block nav-link">Features</Link>
            <Link to="/about" className="block nav-link">About</Link>
            <Link to="/contact" className="block nav-link">Contact</Link>
            <Link to="/register" className="block nav-link">Sign Up</Link>
            <Link to="/login" className="block nav-link">Login</Link>
            <Link to="/profile" className="block nav-link">Profile</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
