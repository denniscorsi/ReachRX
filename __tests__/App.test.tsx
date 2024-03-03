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

  // it('applies css', () => {
  //   // const { container } = render(<App />);
  //   // expect(container.querySelector('body')).toHaveStyle(
  //   //   'background-color: #073268'
  //   // );

  //   // const body = document.body;
  //   const body = document.documentElement;
  //   expect(getComputedStyle(body).backgroundColor).toBe('#073268');
  // });
});

// // The following tests are based on the development database contents. These should be altered if the dev database is altered.
// describe('Fetched App Contents', () => {
//   beforeEach(() => {
//     render(<App />);
//   });

//   it('renders Dr. Jared Reid', async () => {
//     await waitFor(() => {
//       expect(screen.queryByText('loading...')).toBeNull();
//     });

//     // Assert on the content that should be rendered after data fetch completes
//     expect(screen.getByText('Dr. Jared Reid')).toBeInTheDocument();
//   });
// });
