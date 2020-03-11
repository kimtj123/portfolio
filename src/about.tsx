import React from 'react';
import './scss/about.scss';

function About() {

  return (
    <div className="about" id="about">
      <div className="about-title">
        <p>About Me</p>
      </div>
      <div className="about-content">
        <div className="about-article">
          <h2>개발을 시작하게 된 계기</h2>
          <p>
            2017년 개발자 지인과 함께 창업 경진대회를 나간 적이 있고 개발 외적인 업무를 담당했었습니다.
            이 때 개발을 간접적으로 접하게 되었고 폭 넓은 접근성, 다른 여러분야와의 결합 가능성에 매력을 느껴 시작하게 되었습니다.
            그 중에서도 가장 뛰어난 접근성을 가진 웹/앱에 관심을 가지게되었고 Javascript가 이에 가장 적합한 언어라고 생각하게 되어 공부하게 되었습니다.
          </p>
        </div>
        <div className="about-article">
          <h2>who I am</h2>
          <p>
            2017년 개발자 지인과 함께 창업 경진대회를 나간 적이 있고 개발 외적인 업무를 담당했었습니다.
            이 때 개발을 간접적으로 접하게 되었고 폭 넓은 접근성, 다른 여러분야와의 결합 가능성에 매력을 느껴 시작하게 되었습니다.
            그 중에서도 가장 뛰어난 접근성을 가진 웹/앱에 관심을 가지게되었고
            Javascript가 이에 가장 적합한 언어라고 생각하게 되어 공부하게 되었습니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
