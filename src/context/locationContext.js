import React, { useState, createContext } from 'react';

const LocationContext = createContext();
const LocationProvider = (props) => {
  const [location, setLocation] = useState({
    // canSubmit: false,
    coordinates: { lat: null, lng: null },
    address: '',
  });
  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {props.children}
    </LocationContext.Provider>
  );
};

export { LocationContext, LocationProvider };
