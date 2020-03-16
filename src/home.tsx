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
        <div className="home-link">
          {/* <a className="home-button">blog</a>
          <a className="home-button">github</a> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
