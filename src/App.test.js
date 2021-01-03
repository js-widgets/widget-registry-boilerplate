import React from 'react';
import { screen } from '@testing-library/react';
import App from './App';
import { renderWithRouter } from './util/testUtils';

test('renders loading spinner', async () => {
  renderWithRouter(<App />);
  const loadingSpinner = screen.getAllByText(/active loading indicator/i);
  expect(loadingSpinner).toHaveLength(2);
});
