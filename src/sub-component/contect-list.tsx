import React from 'react';
import '../scss/contect.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function ContectList({ contectInfo }: any) {

  return (
    <div className="contect-container">
      <FontAwesomeIcon icon={contectInfo[1]} size="2x" />
      {
        contectInfo[2] ?
          <a className="contect-info" href={contectInfo[0]} target="_blank">
            {contectInfo[0]}
          </a> :
          <a className="contect-info"> {contectInfo[0]}
          </a>
      }
    </div>
  );
}

export default ContectList;
