
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to aajaAlumni
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Connect, Inspire, Grow with AJCE Alumni Worldwide
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/register" className="btn-secondary">
                Join Now
              </Link>
              <Link to="/features" className="btn-primary">
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-4xl font-bold text-primary mb-2">5,280+</h3>
              <p className="text-gray-600">Alumni Worldwide</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-4xl font-bold text-primary mb-2">42</h3>
              <p className="text-gray-600">Countries</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-4xl font-bold text-primary mb-2">1000+</h3>
              <p className="text-gray-600">Active Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            {features.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center text-primary mb-4">
                  <feature.icon className="h-6 w-6 mr-2" />
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Link to={feature.link} className="inline-flex items-center text-primary hover:text-primary/80">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Quick Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Upcoming Events</h2>
            <Link to="/events" className="text-primary hover:underline flex items-center">
              View all events <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-secondary font-medium mb-2">Dec 15, 2023</p>
              <h3 className="text-xl font-semibold mb-2">Annual Alumni Reunion</h3>
              <p className="text-gray-600 mb-4">Join us for a night of networking, memories, and celebration.</p>
              <Link to="/events" className="btn-primary inline-block">RSVP Now</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-secondary font-medium mb-2">Jan 10, 2024</p>
              <h3 className="text-xl font-semibold mb-2">Tech Industry Webinar</h3>
              <p className="text-gray-600 mb-4">Learn about emerging technologies and career opportunities.</p>
              <Link to="/events" className="btn-primary inline-block">Register</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-secondary font-medium mb-2">Feb 5, 2024</p>
              <h3 className="text-xl font-semibold mb-2">Mentorship Program</h3>
              <p className="text-gray-600 mb-4">Connect with successful alumni who can guide your career.</p>
              <Link to="/events" className="btn-primary inline-block">Join Program</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Connect with AJCE Alumni?</h2>
          <p className="text-xl mb-8">Join our global network of professionals and stay connected with your alma mater.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register" className="btn-secondary">
              Create Account
            </Link>
            <Link to="/login" className="btn-primary">
              Login
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Feature cards data with icons
const features = [
  {
    title: "Alumni Directory",
    description: "Connect with fellow alumni from around the world and expand your professional network.",
    link: "/alumni",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    )
  },
  {
    title: "Events & Reunions",
    description: "Stay updated with upcoming alumni events, reunions, and networking opportunities.",
    link: "/events",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
    )
  },
  {
    title: "Career Resources",
    description: "Access job opportunities, mentorship programs, and career development resources.",
    link: "/features",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase"><rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
    )
  },
  {
    title: "Geospatial Tracker",
    description: "Discover where AJCE alumni are located worldwide and connect with those near you.",
    link: "/features",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
    )
  },
  {
    title: "AI Job Matcher",
    description: "Find job opportunities that match your skills, experience, and career aspirations.",
    link: "/features",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cpu"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>
    )
  },
  {
    title: "Alumni Chatbot",
    description: "Get instant answers to your questions about alumni services and opportunities.",
    link: "/features",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    )
  }
];

export default Index;
