import React from 'react';

import Subject from './sub-component/skills-subject';

import css3 from './img/css3.png'
import html5 from './img/html5.png'
import javascript from './img/javascript.png'
import react from './img/react.png'
import github from './img/github.png'

import typescript from './img/typescript.png'
import nodeJS from './img/nodeJS.png'
import mongoDB from './img/mongoDB.png'
import mongoose from './img/mongoose.png'
import firebase from './img/firebase.png'
import sass from './img/Sass.png'

let subTitles: object = {
  main: {
    title: "Main",
    image: [
      javascript,
      react,
      html5,
      css3,
      github
    ],
    link: [
      "https://blog.naver.com/kimtajung1/221783222650",
      "https://blog.naver.com/kimtajung1/221664143658",
      "https://blog.naver.com/kimtajung1/221526340051",
      "https://blog.naver.com/kimtajung1/221743015676",
      "https://blog.naver.com/kimtajung1/221615594766"
    ]

  },
  sub: {
    title: "Experienced / Studied",
    image: [ // sass 추가요망
      typescript,
      nodeJS,
      mongoDB,
      mongoose,
      firebase,
      sass
    ],
    link: [
      "https://blog.naver.com/kimtajung1/221824876650",
      "https://blog.naver.com/kimtajung1/221640011741",
      "https://blog.naver.com/kimtajung1/221759102038",
      "https://blog.naver.com/kimtajung1/221763545514",
      "https://blog.naver.com/kimtajung1/221837875560",
      "https://blog.naver.com/kimtajung1/221826543888",
    ]
  }
};


function Skills() {

  return (
    <div className="skills" id="skills">
      <div className="skills-title">
        <p>Skills</p>
      </div>
      <div className="skills-content">
        {
          Object.values(subTitles).map((group, i) =>
            <Subject
              subtitle={group.title}
              img={group.image}
              link={group.link}
              index={i}
              key={`subject${i}`}
            />
          )
        }
      </div>
    </div>
  );
}

export default Skills;
