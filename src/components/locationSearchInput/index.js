import React, { useState, useEffect, useContext } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { MapPin } from 'react-feather';

import { LocationContext } from '../../context/locationContext';

import { Input, Field } from './style';
import Spinner from '../spinner';

const LocationSearchInput = React.forwardRef(
  ({ handleSelect, handleFocus }, ref) => {
    const [address, setAddress] = useState('');

    const handleSelectAddress = async (value) => {
      const results = await geocodeByAddress(value);
      const latLng = await getLatLng(results[0]);
      setAddress(value);
      handleSelect(latLng);
      ref.current.disabled = true;
    };

    const focus = () => {
      handleFocus();
      clear();
    };

    const clear = () => {
      ref.current.value = '';
      setAddress('');
    };

    return (
      <div>
        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={handleSelectAddress}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <Field>
                <MapPin color="#ffcd00" />
                <Input
                  onClick={() => focus()}
                  ref={ref}
                  {...getInputProps({
                    placeholder: 'Insira o endereço...',
                    className: 'location-search-input',
                  })}
                />
              </Field>

              <div
                className="autocomplete-dropdown-container"
                style={{
                  padding: 10,
                  borderWidth: 1,
                  borderColor:
                    suggestions.length > 0 ? '#dcdcdc' : 'transparent',
                  borderStyle: 'solid',
                }}
              >
                {loading && <Spinner />}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
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
  }
);

export default LocationSearchInput;
