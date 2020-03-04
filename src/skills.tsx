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

let subTitles: string[] = [
  "Main",
  "Experienced / studied"
];

let URL: string[][] =
  [
    [
      javascript,
      react,
      html5,
      css3,
      github
    ],
    [
      typescript,
      nodeJS,
      mongoDB,
      mongoose,
      firebase
    ]
  ]

function Skills() {

  return (
    <div className="skills">
      <div className="skills-title">
        <p>Skills</p>
      </div>
      <div className="skills-content">
        {
          subTitles.map((sub, i) =>
            <Subject
              subtitle={sub}
              url={URL[i]}
            />
          )
        }
      </div>
    </div>
  );
}

export default Skills;
