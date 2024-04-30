import React from 'react';
import './Notfound.css'; // Import the CSS file for styling

const Notfound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-heading">404 - Page Not Found</h1>
      <p className="not-found-text">Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default Notfound;
