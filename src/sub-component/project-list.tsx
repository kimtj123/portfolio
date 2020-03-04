import React from 'react';
import '../scss/project.scss';

function ProjectList({ projectInfo }: any) {
  console.log(projectInfo)
  return (
    <div className="project-list" >
      <div className="project-description">
        <div className="project-subtitle">
          <p>title</p>
        </div>
        <div className="project-term">
          <p>term</p>
        </div>
        <div className="project-stack">
          <p>stak</p>
        </div>
        <div className="project-detail">
          <p>detail</p>
        </div>
      </div>
      <div className="project-visual">
      </div>
    </div>
  );
}

export default ProjectList;
