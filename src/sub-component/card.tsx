import React from 'react';
import '../scss/card.scss';

function multipleElements() {

  let elements = [];
  for (let i = 0; i < 20; i++) {
    elements.push(
      <div key={i}> element{i + 1} </div>
    )
  }
  return elements;
}

//this function will separate each four element to display 
function separateElement() {
  var separateElements = [];
  var multiElements = multipleElements();

  for (var i = 0; i < multiElements.length; i += 4) {
    var oneRow = [];
    oneRow.push(multiElements.slice(i, i + 4).map(item => {
      return <div style={{ display: 'inline-block' }}>{item}</div>
    }))
    separateElements.push(oneRow.map(itm => { return <div>{itm}</div> }))
  }
  return separateElements;
}



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
              return (<p>{`#${stack[i - 1]}` + ' ' + `#${stack[i]}`}</p>)
            }
          })
        }
        {result.map((val: string) => <p className={`comment`}>
          {val} <br />
        </p>)}
        <ul>
          <li>내용 1</li>
          <li>내용 2</li>
          <li>내용 3</li>
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
