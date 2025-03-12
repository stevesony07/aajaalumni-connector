
import { Link } from 'react-router-dom';
import { Globe, Briefcase, MessageSquare, Network, TrendingUp, MapPin, Monitor, MessageCircle, Share2, BarChart2 } from 'lucide-react';

const Features = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-center text-primary mb-2">Explore Our Features</h1>
      <p className="text-center text-gray-600 mb-12">Discover AI-powered tools to connect and grow!</p>

      {/* Geospatial Tracker */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-primary mb-6">Geospatial Tracker</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center text-primary mb-4">
              <MapPin className="h-6 w-6 mr-2" />
              <h3 className="text-xl font-semibold">Find Alumni Worldwide</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Our AI-powered geospatial tracker visualizes alumni locations across the globe, 
              helping you connect with peers in your area or discover networking opportunities worldwide.
            </p>
            <Link to="/features/geospatial" className="bg-accent text-white px-4 py-2 rounded-lg inline-block">
              Explore Now
            </Link>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center text-primary mb-4">
              <Globe className="h-6 w-6 mr-2" />
              <h3 className="text-xl font-semibold">Interactive Map</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Zoom in to specific regions, filter by industry or graduation year, and 
              discover clusters of alumni in major tech hubs and cities around the world.
            </p>
            <Link to="/features/map" className="text-primary hover:underline inline-flex items-center">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Job Matcher */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-primary mb-6">Job Matcher</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center text-primary mb-4">
              <Briefcase className="h-6 w-6 mr-2" />
              <h3 className="text-xl font-semibold">AI-Powered Job Matching</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Our algorithm analyzes your skills, experience, and preferences to 
              recommend relevant job opportunities from our extensive network of 
              employers and alumni connections.
            </p>
            <Link to="/features/jobs" className="bg-accent text-white px-4 py-2 rounded-lg inline-block">
              Find Jobs
            </Link>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center text-primary mb-4">
              <Monitor className="h-6 w-6 mr-2" />
              <h3 className="text-xl font-semibold">Personalized Recommendations</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Sample match: Software Engineer at Google - 92% compatibility based 
              on your profile and career trajectory.
            </p>
            <Link to="/profile/update" className="text-primary hover:underline inline-flex items-center">
              Update Profile
            </Link>
          </div>
        </div>
      </section>

      {/* Alumni Chatbot */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-primary mb-6">Alumni Chatbot</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center text-primary mb-4">
              <MessageSquare className="h-6 w-6 mr-2" />
              <h3 className="text-xl font-semibold">24/7 Virtual Assistant</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Our AI chatbot provides instant answers about alumni events, job 
              opportunities, networking tips, and platform features - available anytime, anywhere.
            </p>
            <button className="bg-accent text-white px-4 py-2 rounded-lg">
              Ask Me Anything
            </button>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center text-primary mb-4">
              <MessageCircle className="h-6 w-6 mr-2" />
              <h3 className="text-xl font-semibold">Smart Conversations</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Get personalized guidance on career development, connect with 
              mentors, or learn about upcoming alumni gatherings in your area.
            </p>
            <button className="text-primary hover:underline inline-flex items-center">
              Try It Now
            </button>
          </div>
        </div>
      </section>

      {/* Alumni Networking Graph */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-primary mb-6">Alumni Networking Graph</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center text-primary mb-4">
              <Network className="h-6 w-6 mr-2" />
              <h3 className="text-xl font-semibold">Visualize Your Network</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Our interactive graph visualization shows connections between alumni 
              based on companies, industries, locations, and graduation years.
            </p>
            <button className="bg-accent text-white px-4 py-2 rounded-lg">
              View Network
            </button>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center text-primary mb-4">
              <Share2 className="h-6 w-6 mr-2" />
              <h3 className="text-xl font-semibold">Discover Connections</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Find alumni working at your dream companies, identify potential 
              mentors, and uncover hidden networking opportunities within your 
              extended alumni community.
            </p>
            <button className="text-primary hover:underline inline-flex items-center">
              Explore Insights
            </button>
          </div>
        </div>
      </section>

      {/* Career Prediction */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-primary mb-6">Career Prediction</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center text-primary mb-4">
              <TrendingUp className="h-6 w-6 mr-2" />
              <h3 className="text-xl font-semibold">Future Career Insights</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Our machine learning algorithms analyze career paths of thousands of 
              alumni to predict potential career trajectories based on your profile and interests.
            </p>
            <button className="bg-accent text-white px-4 py-2 rounded-lg">
              See Details
            </button>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center text-primary mb-4">
              <BarChart2 className="h-6 w-6 mr-2" />
              <h3 className="text-xl font-semibold">Personalized Forecast</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Sample prediction: 87% likely to work in Tech Leadership within 5 years 
              based on your skills, experience, and the paths of similar alumni profiles.
            </p>
            <button className="text-primary hover:underline inline-flex items-center">
              Get Full Analysis
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12">
        <h2 className="text-2xl font-bold text-primary mb-6">Ready to experience the power of AI in your alumni network?</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/register" className="bg-primary text-white px-8 py-3 rounded-lg">
            Get Started
          </Link>
          <Link to="/features/demo" className="border border-primary text-primary px-8 py-3 rounded-lg">
            Watch Demo
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Features;
