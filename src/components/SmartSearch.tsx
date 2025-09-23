'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, Filter, X, MapPin, GraduationCap, TrendingUp, Clock } from 'lucide-react';

interface SearchSuggestion {
  id: string;
  title: string;
  subtitle?: string;
  type: 'college' | 'career' | 'course' | 'location';
  icon?: React.ReactNode;
}

interface FilterOption {
  id: string;
  label: string;
  value: string;
  count?: number;
}

interface SmartSearchProps {
  placeholder?: string;
  suggestions?: SearchSuggestion[];
  filters?: {
    [key: string]: FilterOption[];
  };
  onSearch: (query: string, filters: Record<string, string[]>) => void;
  onSuggestionSelect?: (suggestion: SearchSuggestion) => void;
  showFilters?: boolean;
  recentSearches?: string[];
}

export default function SmartSearch({
  placeholder = "Search colleges, careers, courses...",
  suggestions = [],
  filters = {},
  onSearch,
  onSuggestionSelect,
  showFilters = true,
  recentSearches = []
}: SmartSearchProps) {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]);
  
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Filter suggestions based on query
  useEffect(() => {
    if (query.trim()) {
      const filtered = suggestions.filter(suggestion =>
        suggestion.title.toLowerCase().includes(query.toLowerCase()) ||
        suggestion.subtitle?.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuggestions(filtered.slice(0, 8)); // Limit to 8 suggestions
    } else {
      setFilteredSuggestions([]);
    }
  }, [query, suggestions]);

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query, selectedFilters);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setQuery(suggestion.title);
    setShowSuggestions(false);
    onSuggestionSelect?.(suggestion);
  };

  const handleFilterChange = (filterKey: string, value: string, checked: boolean) => {
    setSelectedFilters(prev => {
      const newFilters = { ...prev };
      if (!newFilters[filterKey]) {
        newFilters[filterKey] = [];
      }
      
      if (checked) {
        newFilters[filterKey] = [...newFilters[filterKey], value];
      } else {
        newFilters[filterKey] = newFilters[filterKey].filter(v => v !== value);
      }
      
      // Remove empty filter arrays
      if (newFilters[filterKey].length === 0) {
        delete newFilters[filterKey];
      }
      
      return newFilters;
    });
  };

  const clearFilters = () => {
    setSelectedFilters({});
  };

  const getActiveFilterCount = () => {
    return Object.values(selectedFilters).reduce((count, filters) => count + filters.length, 0);
  };

  const getSuggestionIcon = (type: string) => {
    switch (type) {
      case 'college':
        return <GraduationCap className="w-4 h-4 text-primary-500" />;
      case 'career':
        return <TrendingUp className="w-4 h-4 text-government-500" />;
      case 'location':
        return <MapPin className="w-4 h-4 text-green-500" />;
      default:
        return <Search className="w-4 h-4 text-neutral-400" />;
    }
  };

  return (
    <div className="relative" ref={searchRef}>
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-neutral-400" />
        </div>
        
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          placeholder={placeholder}
          className="w-full pl-10 pr-20 py-4 border border-neutral-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white shadow-sm text-base"
        />
        
        <div className="absolute inset-y-0 right-0 flex items-center space-x-2 pr-3">
          {showFilters && (
            <button
              onClick={() => setShowFilterPanel(!showFilterPanel)}
              className={`p-2 rounded-lg transition-colors relative ${
                showFilterPanel || getActiveFilterCount() > 0
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-neutral-400 hover:text-neutral-600'
              }`}
            >
              <Filter className="w-5 h-5" />
              {getActiveFilterCount() > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary-600 text-white text-xs rounded-full flex items-center justify-center">
                  {getActiveFilterCount()}
                </span>
              )}
            </button>
          )}
          
          <button
            onClick={handleSearch}
            className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Search
          </button>
        </div>
      </div>

      {/* Search Suggestions */}
      {showSuggestions && (query || recentSearches.length > 0) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-neutral-200 rounded-2xl shadow-2xl z-50 max-h-96 overflow-y-auto">
          {/* Recent Searches */}
          {!query && recentSearches.length > 0 && (
            <div className="p-4 border-b border-neutral-100">
              <h3 className="text-sm font-semibold text-neutral-700 mb-2">Recent Searches</h3>
              <div className="space-y-1">
                {recentSearches.slice(0, 5).map((search, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(search)}
                    className="flex items-center w-full p-2 text-left hover:bg-neutral-50 rounded-lg transition-colors"
                  >
                    <Clock className="w-4 h-4 text-neutral-400 mr-3" />
                    <span className="text-sm text-neutral-700">{search}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Suggestions */}
          {filteredSuggestions.length > 0 && (
            <div className="p-2">
              {filteredSuggestions.map((suggestion) => (
                <button
                  key={suggestion.id}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="flex items-center w-full p-3 text-left hover:bg-neutral-50 rounded-lg transition-colors"
                >
                  <div className="mr-3">
                    {suggestion.icon || getSuggestionIcon(suggestion.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-neutral-900 truncate">
                      {suggestion.title}
                    </div>
                    {suggestion.subtitle && (
                      <div className="text-xs text-neutral-500 truncate">
                        {suggestion.subtitle}
                      </div>
                    )}
                  </div>
                  <div className="text-xs text-neutral-400 capitalize">
                    {suggestion.type}
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* No Results */}
          {query && filteredSuggestions.length === 0 && (
            <div className="p-4 text-center text-neutral-500">
              <Search className="w-8 h-8 mx-auto mb-2 text-neutral-300" />
              <p className="text-sm">No suggestions found for "{query}"</p>
            </div>
          )}
        </div>
      )}

      {/* Filter Panel */}
      {showFilterPanel && showFilters && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-neutral-200 rounded-2xl shadow-2xl z-40 p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-neutral-800">Filters</h3>
            <div className="flex items-center space-x-2">
              {getActiveFilterCount() > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-primary-600 hover:text-primary-700"
                >
                  Clear All
                </button>
              )}
              <button
                onClick={() => setShowFilterPanel(false)}
                className="p-1 hover:bg-neutral-100 rounded"
              >
                <X className="w-5 h-5 text-neutral-400" />
              </button>
            </div>
          </div>

          <div className="space-y-4 max-h-64 overflow-y-auto">
            {Object.entries(filters).map(([filterKey, options]) => (
              <div key={filterKey}>
                <h4 className="text-sm font-semibold text-neutral-700 mb-2 capitalize">
                  {filterKey.replace(/([A-Z])/g, ' $1').trim()}
                </h4>
                <div className="space-y-2">
                  {options.map((option) => (
                    <label key={option.id} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedFilters[filterKey]?.includes(option.value) || false}
                        onChange={(e) => handleFilterChange(filterKey, option.value, e.target.checked)}
                        className="w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-neutral-700">
                        {option.label}
                        {option.count && (
                          <span className="text-neutral-400 ml-1">({option.count})</span>
                        )}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end space-x-3 mt-4 pt-4 border-t border-neutral-200">
            <button
              onClick={() => setShowFilterPanel(false)}
              className="px-4 py-2 text-neutral-600 hover:text-neutral-800 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                handleSearch();
                setShowFilterPanel(false);
              }}
              className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
