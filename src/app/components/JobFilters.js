// components/JobFilters.js
'use client';
import { useState } from 'react';
import '../styles/filters.module.css';

export default function JobFilters() {
  const [filters, setFilters] = useState({
    location: '',
    experience: '',
    category: ''
  });

  const locations = ['All Locations', 'HITEC City', 'Madhapur', 'Gachibowli', 'Banjara Hills', 'Secunderabad', 'Ameerpet'];
  const experiences = ['All Experience', 'Fresher', '0-1 Year', '1-3 Years', '3-5 Years', '5+ Years'];
  const categories = ['All Categories', 'IT/Software', 'Sales', 'Marketing', 'HR', 'Admin', 'Customer Service'];

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  return (
    <div className="filters-container">
      <div className="filter-group">
        <select 
          className="filter-select" 
          value={filters.location}
          onChange={(e) => handleFilterChange('location', e.target.value)}
        >
          {locations.map(loc => (
            <option key={loc} value={loc === 'All Locations' ? '' : loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>
      
      <div className="filter-group">
        <select 
          className="filter-select"
          value={filters.experience}
          onChange={(e) => handleFilterChange('experience', e.target.value)}
        >
          {experiences.map(exp => (
            <option key={exp} value={exp === 'All Experience' ? '' : exp}>
              {exp}
            </option>
          ))}
        </select>
      </div>
      
      <div className="filter-group">
        <select 
          className="filter-select"
          value={filters.category}
          onChange={(e) => handleFilterChange('category', e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat === 'All Categories' ? '' : cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      
      <button className="filter-reset" onClick={() => setFilters({location: '', experience: '', category: ''})}>
        Reset Filters
      </button>
    </div>
  );
}