import { SearchFieldWrapper, StyledIconSearch, SearchInput } from './Styles';
import PropTypes from 'prop-types';

export default function Search({ placeholder, value, ...props }) {
  return (
    <SearchFieldWrapper filled={!!value}>
      <StyledIconSearch />
      <SearchInput
        type="search"
        id={'search'}
        aria-label="Search for employees"
        label=""
        placeholder={placeholder}
        value={value}
        {...props}
      />
    </SearchFieldWrapper>
  );
}

Search.propsTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
};
