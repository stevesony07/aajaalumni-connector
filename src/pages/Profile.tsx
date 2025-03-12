
import React from 'react';
import { User, MapPin, Phone, Mail, Linkedin, Calendar, BookOpen, Building, Edit } from 'lucide-react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const profileData = {
    name: 'Arun Kumar',
    admission: 'CS123456',
    batch: '2018',
    branch: 'Computer Science',
    position: 'Software Engineer',
    company: 'Google',
    address: '123 Tech Park, Bangalore, Karnataka',
    email: 'arun.kumar@example.com',
    phone: '+91 9876543210',
    linkedin: 'linkedin.com/in/arunkumar',
    whatsapp: '+91 9876543210',
    age: '27',
    status: 'Employed'
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        {/* Cover Photo */}
        <div className="h-48 bg-gradient-to-r from-primary to-secondary"></div>

        {/* Profile Header */}
        <div className="relative px-6 pb-6">
          <div className="flex flex-col md:flex-row items-center md:items-end -mt-16 md:-mt-20">
            <div className="h-32 w-32 bg-white rounded-full p-1 shadow-lg">
              <div className="h-full w-full rounded-full bg-gray-200 flex items-center justify-center">
                <User className="h-16 w-16 text-gray-400" />
              </div>
            </div>
            <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
              <h1 className="text-3xl font-bold">{profileData.name}</h1>
              <p className="text-lg text-gray-600">
                {profileData.position} at {profileData.company}
              </p>
              <p className="text-gray-500">
                {profileData.batch} Batch | {profileData.branch}
              </p>
            </div>
            <div className="md:ml-auto mt-4 md:mt-0">
              <button className="flex items-center bg-primary text-white px-4 py-2 rounded-lg">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          {/* Personal Info */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold mb-4 text-primary">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Address</p>
                  <p className="text-gray-800">{profileData.address}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Phone</p>
                  <p className="text-gray-800">{profileData.phone}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <p className="text-gray-800">{profileData.email}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Linkedin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">LinkedIn</p>
                  <p className="text-gray-800">{profileData.linkedin}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Calendar className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Admission No</p>
                  <p className="text-gray-800">{profileData.admission}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <BookOpen className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Current Status</p>
                  <p className="text-gray-800">{profileData.status}</p>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-bold mb-4 text-primary">Career Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Building className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Current Company</p>
                  <p className="text-gray-800">{profileData.company}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <User className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Position</p>
                  <p className="text-gray-800">{profileData.position}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Activity & Stats */}
          <div>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-2 text-primary">Network Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Connections</span>
                  <span className="font-medium">152</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Events Attended</span>
                  <span className="font-medium">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Profile Views</span>
                  <span className="font-medium">324</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-primary">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/alumni" className="text-secondary hover:underline block">Find Classmates</Link>
                <Link to="/events" className="text-secondary hover:underline block">Upcoming Events</Link>
                <Link to="/features/jobs" className="text-secondary hover:underline block">Job Opportunities</Link>
                <Link to="/features/mentorship" className="text-secondary hover:underline block">Become a Mentor</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
