import { Field, Label, Hint } from '../FieldParts';
import { Input } from './TextField.styled';
import PropTypes from 'prop-types';

export default function TextField({ id, label, helper, errorMsg, ...props }) {
  const invalidAttr = errorMsg ? { 'aria-invalid': true } : {};

  return (
    <Field as="label">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...props} {...invalidAttr} />
      {errorMsg && <Hint errorMsg={errorMsg} helper={helper} />}
    </Field>
  );
}

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  helper: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  errorMessage: PropTypes.string,
};

TextField.defaultProps = {
  type: 'text',
};
