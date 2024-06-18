import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Comment from './Comment';
export interface DetailsProps {
  id: number;
  body: string;
  email: string;
  name: string;
  userId: number;
  postId: number;
}

export interface CommentProps {
  id: number;
  body: string;
  email: string;
  name: string;
  userId: number;
  postId: number;
}

describe('Comment component', () => {
  const mockDetails: DetailsProps = {
    id: 1,
    body: 'This is a comment body.',
    email: 'test@example.com',
    name: 'John Doe',
    userId: 1,
    postId: 1,
  };

  it('should render the comment details correctly', () => {
    render(<Comment details={mockDetails} />);

    expect(screen.getByText('John Doe -')).toBeInTheDocument();
    expect(screen.getByText('test@example.com')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'test@example.com' })).toHaveAttribute(
      'href',
      'mailto:test@example.com',
    );

    const bodyContainer = screen.getByText('This is a comment body.').closest('.body-container');
    expect(bodyContainer).toHaveAttribute('data-commentid', '1');
  });
});
