import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../client/App';

describe('Initial App Contents', () => {
  beforeEach(async () => {
    await act(async () => {
      render(<App />);
    });
  });
  // screen.debug();

  it('renders ReachRX logo', () => {
    expect(screen.queryByAltText('ReachRX logo')).toBeInTheDocument();
  });

  it('renders App component', () => {
    expect(screen.queryByText('Schedule A Meeting')).toBeInTheDocument();
  });

  it('renders a loading message while waiting for the fetch to complete', () => {
    expect(screen.queryByText('loading...')).toBeInTheDocument();
  });

  // This one may seem unneccesary, but I like to put it in.
  it('does not contain lorem ipsum', () => {
    expect(screen.queryByText('lorem ipsum')).not.toBeInTheDocument();
  });

});

