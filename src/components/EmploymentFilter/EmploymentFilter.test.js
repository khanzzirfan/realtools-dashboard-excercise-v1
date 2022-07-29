import '@testing-library/jest-dom';
import { render } from '../../testUtils';
import { EmploymentGroup } from './EmploymentFilter';

describe('EmploymentGroup', () => {
  it('should renders correctly with custom css', () => {
    const { asFragment } = render(<EmploymentGroup>Contractor</EmploymentGroup>);
    expect(asFragment()).toMatchSnapshot();
  });
});
