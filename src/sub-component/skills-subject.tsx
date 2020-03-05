import React, { useState } from 'react';
import '../scss/skills.scss';

interface SubjectProps {
  subtitle: string;
  img: string[];
  link: string;
}



function Subject({ subtitle, img, link }: SubjectProps) {
  return (
    <div className="skills-subject">
      <div className="skills-subtitle">
        <p>{subtitle}</p>
      </div>
      <div className="skills-col">
        <div className="skills-container">
          {
            img.map((img, i) => {
              return (
                <div className="skills-list">
                  <a href={link[i]} target="_blank">
                    <img src={img} />
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
