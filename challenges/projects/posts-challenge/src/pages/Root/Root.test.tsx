/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen, waitFor } from '@testing-library/react';
import { Option } from '../../types';
import Root from './Root';
import '@testing-library/jest-dom';

jest.mock('../../components/DropDownSelector/DropDownSelector', () => {
  return function MockDropDownSelector(props: any) {
    return (
      <select onChange={props.onChange} value={props.value}>
        {props.options.map((option: Option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  };
});

describe('Root component', () => {
  test('renders dropdown with options', async () => {
    render(<Root />);

    await waitFor(() => screen.getByRole('combobox'));

    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });
});
