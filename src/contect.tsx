import React from 'react';
import './scss/contect.scss';
import ContectList from './sub-component/contect-list';

import { faGithub, faBlogger } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";


function Contect() {

  interface passingObj {
    mail: [string, any, boolean],
    github: [string, any, boolean],
    blog: [string, any, boolean]
  }

  let contectInfo: passingObj =
  {
    mail: ["kimtajung1@gmail.com", faEnvelope, false],
    github: ["https://github.com/kimtj123", faGithub, true],
    blog: ["https://blog.naver.com/kimtajung1", faBlogger, true],
  }

  return (
    <div className="contect" id="contect">
      <div className="contect-title">
        <p>Contect</p>
      </div>
      <div className="contect-content">
        {
          Object.values(contectInfo).map((info) =>
            <ContectList contectInfo={info} />
          )
        }
      </div>
    </div>
  );
}

export default Contect;
