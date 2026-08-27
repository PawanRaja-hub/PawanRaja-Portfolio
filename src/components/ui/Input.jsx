import React from 'react';

export const Input = ({ type = 'text', placeholder, value, onChange, className = '', required = false, disabled = false }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
      className={`w-full px-4 py-3 rounded-lg border border-transparent focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0a0a20] bg-white/5 text-white placeholder-slate-400 transition-all duration-300 shadow-sm ${className}`}
    />
  );
};