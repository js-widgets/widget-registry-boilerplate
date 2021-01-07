import React from 'react';
import { screen } from '@testing-library/react';
import WidgetTypePage from './WidgetTypePage';
import { renderWithRouter } from '../../util/testUtils';
import publicUrl from '../../util/publicUrl';

test('renders banner, search, and table', () => {
  renderWithRouter(
    <WidgetTypePage
      match={{
        params: { shortCode: 'example-widget' },
        isExact: true,
        path: '',
        url: '',
      }}
    />,
    {
      route: `${publicUrl}/widget-type/imb-widget-boilerplate`,
    },
  );
  expect(screen.getByRole('banner')).toBeInTheDocument();
  expect(screen.getByRole('tabpanel')).toBeInTheDocument();
  expect(screen.queryAllByRole('heading')).toHaveLength(5);
  expect(screen.queryAllByRole('article')).toHaveLength(4);
});
