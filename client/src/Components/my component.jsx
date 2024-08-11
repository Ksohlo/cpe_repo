import React, { useState, useEffect } from 'react';
import { fetchDataFromBackend } from '../services/api';

function MyComponent() {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchDataFromBackend();
        setData(result);
      } catch (error) {
        // Handle error
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from backend: {data}</h1>
    </div>
  );
}

export default MyComponent;