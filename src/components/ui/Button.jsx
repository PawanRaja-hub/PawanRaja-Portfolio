import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload, FaEnvelope, FaCopy } from 'react-icons/fa';

export const Button = ({ children, variant = 'primary', size = 'md', className = '', onClick, type = 'button', disabled = false, icon = null, iconPosition = 'right' }) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0a0a20] focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-gradient-to-r from-blue-700 to-blue-500 text-white hover:from-blue-600 hover:to-blue-400 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5',
    secondary: 'glass-card text-blue-300 border border-blue-500/30 hover:border-blue-500/60 hover:bg-blue-500/10',
    ghost: 'text-slate-300 hover:text-white hover:bg-white/5',
    outline: 'border-2 border-blue-500/50 text-blue-300 hover:border-blue-400 hover:text-blue-200 hover:bg-blue-500/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const IconComponent = icon;

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {iconPosition === 'left' && icon && <IconComponent className="w-4 h-4" />}
      {children}
      {iconPosition === 'right' && icon && <IconComponent className="w-4 h-4" />}
    </motion.button>
  );
};

export const CopyButton = ({ email, className = '' }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <motion.button
      onClick={handleCopy}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${className}`}
    >
      {copied ? (
        <>
          <FaCopy className="w-4 h-4 text-green-400" />
          <span className="text-green-400">Copied!</span>
        </>
      ) : (
        <>
          <FaCopy className="w-4 h-4" />
          <span>Copy Email</span>
        </>
      )}
    </motion.button>
  );
};