import React from 'react';
import './Card.css'; // You may need to create a CSS file for styling

const Card = ({ imageUrl, name, position }) => {
  return (


    <div className="card">
      <div className="image-container">
        <img src={imageUrl} alt="Avatar" className="avatar" />
      </div>
      <div className="details">
        <h2 className="name">{name}</h2>
        <p className="position">{position}</p>
      </div>
    </div>

  );
}

export default Card;
