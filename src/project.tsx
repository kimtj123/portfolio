import React from 'react';
import './scss/project.scss';
import Card from './sub-component/card'


import MozzaBoard from './img/mozza-board.gif';
import MozzaDelete from './img/mozza-deletelist.gif';

import MTOD from './img/MTOD.gif';
import Farmers from './img/Farmers.gif';

interface projectProps {
  farmers: detailProps,
  MTOD: detailProps,
  mozzarello: detailProps,
}

interface detailProps {
  title: string,
  term: string,
  stack: string[],
  comment: string,
  desc: string[],
  link: string[],
  gif: string[]
}

function Project() {
  let projectInfo: projectProps = {
    mozzarello: {
      term: "2019.12 ~ 2019.01 / 5주",
      title: "Mozzarello",
      stack: ["Javascript", "React", "MongoDB", "Mongoose(koa)"],
      comment: "Trello 커버 프로젝트",
      link: [
        "https://github.com/kimtj123/Mozzarello",
        "https://blog.naver.com/kimtajung1/221744290215",
        "https://www.notion.so/Mozzarello-96f0734b4e2148a290cf787c6649062e"
      ],
      desc: [
        "개인 프로젝트",
        "JWT를 활용해 회원 가입 / 정보 수정, 로그인, 로그아웃 구현",
        "보드/카드/리스트에 대한 CRUD 구현",
        "mongoose를 통해 서버 스키마 작성"
      ],
      gif: [MozzaBoard]
    },
    MTOD: {
      term: "2019.11 ~ 2019.12 / 4주",
      title: "M-TOD",
      stack: ["Javascript", "React-Native", "Native-Base"],
      comment: "온라인 콘서트 티켓 발권 서비스",
      link: [
        "null",
        "https://blog.naver.com/kimtajung1/221734201049",
        "https://bit.ly/36cHJ9g"
      ],
      desc: [
        "팀 프로젝트 / 기업제안 프로젝트",
        "Horizontal scroll, FlatList를 활용한 메인페이지 구성",
        "회원정보 표시,수정,탈퇴 기능 구현",
        "JWT를 사용한 로그인 권한 체크",
        "마이티켓 / 세부티켓정보 페이지 구현"
      ],
      gif: [MTOD]
    },
    farmers: {
      term: "2019.10 ~ 2019.11 / 2주",
      title: "Farmers",
      stack: ["Javascript", "React"],
      comment: "위치·날씨 정보를 기반으로n관심작물의 상태와 정보 표시",
      link: [
        "https://github.com/codestates/Farmers-client",
        "https://blog.naver.com/kimtajung1/221694557904",
        "https://www.notion.so/Farmers-bc176474cfee47439e8ec99b3a6b904b",
      ],
      desc: [
        "팀 프로젝트",
        "로그인 / 로그아웃 구현",
        "로그인 이전 / 이후에 제공되는 메인페이지 구현",
        "선호작물에 대한 정보/상태 표시 기능",
      ],
      gif: [Farmers]
    }
  }

  return (
    <div className="project" id="project">
      <div className="project-title">
        <p>Project</p>
      </div>
      <div className="project-content">
        {
          Object.values(projectInfo).map((project, i) =>
            <Card info={project} index={i} key={`cardList${i}`} />)
        }
      </div>
    </div>
  );
}

export default Project;
