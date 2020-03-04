import React from 'react';
import './scss/project.scss';
import ProjectList from './sub-component/project-list'

interface projectProps {
  farmers: detailProps,
  MTOD: detailProps,
  mozzarello: detailProps,
}

interface detailProps {
  title: string,
  term: string,
  stack: string,
  detail: string
}

function Project() {

  let projectInfo: projectProps = {
    mozzarello: {
      title: "mozzarello",
      term: "term",
      stack: "react",
      detail: "detail"
    },
    MTOD: {
      title: "M-TOD",
      term: "term",
      stack: "stack",
      detail: "detail"
    },
    farmers: {
      title: "Farmers",
      term: "term",
      stack: "stack",
      detail: "detail"
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
            <ProjectList projectInfo={projectInfo} />)
        }
      </div>
    </div>
  );
}

export default Project;
