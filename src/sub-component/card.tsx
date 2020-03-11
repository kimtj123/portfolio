import React from 'react';
import '../scss/card.scss';


function Card() {

  return (
    <div className="card">
      <div className="card-image"></div>
      <div className="card-text">
        <span className="date">4 days ago</span>
        <h2>Post One</h2>
        <p>Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
      </div>
      <div className="card-stats">
        <div className="stat">
          <div className="value">Github</div>
        </div>
        <div className="stat border">
          <div className="value">Blog</div>
        </div>
        <div className="stat">
          <div className="value">Site</div>
        </div>
      </div>
    </div>

  );
}

export default Card;
