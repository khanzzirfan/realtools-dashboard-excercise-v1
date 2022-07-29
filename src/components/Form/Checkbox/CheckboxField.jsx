import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Text from 'components/Text';

const StyledBox = styled.span`
  position: relative;
  display: inline-block;
  width: 14px;
  height: 14px;
  vertical-align: middle;
  background-color: var(--colors-linkWater);
  border: 1px solid var(--colors-spindle);
  border-radius: 2px;
  transition: all 150ms;

  &:hover {
    border: 1px solid var(--colors-irisBlue);
    box-sizing: border-box;
  }
`;

const StyledRectCheckbox = styled.span`
  display: block;
  position: absolute;
  top: 2px;
  left: 2px;
  width: 8px;
  height: 8px;
  background-color: var(--colors-irisBlue);
`;

const checkMarkStyle = css`
  border: 1px solid var(--colors-irisBlue);
  box-sizing: border-box;
`;

export const CheckboxContainer = styled.label`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 13px 8px 12px;
  border: 1.5px solid var(--colors-spindle);
  border-radius: 12px;
  outline: none;
  &:hover,
  &:active {
    background: var(--colors-linkWater);
    ${StyledBox} {
      ${checkMarkStyle}
    }
  }

  &:focus,
  &:focus-within {
    background: var(--colors-linkWater);
    box-shadow: 0px 0px 0px 2px var(--colors-irisBlue);
    ${StyledBox} {
      ${checkMarkStyle}
    }
  }
`;

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  box-sizing: border-box;
`;

const Checkbox = ({ id, label, checked, name, ...props }) => (
  <React.Fragment>
    <CheckboxContainer
      htmlFor={`checkbox-${id || label}`}
      name={name}
      data-testid="checkboxcontainer"
    >
      <Text as="span" size="bodySmallMedium" mr={11} data-testid="checkboxlabel">
        {label}
      </Text>
      <HiddenCheckbox
        id={`checkbox-${id || label}`}
        checked={!!checked}
        value={name}
        name={name}
        {...props}
      />
      <StyledBox>{checked && <StyledRectCheckbox data-testid="innercheckmark" />}</StyledBox>
    </CheckboxContainer>
  </React.Fragment>
);

export default Checkbox;

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
};
