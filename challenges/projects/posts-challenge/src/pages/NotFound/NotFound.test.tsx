import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';
import '@testing-library/jest-dom';

test('renders 404 message', () => {
  render(<NotFound />);
  const headingElement = screen.getByRole('heading', { level: 1, name: /404: Page Not Found/i });
  const paragraphElement = screen.getByText(/The information requested was not found on this server/i);
  const linkElement = screen.getByRole('link', { name: /Go to Homepage/i });

  expect(headingElement).toBeInTheDocument();
  expect(paragraphElement).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
});
