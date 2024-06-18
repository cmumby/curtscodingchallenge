import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="message">404: Page Not Found</h1>

      <p>The information requested was not found on this server.</p>
      <a href="/">Go to Homepage</a>
    </div>
  );
};

export default NotFound;
