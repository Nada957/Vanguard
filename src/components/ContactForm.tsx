'use client';

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

interface ContactFormProps {
  email: string;
  contactEmail?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ email, contactEmail }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // If contactEmail is set, use EmailJS with default credentials
      if (contactEmail) {
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          to_email: contactEmail,
          message: formData.message,
          reply_to: formData.email,
        };

        // Default EmailJS credentials from environment variables
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'default_service_id',
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'default_template_id',
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'default_public_key'
        );

        setSubmitted(true);
      } else {
        // Fallback to mailto
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      // Fallback to mailto on error
      const subject = `Portfolio Contact from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoLink;
      setSubmitted(true);
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <p className="text-green-400 font-bold">Message sent successfully! I'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-white/50 focus:outline-none"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-white/50 focus:outline-none"
        />
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full p-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-white/50 focus:outline-none resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 bg-white text-black font-bold uppercase tracking-widest rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};