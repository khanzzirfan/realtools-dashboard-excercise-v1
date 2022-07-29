import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';
import { AppContextProvider } from './hooks/useAppContext';
import { theme } from './theme';

const AllTheProviders = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // ✅ turns retries off
        retry: 2,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <ThemeProvider theme={theme}>
          <MemoryRouter initialEntries={['/people', '/people/new', '/people/edit/:id']}>
            {children}
          </MemoryRouter>
        </ThemeProvider>
      </AppContextProvider>
    </QueryClientProvider>
  );
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
