import React, { useState } from 'react';
import '../scss/skills.scss';

interface SubjectProps {
  subtitle: string;
  url: string[];
}



function Subject({ subtitle, url }: SubjectProps) {
  return (
    <div className="skills-subject">
      <div className="skills-subtitle">
        <p>{subtitle}</p>
      </div>
      <div className="skills-col">
        <div className="skills-container">
          {
            url.map(url => {
              return (
                <div className="skills-list">
                  <a href="https://blog.naver.com/kimtajung1/221743015676">
                    <img src={url} />
                    <div className="skills-link">
                      <p>블로그<br />보러가기</p>
                    </div>
                  </a>
                </div>
              )
            }
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Subject;
