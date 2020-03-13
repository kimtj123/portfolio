import React from 'react';
import '../scss/card.scss';

function Card(props: any, index: number) {
  let result = props.info.comment.split('n');
  return (
    <div className="card">
      <div className="card-image"></div>
      <div className="card-text">
        <span className={`date font${props.index}`} >{props.info.term}</span>
        <h2>{props.info.title}</h2>
        {
          // 스택 부분
          props.info.stack.map((val: string, i: number, stack: any) => {
            if (i % 2 === 1 || i === stack.length - 1) {
              return (<p className="stack">{`#${stack[i - 1]}` + ' ' + `#${stack[i]}`}</p>)
            }
          })
        }
        <div className="comment-wraaper">
          {result.map((val: string) => <p className={`comment`}>
            {val} <br />
          </p>)}
        </div>
        <ul>
          {props.info.desc.map((val: string) => <li>{val}</li>)}
        </ul>
      </div>
      <div className={`card-button card${props.index}`}>
        <a href={props.info.link[0]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button">
            <div className="value">Github</div>
          </button>
        </a>
        <div className="button-middle">
          <a href={props.info.link[1]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button border">
              <div className="value">Blog</div>
            </button>
          </a>
        </div>
        <a href={props.info.link[2]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button" onClick={() => console.log("Site")}>
            <div className="value">Site</div>
          </button>
        </a>
      </div>
    </div>

  );
}

export default Card;
