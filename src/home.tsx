import React from 'react';
import './scss/home.scss';
import getWidth from "./sub-component/getWidth"

function Home() {
  return (
    <div className="home" id="home">
      <div className="home-container">
        <div className="greeting">
          <p>Developer 김태중 의 포트폴리오 입니다.</p>
        </div>
        <div className="arrowAnim">
          <div className="arrowSliding">
            <div className="arrow"></div>
          </div>
          <div className="arrowSliding delay1">
            <div className="arrow"></div>
          </div>
          <div className="arrowSliding delay2">
            <div className="arrow"></div>
          </div>
          <div className="arrowSliding delay3">
            <div className="arrow"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
