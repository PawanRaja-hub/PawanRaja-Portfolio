import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import * as defaultConstants from '../constants';

const PortfolioContext = createContext(null);

const CACHE_KEY = 'pawanraja_portfolio_dynamic_v1';
const CACHE_TIME_KEY = 'pawanraja_portfolio_cache_time_v1';
const CACHE_TTL_MS = 30 * 1000; // 30 seconds

export const PortfolioProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    // 1. Try local cache first for instant zero-latency render
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        return JSON.parse(cached);
      }
    } catch (e) {
      // ignore
    }

    // 2. Fallback to bundled constants
    return {
      personalInfo: defaultConstants.personalInfo,
      stats: defaultConstants.stats,
      skills: defaultConstants.skills,
      projects: defaultConstants.projects,
      services: defaultConstants.services,
      experience: defaultConstants.experience,
      education: defaultConstants.education,
      certifications: defaultConstants.certifications,
      testimonials: defaultConstants.testimonials,
    };
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPortfolioData = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/portfolio?t=${Date.now()}`, {
        headers: { 'Accept': 'application/json', 'Cache-Control': 'no-cache' },
      });

      if (!res.ok) {
        throw new Error(`API returned status ${res.status}`);
      }

      const remoteData = await res.json();
      if (remoteData && remoteData.personalInfo) {
        setData(remoteData);
        localStorage.setItem(CACHE_KEY, JSON.stringify(remoteData));
        localStorage.setItem(CACHE_TIME_KEY, Date.now().toString());
        setError(null);
      }
    } catch (err) {
      console.warn('PortfolioContext: Falling back to local/cached constants', err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // 1. Initial live fetch on mount
    fetchPortfolioData();

    // 2. Refetch whenever user returns to tab (e.g. after editing in Admin dashboard)
    const onFocus = () => fetchPortfolioData();
    window.addEventListener('focus', onFocus);

    // 3. Listen to local storage changes across tabs
    const onStorage = (e) => {
      if (e.key === 'portfolio_data_backup' && e.newValue) {
        try {
          setData(JSON.parse(e.newValue));
        } catch (err) {
          // ignore
        }
      }
    };
    window.addEventListener('storage', onStorage);

    return () => {
      window.removeEventListener('focus', onFocus);
      window.removeEventListener('storage', onStorage);
    };
  }, [fetchPortfolioData]);

  const value = {
    data,
    personalInfo: data.personalInfo || defaultConstants.personalInfo,
    stats: data.stats || defaultConstants.stats,
    skills: data.skills || defaultConstants.skills,
    projects: data.projects || defaultConstants.projects,
    services: data.services || defaultConstants.services,
    experience: data.experience || defaultConstants.experience,
    education: data.education || defaultConstants.education,
    certifications: data.certifications || defaultConstants.certifications,
    testimonials: data.testimonials || defaultConstants.testimonials,
    loading,
    error,
    refreshData: () => fetchPortfolioData(true),
  };

  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>;
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
