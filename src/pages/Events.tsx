
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Search, Video, Users, Briefcase, GraduationCap, Activity } from 'lucide-react';

const Events = () => {
  const [view, setView] = useState('Grid View');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Events');

  const categories = ['All Events', 'Reunions', 'Webinars', 'Networking'];

  const events = [
    {
      id: 1,
      date: 'Dec 15, 2023',
      title: 'Annual Alumni Reunion',
      description: 'Join us for a night of networking, memories, and celebration at the Grand Hotel.',
      icon: Users
    },
    {
      id: 2,
      date: 'Jan 10, 2024',
      title: 'Tech Industry Webinar',
      description: 'Learn about emerging technologies and career opportunities from industry experts.',
      icon: Video
    },
    {
      id: 3,
      date: 'Feb 5, 2024',
      title: 'Mentorship Program',
      description: 'Connect with successful alumni who can guide you through your career journey.',
      icon: GraduationCap
    },
    {
      id: 4,
      date: 'Mar 20, 2024',
      title: 'Networking Mixer',
      description: 'Expand your professional network with fellow alumni in a casual setting.',
      icon: Briefcase
    },
    {
      id: 5,
      date: 'Apr 8, 2024',
      title: 'Community Service Day',
      description: 'Give back to the community through various volunteer opportunities.',
      icon: Users
    },
    {
      id: 6,
      date: 'May 15, 2024',
      title: 'Alumni Sports Tournament',
      description: 'Compete in various sports activities and reconnect with old classmates.',
      icon: Activity
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-primary mb-2">Upcoming Events</h1>
      <p className="text-gray-600 mb-8">Join your fellow alumni at exciting events!</p>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <button 
            className={`px-4 py-2 rounded ${view === 'Grid View' ? 'bg-primary text-white' : 'bg-gray-100'}`}
            onClick={() => setView('Grid View')}
          >
            Grid View
          </button>
          <button 
            className={`px-4 py-2 rounded ${view === 'Calendar View' ? 'bg-primary text-white' : 'bg-gray-100'}`}
            onClick={() => setView('Calendar View')}
          >
            Calendar View
          </button>
        </div>

        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search events"
            className="w-full px-4 py-2 pl-10 bg-gray-50 border border-gray-200 rounded-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Event Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {events.map((event) => (
          <div key={event.id} className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center justify-center text-primary mb-4">
              <Calendar className="h-6 w-6" />
            </div>
            <p className="text-secondary font-medium text-center mb-2">{event.date}</p>
            <h3 className="text-xl font-semibold text-center mb-2">{event.title}</h3>
            <p className="text-gray-600 text-center mb-6">{event.description}</p>
            <div className="flex justify-center space-x-3">
              <button className="bg-primary text-white px-4 py-2 rounded-lg">RSVP</button>
              <button className="text-primary border border-primary px-4 py-2 rounded-lg">Details</button>
            </div>
          </div>
        ))}
      </div>

      {/* Event Categories */}
      <h2 className="text-2xl font-bold text-primary mb-6">Event Categories</h2>
      <div className="flex flex-wrap gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-6 py-3 rounded-lg ${
              activeCategory === category
                ? 'bg-primary text-white'
                : category === 'Reunions'
                ? 'bg-secondary text-white'
                : category === 'Webinars'
                ? 'bg-accent text-white'
                : category === 'Networking'
                ? 'bg-gray-700 text-white'
                : 'bg-gray-100'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Subscription */}
      <div className="bg-gray-50 p-8 rounded-lg flex flex-col md:flex-row justify-between items-center">
        <p className="text-lg text-gray-700 mb-4 md:mb-0">Get notified about upcoming events</p>
        <button className="bg-accent text-white px-6 py-3 rounded-lg">
          Subscribe to Notifications
        </button>
      </div>
    </div>
  );
};

export default Events;
