import React from 'react';
import { screen } from '@testing-library/react';
import WidgetsTablePage from './WidgetsTablePage';
import { renderWithRouter } from '../../util/testUtils';

test('renders banner, search, and table', () => {
  renderWithRouter(<WidgetsTablePage />, { route: '/widget-types' });
  expect(screen.getByRole('banner')).toBeInTheDocument();
  expect(screen.getByRole('search')).toBeInTheDocument();
  expect(screen.getByRole('table')).toBeInTheDocument();
});
