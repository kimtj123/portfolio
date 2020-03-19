import React from 'react';
import '../scss/skills.scss';

interface SubjectProps {
  subtitle: string;
  img: string[];
  link: string;
  index: number;
}

let skill = (img: string, i: number, link: string) => {
  console.log(link);
  return (
    <div className={i % 2 === 0 ?
      "skills-list first" :
      "skills-list"} key={`skills-list${i}`}>
      <a href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={img}
          alt="kind of skill"
        />
        <div className="skills-link">
          <p>블로그<br />보러가기</p>
        </div>
      </a>
    </div>
  )
}

function Subject({ subtitle, img, link, index }: SubjectProps) {

  return (
    <div className="skills-subject">
      <div className="skills-subtitle">
        <p>{subtitle}</p>
      </div>
      <div className=
        {index % 2 === 1 ? "skills-col right" : "skills-col left"}
      >
        {
          img.map((img, i, arr) => {
            if (i === arr.length - 1) {
              return (
                <div className="skills-container">
                  {
                    i % 2 === 1 ? // 전체 개수가 홀수일 때, 짝수일 때 나눠서 처리하기 위해
                      [
                        skill(arr[i - 1], i - 1, link[i - 1]),
                        skill(img, i, link[i])
                      ] :
                      skill(img, i, link[i])
                  }
                </div>
              )
            }
            else if (i % 2 === 1) {
              return (
                <div className="skills-container">
                  {skill(arr[i - 1], i - 1, link[i - 1])}
                  {skill(img, i, link[i - 1])}
                </div>
              )
            }
          }
          )
        }
      </div>
    </div>
  );
}

export default Subject;
