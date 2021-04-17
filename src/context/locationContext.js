import React, { useState, createContext } from 'react';

const LocationContext = createContext();
const LocationProvider = (props) => {
  const [location, setLocation] = useState({
    distributor: '',
  });
  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {props.children}
    </LocationContext.Provider>
  );
};

export { LocationContext, LocationProvider };
