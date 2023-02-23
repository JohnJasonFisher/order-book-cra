

import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './index';

it('renders header component with text', () => {
  render(<Header options={[0.5, 1, 2.5]} />);
  const txtElement = screen.getByText(/Order Book/i);
  expect(txtElement).toBeInTheDocument();
});
