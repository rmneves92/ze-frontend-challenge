import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { MapPin } from 'react-feather';
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

    const searchOptions = {
      componentRestrictions: {
        country: 'BR',
      },
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
          searchOptions={searchOptions}
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
                  data-testid="autocomplete"
                  onClick={() => focus()}
                  ref={ref}
                  {...getInputProps({
                    placeholder: 'Insira o endereço...',
                    className: 'location-search-input',
                  })}
                />
              </Field>

              <div
                data-testid="options"
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
                      key={suggestion.key}
                      data-testid="suggestion"
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

LocationSearchInput.propTypes = {
  handleSelect: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
};

export default LocationSearchInput;
