import React from 'react';
import currencyFormatter from 'currency-formatter';
import PropTypes from 'prop-types';

const CurrencyText = ({ currency, value }) => {
  if (!value) return null;
  const formattedValue = currencyFormatter.format(value, {
    code: currency,
    format: `%s ${currency} %v`,
    ...(currency === 'EUR' && { thousand: '.' }),
  });

  return <>{formattedValue}</>;
};

export default CurrencyText;

CurrencyText.props = {
  currency: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};
