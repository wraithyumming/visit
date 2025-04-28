import React from 'react';

const ReviewsCard = ({ name, link, text }) => {
  return (
    <div className="review-card">
      <div className="review-content">
        <div style={{ padding: "0 20px 0 30px" }}>
          <div style={{ display: "flex", placeItems: "center" }}>
            <h2 style={{ width: "90%" }}>{name}</h2>
            <a className="link" href={link} target="_blank" rel="noreferrer">
              <p className="telegram-icon"></p>
              <p className="array-corner-icon"></p>
            </a>
          </div>
          <p className="review">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
