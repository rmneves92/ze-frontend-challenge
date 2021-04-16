import React, { useState, useRef, useEffect, useContext } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { MapPin } from 'react-feather';

import { LocationContext } from '../../context/locationContext';

import { Input, DivTest } from './style';

const LocationSearchInput = ({ handleSelect }) => {
  const inputRef = useRef();
  const [address, setAddress] = useState('');

  const handleSelectAddress = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    handleSelect(latLng);
    inputRef.current.disabled = true;
  };

  const handleFocus = () => {
    inputRef.current.focus();
    inputRef.current.disabled = false;
    clear();
  };

  const clear = () => {
    inputRef.current.value = '';
    setAddress('');
  };

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelectAddress}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <DivTest>
              <MapPin />
              <Input
                onClick={() => handleFocus()}
                ref={inputRef}
                {...getInputProps({
                  placeholder: 'Digite o endereço...',
                  className: 'location-search-input',
                })}
              />
            </DivTest>

            <div
              className="autocomplete-dropdown-container"
              style={{
                padding: 10,
                borderWidth: 1,
                borderColor: suggestions.length > 0 ? '#dcdcdc' : 'transparent',
                borderStyle: 'solid',
              }}
            >
              {loading && <div>Buscando...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? {
                      backgroundColor: '#fafafa',
                      cursor: 'pointer',
                      padding: 10,
                    }
                  : {
                      backgroundColor: '#ffffff',
                      cursor: 'pointer',
                      padding: 10,
                    };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};

export default LocationSearchInput;
