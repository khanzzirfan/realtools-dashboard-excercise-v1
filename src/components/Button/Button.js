import { ButtonStyled } from './Button.styled';
import PropTypes from 'prop-types';

export default function Button({ children, ...props }) {
  return (
    <ButtonStyled type="button" data-testid="styledbutton" {...props}>
      {children}
    </ButtonStyled>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['outlined', 'contained', null]),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
};
