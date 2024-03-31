import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Catogerybar = () => {
  const [places, setPlaces] = useState([]);
  const [selectedPropertyType, setSelectedPropertyType] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [uniquePropertyTypes, setUniquePropertyTypes] = useState([]); // Empty array

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        let url = 'http://localhost:3000/place/getAllPlaces';
        if (selectedPropertyType) {
          url += `?property_type=${selectedPropertyType}`;
        }

        const response = await axios.get(url);
        setPlaces(response.data.places);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedPropertyType]);

  const handlePropertyTypeChange = (event) => {
    setSelectedPropertyType(event.target.value);
  };

  // Logic to extract unique property types using an if condition with case-sensitivity
  useEffect(() => {
    const uniqueTypes = [];
    places.forEach((place) => {
      const lowerCasePropertyType = place.property_type.toLowerCase();
      if (!uniqueTypes.includes(lowerCasePropertyType)) {
        uniqueTypes.push(lowerCasePropertyType);
      }
    });
    setUniquePropertyTypes(uniqueTypes);
  }, [places]);

  return (
    <div>
      {/* Your filter UI */}

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      {/* Display unique property types */}
      {uniquePropertyTypes.length > 0 && (
        <ul>
          {uniquePropertyTypes.map((type) => (
            <li key={type}>{type}</li>
          ))}
        </ul>
      )}

      {/* Place listing */}
      {places.length > 0 && (
        <ul>
          {places.map((place) => (
            <li key={place._id}>
              {/* Display place details here */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Catogerybar;