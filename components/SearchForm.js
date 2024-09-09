"use client"; // Ensure this component is client-side

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use from next/navigation

const SearchForm = ({ data, dataType }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const router = useRouter();

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    if (value) {
      const filteredResults = data.filter((item) =>
        item.title.toLowerCase().includes(value)
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  const handleResultClick = (slug) => {
    router.push(`/${dataType}/${slug}`);
  };

  return (
    <div className="max-w-sm mx-auto"> {/* Adjusted width */}
      <form className="relative">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-base-content sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-base-content"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-base-content border border-base-300 rounded-lg bg-base-100 focus:ring-primary focus:border-primary"
            placeholder={`Search ${dataType}...`}
            value={query}
            onChange={handleSearchChange}
            required
          />
        </div>
      </form>

      {results.length > 0 && (
        <ul className="mt-2 bg-base-100 rounded-lg shadow-lg divide-y divide-base-300">
          {results.map((result) => (
            <li
              key={result.slug}
              className="p-2 text-sm cursor-pointer hover:bg-base-300" // Added text-sm for smaller text
              onClick={() => handleResultClick(result.slug)}
            >
              {result.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchForm;