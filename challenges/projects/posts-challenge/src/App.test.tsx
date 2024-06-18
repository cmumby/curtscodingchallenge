import { render } from '@testing-library/react';
import App from './App';
import DataContext from './DataContext';

// Mock DataContext value
const mockValue = {
  state: { posts: [], comments: [] },
  setState: jest.fn(),
};

test('renders App component', () => {
  render(
    <DataContext.Provider value={mockValue}>
      <App />
    </DataContext.Provider>,
  );
});
