import React, { useState } from 'react';

const SearchBar = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
        className="w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
      <ul className="mt-4 space-y-2">
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>          
  );
};

export default SearchBar;