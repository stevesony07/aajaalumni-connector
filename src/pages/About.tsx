
import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-primary mb-6">About Us</h1>
      <p className="text-lg text-gray-700 mb-8">
        The AJCE Alumni Association connects graduates from all years, helping them maintain 
        ties with their alma mater and with each other.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
          <p className="text-gray-700">
            We strive to create a vibrant community that fosters professional growth, 
            networking opportunities, and continued engagement with the college. Our 
            alumni network spans across the globe, with members working in diverse 
            fields and industries.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
          <p className="text-gray-700">
            We aim to build the most connected and engaged alumni network that supports 
            both current students and fellow alumni through mentorship, career opportunities, 
            and knowledge sharing.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">History</h2>
        <p className="text-gray-700 mb-4">
          The AJCE Alumni Association was established in 1995 with just a handful of members. 
          Today, it has grown to include over 5,000 alumni across 42 countries, making it one 
          of the most extensive alumni networks among engineering colleges in the region.
        </p>
        <p className="text-gray-700">
          Through the years, our alumni have distinguished themselves in various fields including 
          technology, business, research, and public service, bringing pride to their alma mater.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-primary mb-6">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((member) => (
            <div key={member} className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="h-24 w-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-1">Team Member {member}</h3>
              <p className="text-gray-600 mb-2">Position</p>
              <p className="text-gray-500 text-sm">Brief description about the team member and their role in the alumni association.</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center py-8">
        <h2 className="text-2xl font-bold text-primary mb-4">Join Our Community</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Whether you're a recent graduate or an alumnus from years past, we welcome you to join our thriving community.
        </p>
        <button className="bg-primary text-white px-6 py-3 rounded-lg">Get Involved</button>
      </div>
    </div>
  );
};

export default About;
