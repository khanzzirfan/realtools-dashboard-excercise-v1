import React from 'react';
import PropTypes from 'prop-types';

const AppContext = React.createContext(null);

// Initial state for employee filters
const initialState = { contractor: false, employee: false, searchText: '' };

/**
 * App context to store Ui State. Such as filters etc.
 * @param {Any} Children
 * @returns
 */
export const AppContextProvider = ({ children }) => {
  const [filters, setFilters] = React.useState(initialState);
  return <AppContext.Provider value={{ filters, setFilters }}>{children}</AppContext.Provider>;
};

export default AppContext;

AppContextProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
