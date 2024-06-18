import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import DropDownSelector from './DropDownSelector';
import '@testing-library/jest-dom';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

test('renders dropdown selector with options', () => {
  render(
    <Router>
      <DropDownSelector options={options} />
    </Router>,
  );

  expect(screen.getByText('Select a Post')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('combobox'));

  options.forEach(option => {
    expect(screen.getByText(option.label)).toBeInTheDocument();
  });
});

test('selects an option when clicked', () => {
  render(
    <Router>
      <DropDownSelector options={options} />
    </Router>,
  );

  fireEvent.click(screen.getByRole('combobox'));
});
