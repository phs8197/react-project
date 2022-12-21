/*eslint-disable*/ // -> eslint가 도와주는 기능 그걸 없애려면 disable

import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "가목도리 추천",
    "나신발 추천",
  ]);
  let [선택제목, 선택제목변경] = useState(0);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [입력값, 입력값변경] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={post}>블로그임</h4>
      </div>
      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                선택제목변경(i);
              }}
            >
              {a}{" "}
              <span
                onClick={() => {
                  따봉[i] = 따봉[i] + 1;
                  따봉변경([...따봉]);
                  console.log(따봉);
                }}
              >
                👍
              </span>{" "}
              {따봉[i]}
            </h4>
            <p>2월 17일 발행</p>
            <button
              onClick={(e) => {
                글제목.splice(i, 1);
                글제목변경([...글제목]);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      <input onChange={(e) => 입력값변경(e.target.value)}></input>
      <button
        onClick={() => {
          글제목.push(입력값);
          글제목변경([...글제목]);
        }}
      >
        글 발행
      </button>

      {modal == true ? (
        <Modal
          글제목={글제목}
          글제목변경={글제목변경}
          선택제목={선택제목}
        ></Modal>
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.선택제목]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
