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
          <p>
            2017년 개발자 지인과 함께 창업 경진대회를 나간 적이 있고 개발 외적인 업무를 담당했었습니다.
            이 때 개발을 간접적으로 접하게 되었고 폭 넓은 접근성, 다른 여러분야와의 결합 가능성에 매력을 느껴 시작하게 되었습니다.
            그 중에서도 가장 뛰어난 접근성을 가진 웹/앱에 관심을 가지게되었고
            Javascript가 이에 가장 적합한 언어라고 생각하게 되어 공부하게 되었습니다.
          </p>
          <p>
            저는 개발이 사람들의 삶을 보다 편리하고 윤택하게 해주는 것에 가치가 있다고 생각하며
            개발자와 사용자 모두를 고려한 서비스를 제작하는 양 쪽 모두를 만족시키는 개발자가 되는 것이 저의 목표입니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
