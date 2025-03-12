
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Globe, SlidersHorizontal, User } from 'lucide-react';

const AlumniDirectory = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All Alumni');

  const tabs = ['All Alumni', 'My Batch', 'My Branch', 'Top Engagers'];

  const alumniList = [
    {
      id: 1,
      name: 'Arun Kumar',
      batch: '2018',
      branch: 'Computer Science',
      position: 'Software Engineer',
      company: 'Google'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      batch: '2019',
      branch: 'Electrical Engineering',
      position: 'Project Manager',
      company: 'Microsoft'
    },
    {
      id: 3,
      name: 'Rahul Menon',
      batch: '2017',
      branch: 'Mechanical Engineering',
      position: 'Design Engineer',
      company: 'Tesla'
    },
    {
      id: 4,
      name: 'Sneha Patel',
      batch: '2020',
      branch: 'Civil Engineering',
      position: 'Structural Engineer',
      company: 'AECOM'
    },
    {
      id: 5,
      name: 'Vikram Singh',
      batch: '2018',
      branch: 'Electronics',
      position: 'Hardware Engineer',
      company: 'Apple'
    },
    {
      id: 6,
      name: 'Meera Nair',
      batch: '2019',
      branch: 'Computer Science',
      position: 'Data Scientist',
      company: 'Amazon'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-primary mb-2">Alumni Directory</h1>
      <p className="text-gray-600 mb-8">Connect with fellow AJCE graduates from around the world</p>

      {/* Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search by name, batch, branch..."
            className="w-full px-4 py-3 pl-12 bg-gray-50 border border-gray-200 rounded-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
        </div>
        <button className="bg-primary text-white px-6 py-3 rounded-lg">Search</button>
      </div>

      <div className="mb-4">
        <Link to="/alumni/advanced-search" className="text-secondary hover:underline">
          Advanced Search
        </Link>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto space-x-8 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`pb-2 ${
              activeTab === tab
                ? 'text-primary border-b-2 border-primary font-medium'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Geospatial Tracker and Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-center text-primary mb-2">
            <Globe className="h-5 w-5 mr-2" />
            <h2 className="text-xl font-semibold">Geospatial Alumni Tracker</h2>
          </div>
          <p className="text-gray-600 mb-4">View alumni locations across the globe</p>
          <Link 
            to="/alumni/map" 
            className="bg-primary text-white px-4 py-2 rounded-lg inline-block"
          >
            View Full Map
          </Link>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-center text-primary mb-2">
            <SlidersHorizontal className="h-5 w-5 mr-2" />
            <h2 className="text-xl font-semibold">Filters</h2>
          </div>
          <p className="text-gray-600 mb-4">Refine Results</p>
          <p className="text-gray-600">Filter alumni by various parameters</p>
        </div>
      </div>

      {/* Alumni Listing */}
      <h2 className="text-2xl font-bold text-primary mb-6">Alumni Listing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {alumniList.map((alumni) => (
          <div key={alumni.id} className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center justify-center mb-4">
              <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                <User className="h-6 w-6 text-gray-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">{alumni.name}</h3>
            <p className="text-gray-600 text-center mb-4">
              {alumni.batch} Batch | {alumni.branch} | {alumni.position} at {alumni.company}
            </p>
            <div className="flex justify-center space-x-3">
              <Link 
                to={`/profile/${alumni.id}`} 
                className="bg-primary text-white px-4 py-2 rounded-lg"
              >
                View Profile
              </Link>
              <button className="text-primary border border-primary px-4 py-2 rounded-lg">
                Connect
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <button className="bg-gray-100 px-4 py-2 rounded-lg">Previous</button>
        <div className="text-gray-600">Page 1 of 10</div>
        <button className="bg-primary text-white px-4 py-2 rounded-lg">Next</button>
      </div>
    </div>
  );
};

export default AlumniDirectory;
