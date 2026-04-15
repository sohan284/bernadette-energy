"use client"
import React, { useState, useRef, useEffect } from 'react';
import { countries } from '@/lib/countries';

export default function CountrySelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside and handle form reset
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    const form = dropdownRef.current?.closest('form');
    const handleReset = () => {
      setSelectedCountry('');
      setSearchQuery('');
    };
    if (form) form.addEventListener('reset', handleReset);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (form) form.removeEventListener('reset', handleReset);
    };
  }, []);

  const filteredCountries = countries.filter(country =>
    country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Hidden input to hold the value for form submission */}
      <input type="hidden" name="country" value={selectedCountry} required />

      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 cursor-pointer flex justify-between items-center outline-none transition-all focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-emerald-500"
      >
        <span className={`text-sm ${selectedCountry ? 'text-slate-800' : 'text-slate-500'}`}>
          {selectedCountry || "Please Select Country"}
        </span>
        <svg className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-md shadow-lg max-h-60 overflow-y-auto animate-in fade-in slide-in-from-top-2">
          <div className="sticky top-0 bg-slate-50 border-b border-slate-200 p-2">
            <div className="relative">
              <svg className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                className="w-full bg-white border border-slate-200 rounded-md pl-9 pr-3 py-2 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all text-slate-800"
              />
            </div>
          </div>
          
          <ul className="py-1">
            {filteredCountries.length > 0 ? (
              filteredCountries.map(country => (
                <li
                  key={country}
                  onClick={() => {
                    setSelectedCountry(country);
                    setIsOpen(false);
                    setSearchQuery('');
                  }}
                  className={`px-4 py-2 cursor-pointer text-sm hover:bg-emerald-50 transition-colors ${selectedCountry === country ? 'bg-emerald-100 text-emerald-800 font-medium' : 'text-slate-600'}`}
                >
                  {country}
                </li>
              ))
            ) : (
              <li className="px-4 py-3 text-sm text-slate-500 text-center">
                No countries found
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
