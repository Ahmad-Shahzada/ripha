import { Send } from 'lucide-react';
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface Errors {
  name?: string[];
  email?: string[];
  phone?: string[];
  subject?: string[];
  message?: string[];
  general?: string[];
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setSuccess(false);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data: { success?: boolean; errors?: Errors; message?: string } = await response.json();

      if (response.ok) {
        // Success
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        // Validation errors
        if (data.errors) {
          setErrors(data.errors);
        }
      }
    } catch (error) {
      console.error('Submission error:', error);
      setErrors({ general: ['Network error. Please try again later.'] });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="relative bg-white rounded-2xl px-8 py-14 shadow-lg hover:shadow-2xl 
                      transition-all duration-500 transform hover:-translate-y-2">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
          Send us a Message
        </h2>

        {/* Success Message */}
        {success && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
            Thank you for your message! We will get back to you soon.
          </div>
        )}

        {/* Error Messages */}
        {errors.general && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
            {errors.general[0]}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-200'} 
                     bg-gray-50 focus:bg-white shadow-inner 
                     focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name[0]}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-200'} 
                     bg-gray-50 focus:bg-white shadow-inner 
                     focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email[0]}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-200'} 
                     bg-gray-50 focus:bg-white shadow-inner 
                     focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone[0]}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <select
                name="subject"
                required
                value={formData.subject}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? 'border-red-500' : 'border-gray-200'} 
                     bg-gray-50 focus:bg-white shadow-inner 
                     focus:outline-none focus:ring-2 focus:ring-blue-500`}
              >
                <option value="">Select a subject</option>
                <option value="admissions">Admissions Inquiry</option>
                <option value="programs">Program Information</option>
                <option value="fees">Fee Structure</option>
                <option value="general">General Inquiry</option>
                <option value="complaint">Complaint</option>
                <option value="other">Other</option>
              </select>
              {errors.subject && (
                <p className="mt-1 text-sm text-red-600">{errors.subject[0]}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Enter your message here..."
              className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-200'} 
                   bg-gray-50 focus:bg-white shadow-inner 
                   focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message[0]}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 
                 text-white py-3 px-6 rounded-xl font-semibold 
                 shadow-md hover:shadow-xl hover:scale-[1.02] 
                 transition-all duration-300 flex items-center justify-center space-x-2
                 disabled:opacity-75 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;