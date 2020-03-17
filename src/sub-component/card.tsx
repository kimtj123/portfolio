import React from 'react';
import '../scss/card.scss';

function Card(props: any, index: number) {
  let result = props.info.comment.split('n');
  let linkBox = props.info.link

  let linkButton = (link: string, i: number) => {
    let values = ["Github", "Blog", "Site"]
    return link === "null" ?
      <a>
        <button className="button"
          onClick={() => alert("해당 프로젝트는 함께 진행한 기업에 소유권이 있어 소스코드를 공개할 수 없습니다.")}>
          <div className="value">{values[i]}</div>
        </button>
      </a> :
      <a href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="button">
          <div className="value">{values[i]}</div>
        </button>
      </a>
  }

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
        {/*한줄 소개, 상세내용 */}
        <div className="comment-wraaper">
          {result.map((val: string) => <p className={`comment`}>
            {val} <br />
          </p>)}
        </div>
        <ul>
          {props.info.desc.map((val: string) => <li>{val}</li>)}
        </ul>
      </div>
      {/*버튼 부분 */}
      <div className={`card-button card${props.index}`}>
        {linkButton(linkBox[0], 0)}
        <div className="button-middle">
          {linkButton(linkBox[1], 1)}
        </div>
        {linkButton(linkBox[2], 2)}
      </div>
    </div>

  );
}

export default Card;
