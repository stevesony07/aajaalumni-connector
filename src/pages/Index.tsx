
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
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Link to={feature.link} className="inline-flex items-center text-primary hover:text-primary/80">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    title: "Alumni Directory",
    description: "Connect with fellow alumni from around the world and expand your professional network.",
    link: "/alumni"
  },
  {
    title: "Events & Reunions",
    description: "Stay updated with upcoming alumni events, reunions, and networking opportunities.",
    link: "/events"
  },
  {
    title: "Career Resources",
    description: "Access job opportunities, mentorship programs, and career development resources.",
    link: "/features"
  }
];

export default Index;
