import React from 'react';
import './scss/project.scss';
import ProjectList from './sub-component/project-list'

import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faBlogger } from "@fortawesome/free-brands-svg-icons";

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
  link: [string, object][];
  gif: string[]
}

function Project() {
  let projectInfo: projectProps = {
    mozzarello: {
      title: "Mozzarello",
      term: "2019.12 ~ 2019.01 / 5주",
      stack: ["Javascript", "React", "HTML", "CSS", "MongoDB", "Mongoose(koa)"],
      comment: "Trello 커버 프로젝트",
      link: [
        ["https://github.com/kimtj123/Mozzarello", faGithub],
        ["https://www.notion.so/Mozzarello-96f0734b4e2148a290cf787c6649062e", faLink],
        ["https://blog.naver.com/kimtajung1/221744290215", faBlogger]
      ],
      gif: [MozzaBoard, MozzaDelete]
    },
    MTOD: {
      title: "M-TOD",
      term: "2019.11 ~ 2019.12 / 4주",
      stack: ["Javascript", "React-Native", "Native-Base"],
      comment: "온라인 콘서트 티켓 발권을 서비스하는 어플(Git 소스코드 공개 불가)",
      link: [
        ["https://bit.ly/36cHJ9g", faLink],
        ["https://blog.naver.com/kimtajung1/221734201049", faBlogger]
      ],
      gif: [MTOD]
    },
    farmers: {
      title: "Farmers",
      term: "2019.10 ~ 2019.11 / 2주",
      stack: ["Javascript", "React", "HTML", "CSS"],
      comment: "위치·날씨 정보를 기반으로 관심작물의 상태와 정보 표시",
      link: [
        ["https://github.com/codestates/Farmers-client", faGithub],
        ["https://www.notion.so/5-Farmers-Botanists-04917b9e582f43b982353d3db0a9498d", faLink],
        ["https://blog.naver.com/kimtajung1/221694557904", faBlogger]
      ],
      gif: [Farmers]
    }
  }

  return (
    <div className="project">
      <div className="project-title">
        <p>Project</p>
      </div>
      <div className="project-content">
        {
          Object.values(projectInfo).map((project, i) =>
            <ProjectList project={project} />)
        }
      </div>
    </div>
  );
}

export default Project;
