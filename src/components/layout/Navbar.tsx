
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/76f04342-ecf1-4661-a3e1-552d8ee3b3c4.png" 
                alt="aajaAlumni Logo" 
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-primary">aajaAlumni</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/alumni" className="nav-link">Alumni Directory</Link>
            <Link to="/events" className="nav-link">Events</Link>
            <Link to="/features" className="nav-link">Features</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/login" className="btn-primary ml-4">Login</Link>
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
            <Link to="/alumni" className="block nav-link">Alumni Directory</Link>
            <Link to="/events" className="block nav-link">Events</Link>
            <Link to="/features" className="block nav-link">Features</Link>
            <Link to="/about" className="block nav-link">About</Link>
            <Link to="/contact" className="block nav-link">Contact</Link>
            <Link to="/login" className="block btn-primary text-center mt-4">Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
