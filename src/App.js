import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from './theme';
import Header from './components/Header';
import Playground from './pages/Playground';
import People from './pages/People';
import AddEditPeople from './pages/AddEditPeople';
import { AppContextProvider } from './hooks/useAppContext';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <BrowserRouter>
            <Header />
            <Switch>
              <Route path="/people" exact>
                <People />
              </Route>
              <Route path="/people/new">
                <AddEditPeople />
              </Route>
              <Route path="/people/edit/:id">
                <AddEditPeople />
              </Route>
              <Route path="/playground">
                <Playground />
              </Route>
              <Route path="*">
                <Redirect to="/people" />
              </Route>
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </AppContextProvider>
    </QueryClientProvider>
  );
}
