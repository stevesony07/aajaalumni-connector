
import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a server
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-primary mb-6">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-12">
        We'd love to hear from you. Please fill out the form below or use our contact information.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-center text-primary mb-4">
            <Mail className="h-6 w-6 mr-3" />
            <h3 className="text-xl font-semibold">Email Us</h3>
          </div>
          <p className="text-gray-700">contact@aajaalumni.com</p>
          <p className="text-gray-700">support@aajaalumni.com</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-center text-primary mb-4">
            <Phone className="h-6 w-6 mr-3" />
            <h3 className="text-xl font-semibold">Call Us</h3>
          </div>
          <p className="text-gray-700">+91 123 456 7890</p>
          <p className="text-gray-700">Mon-Fri, 9:00 AM - 5:00 PM</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-center text-primary mb-4">
            <MapPin className="h-6 w-6 mr-3" />
            <h3 className="text-xl font-semibold">Visit Us</h3>
          </div>
          <p className="text-gray-700">AJCE Alumni Office</p>
          <p className="text-gray-700">Campus Road, Kanjirapally</p>
          <p className="text-gray-700">Kerala, India - 686512</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-primary mb-6">Our Location</h2>
          <div className="h-96 bg-gray-200 rounded-lg mb-4">
            {/* Here you would typically embed a map */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Map Placeholder
            </div>
          </div>
          <p className="text-gray-700">
            Our alumni office is located on the main campus. Visitors are welcome during office hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
