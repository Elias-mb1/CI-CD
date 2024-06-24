import React from 'react';
import { render, screen } from '@testing-library/react';
import Page from './page';

test('renders the main heading', () => {
  render(<Page />);
  const headingElement = screen.getByRole('heading', { name: /main heading/i });
  expect(headingElement).toBeInTheDocument();
});

test('renders a specific link', () => {
  render(<Page />);
  const linkElement = screen.getByText(/specific link text/i);
  expect(linkElement).toBeInTheDocument();
});
