"use client"
import React, { useState } from 'react';
import { sendEmail } from '@/app/actions/sendEmail';

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    const result = await sendEmail(formData);

    if (result.success) {
      setStatus('success');
    } else {
      setStatus('error');
      setErrorMessage(result.message);
    }
  };

  if (status === 'success') {
    return (
      <div className="py-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="w-16 h-16 bg-violet-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-serif text-gray-800 mb-2">Message Sent</h3>
        <p className="text-gray-500">Thank you for reaching out. We will get back to you shortly.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-8 text-violet-600 cursor-pointer hover:text-violet-700 font-medium transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="py-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h3 className="text-2xl font-serif text-gray-800 mb-2">Something went wrong</h3>
        <p className="text-gray-500">{errorMessage || "Please check your configuration or try again later."}</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-8 text-violet-600 hover:text-violet-700 font-medium transition-colors cursor-pointer"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-1 group">
        <label htmlFor="subject" className="text-[10px] uppercase tracking-[0.2em] text-violet-600 font-bold">
          Subject
        </label>
        <input
          required
          name="subject"
          type="text"
          id="subject"
          placeholder="E.g., Partnership Inquiry"
          className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-violet-600 outline-none transition-all duration-300 text-gray-800 placeholder:text-gray-300 focus:placeholder:text-gray-200"
        />
      </div>

      <div className="space-y-1 group">
        <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-violet-600 font-bold">
          Email Address
        </label>
        <input
          required
          name="email"
          type="email"
          id="email"
          placeholder="your@email.com"
          className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-violet-600 outline-none transition-all duration-300 text-gray-800 placeholder:text-gray-300 focus:placeholder:text-gray-200"
        />
      </div>

      <div className="space-y-1 group">
        <label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] text-violet-600 font-bold">
          Message
        </label>
        <textarea
          required
          name="message"
          id="message"
          rows={4}
          placeholder="Message details"
          className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-violet-600 outline-none transition-all duration-300 text-gray-800 placeholder:text-gray-300 focus:placeholder:text-gray-200 resize-none"
        ></textarea>
      </div>

      <button
        disabled={status === 'submitting'}
        type="submit"
        className="w-full md:w-auto bg-violet-600 hover:bg-violet-700 text-white px-10 py-4 rounded-sm uppercase tracking-[0.2em] text-xs font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed mt-4 cursor-pointer"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;
