import '@testing-library/jest-dom';
import { render } from '../../testUtils';
import TextField, { TextLight } from './Text';

describe('TextField', () => {
  it('should renders correctly as span element and h1 typography styles', () => {
    const { asFragment } = render(
      <TextField as="span" size="h1">
        Contractor
      </TextField>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should renders correctly as span element and h2typography styles', () => {
    const { asFragment } = render(
      <TextField as="span" size="h2">
        Contractor
      </TextField>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should renders correctly as span element and h3 typography styles', () => {
    const { asFragment } = render(
      <TextField as="span" size="h3">
        Contractor
      </TextField>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should renders correctly as span element and h4 typography styles', () => {
    const { asFragment } = render(
      <TextField as="span" size="h4">
        Contractor
      </TextField>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should renders correctly as p element and bodyLead typography styles', () => {
    const { asFragment } = render(
      <TextField as="p" size="bodyLead">
        Contractor
      </TextField>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should renders correctly as p element and body typography styles', () => {
    const { asFragment } = render(
      <TextField as="p" size="body">
        Contractor
      </TextField>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should renders correctly as p element and bodyMedium typography styles', () => {
    const { asFragment } = render(
      <TextField as="p" size="bodyMedium">
        Contractor
      </TextField>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should renders correctly as p element and bodyBold typography styles', () => {
    const { asFragment } = render(
      <TextField as="p" size="bodyBold">
        Contractor
      </TextField>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should renders correctly as p element and bodySmall typography styles', () => {
    const { asFragment } = render(
      <TextField as="p" size="bodySmall">
        Contractor
      </TextField>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should renders correctly as p element and bodySmallBold typography styles', () => {
    const { asFragment } = render(
      <TextField as="p" size="bodySmallBold">
        Contractor
      </TextField>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should renders correctly as p element and bodySmallMedium typography styles', () => {
    const { asFragment } = render(
      <TextField as="p" size="bodySmallMedium">
        Contractor
      </TextField>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should renders correctly as p element and bodyCaption typography styles', () => {
    const { asFragment } = render(
      <TextField as="p" size="bodyCaption">
        Contractor
      </TextField>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should renders light text as p element', () => {
    const { asFragment } = render(
      <TextLight as="p" size="bodyCaption">
        Contractor
      </TextLight>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
