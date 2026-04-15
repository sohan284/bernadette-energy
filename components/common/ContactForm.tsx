"use client"
import React, { useState } from 'react';
import { sendEmail } from '@/app/actions/sendEmail';
import { toast } from 'sonner';
import CountrySelect from './CountrySelect';
interface ContactFormProps {
  isLeadForm?: boolean;
}

const ContactForm = ({ isLeadForm = false }: ContactFormProps) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    const result = await sendEmail(formData);

    if (result.success) {
      toast.success(isLeadForm ? "Request Received! We've sent the Energy Investor Kit to your email." : "Message sent successfully!");
      setStatus('idle');
      e.currentTarget.reset();
    } else {
      toast.error(result.message || "Failed to send message.");
      setStatus('error');
      setErrorMessage(result.message);
    }
  };


  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {isLeadForm ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="firstName" className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">First Name</label>
              <input required name="firstName" type="text" id="firstName" placeholder="Enter Your First Name" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all text-sm text-slate-800" />
            </div>
            <div className="space-y-1">
              <label htmlFor="lastName" className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Last Name</label>
              <input required name="lastName" type="text" id="lastName" placeholder="Enter Your Last Name" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all text-sm text-slate-800" />
            </div>
          </div>
          <div className="space-y-1">
            <label htmlFor="email" className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Email Address</label>
            <input required name="email" type="email" id="email" placeholder="your@email.com" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all text-sm text-slate-800" />
          </div>
          <div className="space-y-1">
            <label htmlFor="country" className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Country</label>
            <CountrySelect />
          </div>
          <div className="space-y-1">
            <label htmlFor="phone" className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Phone Number</label>
            <input required name="phone" type="tel" id="phone" placeholder="Enter Phone Number" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all text-sm text-slate-800" />
          </div>
        </>
      ) : (
        <>
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
        </>
      )}

      <button
        disabled={status === 'submitting'}
        type="submit"
        className={`w-full md:w-auto px-10 py-4 rounded-md uppercase tracking-[0.2em] text-xs font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed mt-4 cursor-pointer text-white ${isLeadForm ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-violet-600 hover:bg-violet-700'}`}
      >
        {status === 'submitting' ? 'Processing...' : (isLeadForm ? 'Submit My Request' : 'Send Message')}
      </button>
    </form>
  );
};

export default ContactForm;
