import React from 'react';
import pircture from './img/picture.png'
import './scss/about.scss';

function About() {

  return (
    <div className="about" id="about">
      <div className="about-title">
        <p>About Me</p>
      </div>
      <div className="about-content">
        <div className="about-left">
          <div className="about-profile">
            <img src={pircture}></img>
            <ul className="about-desc">
              <li className="name">김태중</li>
              <li>1992.12.29</li>
              <li>010-8764-6754</li>
              <li>kimtajung1@gmail.com</li>
              <li>정보처리기사</li>
            </ul>
          </div>
          <div className="about-experience">
            <h2>Experience</h2>
            <ul>
              <li>
                <p className="title">Immersive Course</p>
                <p className="company">CODE STATES</p>
                <p className="date">2019/09 ~ 2019/12</p>
              </li>
              <li>
                <p className="title">2017 대학유망팀300</p>
                <p className="company">넥스트레인</p>
                <p className="date">2017.03 ~ 2017.10</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="about-right">
          <div className="about-article">
            <h2>개발을 시작하게 된 계기</h2>
            <p>
              2017년 개발자 지인과 함께 창업 경진대회를 나간 적이 있고 개발 외적인 업무를 담당했었습니다.
              이 때 개발을 간접적으로 접하게 되었고 폭 넓은 접근성, 다른 여러분야와의 결합 가능성에 매력을 느껴 시작하게 되었습니다.
              그 중에서도 가장 뛰어난 접근성을 가진 웹/앱에 관심을 가지게되었고 Javascript가 이에 가장 적합한 언어라고 생각하게 되어 공부하게 되었습니다.
            </p>
          </div>
          <div className="about-article">
            <h2>Who I am</h2>
            <ul className="about-features">
              <li>저는 무언가를 구현하여 동작하게 하는 것에 즐거움을 느낍니다.</li>
              <li>어렵고 힘든 일이라도 도망치지 않고 포기하지 않는 끈기가 있습니다.</li>
              <li>업무에 대한 강한 책임감과 진중함을 가지고 있습니다.</li>
              <li>실패를 받아들이고 긍정적으로 해쳐나가는 자세를 가지고 있습니다.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
