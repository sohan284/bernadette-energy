"use client";

import React, { useState } from 'react';

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Mocking submission
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="py-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="w-16 h-16 bg-[#E5C48B]/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-[#E5C48B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-serif text-gray-800 mb-2">Message Sent</h3>
        <p className="text-gray-500">Thank you for reaching out. We will get back to you shortly.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-8 text-[#E5C48B] hover:text-[#D4B37A] font-medium transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-1 group">
        <label htmlFor="subject" className="text-[10px] uppercase tracking-[0.2em] text-[#E5C48B] font-bold">
          Subject
        </label>
        <input
          required
          type="text"
          id="subject"
          placeholder="How can we help?"
          className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-[#E5C48B] outline-none transition-all duration-300 text-gray-800 placeholder:text-gray-300 focus:placeholder:text-gray-200"
        />
      </div>

      <div className="space-y-1 group">
        <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-[#E5C48B] font-bold">
          Email Address
        </label>
        <input
          required
          type="email"
          id="email"
          placeholder="your@email.com"
          className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-[#E5C48B] outline-none transition-all duration-300 text-gray-800 placeholder:text-gray-300 focus:placeholder:text-gray-200"
        />
      </div>

      <div className="space-y-1 group">
        <label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] text-[#E5C48B] font-bold">
          Message
        </label>
        <textarea
          required
          id="message"
          rows={4}
          placeholder="Tell us more about your needs..."
          className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-[#E5C48B] outline-none transition-all duration-300 text-gray-800 placeholder:text-gray-300 focus:placeholder:text-gray-200 resize-none"
        ></textarea>
      </div>

      <button
        disabled={status === 'submitting'}
        type="submit"
        className="w-full md:w-auto bg-[#E5C48B] hover:bg-[#D4B37A] text-gray-900 px-10 py-4 rounded-sm uppercase tracking-[0.2em] text-xs font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed mt-4"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;
