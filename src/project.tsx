import React from 'react';
import './scss/project.scss';
import ProjectList from './sub-component/project-list'
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
        "https://www.notion.so/Mozzarello-96f0734b4e2148a290cf787c6649062e",
        "https://blog.naver.com/kimtajung1/221744290215"
      ],
      gif: [MozzaBoard, MozzaDelete]
    },
    MTOD: {
      term: "2019.11 ~ 2019.12 / 4주",
      title: "M-TOD",
      stack: ["Javascript", "React-Native", "Native-Base"],
      comment: "온라인 콘서트 티켓 발권 서비스",
      link: [
        "https://bit.ly/36cHJ9g",
        "https://blog.naver.com/kimtajung1/221734201049"
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
        "https://www.notion.so/5-Farmers-Botanists-04917b9e582f43b982353d3db0a9498d",
        "https://blog.naver.com/kimtajung1/221694557904"
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
