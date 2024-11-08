import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required.');
      setIsLoading(false);
      return;
    }

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    
    emailjs
      .send(
        'service_ynh9wft', 
        'template_mtd9y7u', 
        templateParams,
        'jCYB9tr2KkqV0xSZf' 
      )
      .then(
        (response) => {
          setIsSubmitted(true);
          setFormData({ name: '', email: '', message: '' }); // Reset form
          setTimeout(() => setIsSubmitted(false), 3000); // Reset success message after 3 seconds
        },
        (err) => {
          setError('Failed to send message. Please try again.');
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="glass-projects py-20">
        <h2 className="text-4xl font-bold text-white text-center mb-10">Contact Me</h2>
        <div className="max-w-lg mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Your Name"
                required
                aria-label="Your Name"
                autoComplete="name"
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Your Email"
                required
                aria-label="Your Email"
                autoComplete="email"
              />
            </div>
            <div>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Your Message"
                required
                aria-label="Your Message"
                autoComplete="off"
              ></textarea>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            {isSubmitted && <p className="text-green-500">Message sent successfully!</p>}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
