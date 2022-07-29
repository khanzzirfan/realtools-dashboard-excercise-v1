import React from 'react';
import PropTypes from 'prop-types';
import { StyledLink } from './Styles';

const LinkButton = ({ children, to, ...props }) => {
  return (
    <StyledLink to={to} {...props}>
      {children}
    </StyledLink>
  );
};

LinkButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default LinkButton;
