import React from 'react';
import '../scss/project.scss';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProjectList({ project }: any) {
  let image = {
    backgroundImage: `url(${project.gif})`,
  }
  return (
    <div className="project-list" >
      {
        project.gif.length > 1 ?
          <div className="project-visual multiple" style={image}>
            {
              project.gif.map((val: string, i: number) =>
                <img src={val}
                  className={`gif${i}`}
                  key={`gif${i}`}
                  alt={`gif${i}`}
                />)
            }
          </div> :
          <div className="project-visual">
            <img src={project.gif[0]}
              alt={`single gif`}
            />
          </div>
      }
      <div className="project-description">
        <div className="project-subtitle">
          <p>{project.title}</p>
        </div>
        <div className="project-term">
          <p>
            {project.term}
          </p>
        </div>
        <div className="project-stack">
          <p>{project.stack.map((val: string) => `${val}, `)}</p>
        </div>
        <div className="project-comment">
          <p>{project.comment}</p>
        </div>
        <div className="project-link">
          {
            project.link.map((info: any, i: number) =>
              <a href={info[0]}
                target="_blank"
                key={`project-link${i}`}
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={info[1]} size="2x" />
              </a>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
