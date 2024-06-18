/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, Dispatch } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CommentPostForm from './CommentPostForm';
import DataContext from '../../DataContext';

import { PostContex } from '../../interfaces';

jest.mock('../../utils', () => ({
  postData: jest.fn(),
}));

interface Comment {
  id: number | null;
  name: string | null;
  email: string | null;
  body: string | null;
  postId: number;
  userId: number;
}

interface PostContextState {
  comments: { [key: number]: Comment[] };
  posts: any[];
}

interface PostContextInterface {
  state: PostContextState;
  setState: Dispatch<React.SetStateAction<PostContex>>;
}

const setState = jest.fn();

const contextValue: PostContextInterface = {
  state: {
    comments: { 1: [] },
    posts: [],
  },
  setState,
};

const DataContextProvider = ({ children }: { children: ReactNode }) => (
  <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
);

describe('CommentPostForm', () => {
  beforeEach(() => {
    render(
      <DataContextProvider>
        <CommentPostForm postInfo={contextValue as unknown as PostContex} />
      </DataContextProvider>,
    );
  });

  test('renders the form fields correctly', () => {
    expect(screen.getByPlaceholderText('Your Name...')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email@address.enter...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /post/i })).toBeInTheDocument();
  });

  test('updates form fields on user input', () => {
    const nameInput = screen.getByPlaceholderText('Your Name...');
    const emailInput = screen.getByPlaceholderText('Email@address.enter...');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });

    expect(nameInput).toHaveValue('John Doe');
    expect(emailInput).toHaveValue('john@example.com');
  });
});
