import { CommentProps } from '../../interfaces';
import './Comment.css';
const Comment = ({ details }: CommentProps) => {
  const { id, body, email, name } = details;
  return (
    <div className="comment">
      <div className="content">
        <h3 className="user-info">
          {name} - <a href={`mailto:${email}`}>{email}</a>
        </h3>

        <div className="body-container" data-commentid={id}>
          <p className="body">{body}</p>
        </div>
      </div>
      <div className="seperator" />
    </div>
  );
};

export default Comment;
