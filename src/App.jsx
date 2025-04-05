/* eslint-disable no-unused-vars */
// 변수 미사용 에러처리 삭제 기능 

import { useState } from 'react';
import './App.css'

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState(0);

  // let num = [1, 2];
  // let [a, c] = [1,2]; //디스트럭처링 문법 
  // let a = num[0];
  // let c = num[1];
  return (
    <div className='App'>
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className='list'>
        <h4>{글제목[0]}<button onClick={() => {
          let copy = [...글제목];
          copy[0] = '여자코드 추천'
          글제목변경(copy)
        }}>수정버튼</button>
          <span onClick={() => { 따봉변경(따봉++) }}>👍</span>{따봉} </h4>
        <p>2월 17일 발행</p><hr />
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p><hr />
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal></Modal>
      


    </div>
  );
}




function Modal() {
  return (
    <>
      <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
      <div></div>
    </>
  )
}




export default App;
