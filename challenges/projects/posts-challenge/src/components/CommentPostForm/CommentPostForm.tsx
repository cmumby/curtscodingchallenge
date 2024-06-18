/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useContext } from 'react';
import './CommentPostForm.css';
import { postData } from '../../utils';
import DataContext from '../../DataContext';
import { Comment, CommentPost } from '../../types';
import { PostContex as PostContexInterface } from '../../interfaces';
const { VITE_USER_ID: USER_ID } = import.meta.env; // creating a user id since this won't have real users or a login process
import { useParams } from 'react-router-dom';

const CommentPostForm = (): JSX.Element => {
  const { postId } = useParams<{ postId: string }>();
  const id: number = postId as unknown as number;
  const context = useContext(DataContext);
  const { state, setState } = context || {};
  const initCommentPost: CommentPost = {
    name: null,
    email: null,
    body: null,
  };

  const [commentFormData, setComentFormData] = useState<CommentPost>(initCommentPost);
  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event?.preventDefault();
    const newComment: Comment = { ...commentFormData, id: null, postId: id, userId: USER_ID as number };
    const response = await postData('https://jsonplaceholder.typicode.com/comments', newComment);
    const newState: PostContexInterface = { ...state } as PostContexInterface;
    newState?.comments[id].push(response);
    if (context && setState !== undefined) {
      setState(newState as any);
    }
  };
  const handleFormUpdate = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    const commentPost: CommentPost = { ...commentFormData, [name]: value };

    setComentFormData(commentPost);
  };
  const { name, email, body } = commentFormData;
  return (
    <div className="comment-post-form">
      <div className="card">
        <form>
          <h2>Add a Comment</h2>
          <div className="commentor-info">
            <input
              className="input-text"
              type="text"
              name="name"
              value={name as string}
              placeholder="Your Name..."
              onChange={handleFormUpdate}
            />
            <input
              className="input-text"
              type="text"
              name="email"
              value={email as string}
              placeholder="Email@address.enter..."
              onChange={handleFormUpdate}
            />
          </div>
          <div className="commentor-info input">
            <textarea
              className="input-textarea"
              name="body"
              rows={4}
              cols={50}
              value={body as string}
              onChange={handleFormUpdate}
            />
            <button className="btn" type="button" onClick={handleSubmit}>
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentPostForm;
