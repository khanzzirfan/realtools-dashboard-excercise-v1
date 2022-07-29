import '@testing-library/jest-dom';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import 'jest-axe/extend-expect';

import { server } from './uiMocks/server';
import { setLogger } from 'react-query';

setLogger({
  log: console.log,
  warn: console.warn,
  // ✅ no more errors on the console
  error: () => {},
});

beforeAll(() => {
  // Enable the mocking in tests.
  server.listen();
});

afterEach(() => {
  // Reset any runtime handlers tests may use.
  server.resetHandlers();
});

afterAll(() => {
  // Clean up once the tests are done.
  server.close();
});
