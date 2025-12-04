'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: ''
    });
    
    // Here you would typically send the form data to an API endpoint
    // For now we'll simulate a successful submission
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: 'Thank you for your message! We will get back to you soon.'
      });
    } catch (error) {
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Something went wrong. Please try again later.'
      });
    }
  };

  return (
    <main className="pt-28 md:pt-32">
      <Header />
      
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team. We&apos;d love to hear from you!
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            {formStatus.success && (
              <div className="mb-8 p-4 bg-green-50 text-green-700 rounded-2xl">
                {formStatus.message}
              </div>
            )}

            {formStatus.error && (
              <div className="mb-8 p-4 bg-red-50 text-red-700 rounded-2xl">
                {formStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={formStatus.submitting}
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition disabled:opacity-75"
                >
                  {formStatus.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
            
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold mb-4">Other Ways to Reach Us</h3>
              <p className="text-gray-600">
                Email: <a href="mailto:team@agapelabs.co.uk" className="text-blue-600 hover:underline">team@agapelabs.co.uk</a><br />
                Phone: <a href="tel:+447701073329" className="text-blue-600 hover:underline">(+44) 07701073329</a><br />
                <span className="block mt-2">
                  2 Gas Street<br />
                  Coventry<br />
                  CV4FG
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 