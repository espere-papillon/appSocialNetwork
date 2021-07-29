import React from 'react';
import { render, screen } from '@testing-library/react';
import {AppContainer} from "./AppContainer";

test('renders without crashing', () => {
  render(<AppContainer />);
  const linkElement = screen.getByText(/profile/i);
  expect(linkElement).toBeInTheDocument();
});
