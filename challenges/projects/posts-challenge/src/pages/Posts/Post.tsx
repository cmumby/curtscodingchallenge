/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useContext } from 'react';
import './Post.css';
import { Post as PostType, Comment as CommentType } from '../../types';
import { PostContex as PostContexInterface } from '../../interfaces';

import { useParams } from 'react-router-dom';
import DataContext from '../../DataContext';
import Comment from '../../components/Comment/Comment';
import CommentPostForm from '../../components/CommentPostForm/CommentPostForm';
import { fetchData } from '../../utils';
import uniqid from 'uniqid';

function Post(): JSX.Element {
  const [comments, setComments] = useState<CommentType[]>();
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const context = useContext(DataContext);
  const { state, setState } = context || {};
  const { postId } = useParams<{ postId: string }>();
  const id: number = postId as unknown as number;
  const postIdNumber = postId ? parseInt(postId, 10) : undefined;
  const post = (state as any)?.posts?.find((post: PostType) => post.id === postIdNumber);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!post) {
        setNotFound(true);
        setLoading(false);
      }
    }, 3000);

    const saveData = async () => {
      try {
        const results: CommentType[] = await fetchData(
          `https://jsonplaceholder.typicode.com/comments?postId=${postIdNumber}`,
        );

        if (setState) {
          setState((prevState: any) => ({
            ...prevState,
            comments: {
              ...prevState.comments,
              [id]: results,
            },
          }));
        }

        setComments(results);
      } catch (error) {
        console.error('Error fetching comments:', error);
      } finally {
        clearTimeout(timeoutId);
        setLoading(false);
      }
    };

    if (postIdNumber) {
      saveData();
    }

    return () => clearTimeout(timeoutId);
  }, [id, postIdNumber, setState]);

  useEffect(() => {
    if (post) {
      setLoading(false);
      setNotFound(false);
    }
  }, [post]);

  if (loading) {
    return <div>Loading Post...</div>;
  }

  if (notFound) {
    return <h1>Invalid post ID</h1>;
  }

  if (!post || !comments) {
    return <h1>Invalid post ID</h1>;
  }

  const relatedComments = (comments as CommentType[]).map((comment: CommentType) => {
    return <Comment key={uniqid()} details={comment} />;
  });
  const { title, body } = post;
  return (
    <div className="post">
      <h1>{title}</h1>
      <main className="details">
        <article>{body}</article>
      </main>
      <h2>Comments ({relatedComments.length})</h2>
      <div className="seperator" />
      <section className="comments">{relatedComments}</section>
      <CommentPostForm
        postInfo={
          {
            ...state,
            comments: {
              [id]: comments,
            },
          } as PostContexInterface
        }
      />
    </div>
  );
}

export default Post;
