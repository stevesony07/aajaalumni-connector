
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/76f04342-ecf1-4661-a3e1-552d8ee3b3c4.png" 
                alt="aajaAlumni Logo" 
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-primary">aajaAlumni</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Connecting AJCE Alumni Worldwide
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/alumni" className="text-sm text-gray-600 hover:text-primary">
                  Alumni Directory
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-sm text-gray-600 hover:text-primary">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-sm text-gray-600 hover:text-primary">
                  Features
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-gray-600 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-sm text-gray-600">
                <Mail className="h-4 w-4 mr-2" />
                contact@aajaalumni.com
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <Phone className="h-4 w-4 mr-2" />
                +91 123 456 7890
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <Linkedin className="h-4 w-4 mr-2" />
                AJCE Alumni Network
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            © 2024 aajaAlumni. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
