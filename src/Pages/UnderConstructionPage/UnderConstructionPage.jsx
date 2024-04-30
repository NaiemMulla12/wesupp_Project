import React from 'react';
import './UnderConstructionPage.css'; // Import the CSS file for styling

const UnderConstructionPage = () => {
  return (
    <div className="construction-container">
      <div className="construction-content">
        <h1 className="construction-heading">Under Construction</h1>
        <p className="construction-text">We are currently working on this page. Please check back later!</p>
        <img className="construction-image" src="construction_image.png" alt="Under Construction" />
      </div>
    </div>
  );
};

export default UnderConstructionPage;
