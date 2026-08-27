import React, { createContext, useContext, useState, useEffect } from 'react';
import { defaultPortfolioData } from '../data/portfolioData';

const PortfolioContext = createContext();

const STORAGE_KEY = 'iportfolio_data_storage_v1';

export const PortfolioProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          return JSON.parse(saved);
        }
      } catch (err) {
        console.error('Error loading portfolio data from localStorage:', err);
      }
    }
    return defaultPortfolioData;
  });

  const [isEditorOpen, setIsEditorOpen] = useState(false);

  // Sync to local storage
  const updateData = (newData) => {
    setData(newData);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    } catch (err) {
      console.error('Error saving portfolio data to localStorage:', err);
    }
  };

  const resetToDefault = () => {
    setData(defaultPortfolioData);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (err) {
      console.error('Error resetting portfolio data:', err);
    }
  };

  const updateSection = (sectionKey, newSectionData) => {
    const updated = {
      ...data,
      [sectionKey]: newSectionData,
    };
    updateData(updated);
  };

  return (
    <PortfolioContext.Provider
      value={{
        data,
        updateData,
        updateSection,
        resetToDefault,
        isEditorOpen,
        setIsEditorOpen,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
