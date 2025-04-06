/* eslint-disable no-unused-vars */
// 변수 미사용 에러처리 삭제 기능 

import { use, useState } from 'react';
import './App.css'

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(true);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');
  // // map
  // [1,2,3].map(function(a){
  //   return '123123'
  // })

  // let num = [1, 2];
  // let [a, c] = [1,2]; //디스트럭처링 문법 
  // let a = num[0];
  // let c = num[1];
  return (
    <div className='App'>
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      {/* <div className='list'>
        <h4>{글제목[0]}<button onClick={() => {
          let copy = [...글제목];
          copy[0] = '여자코드 추천'
          글제목변경(copy)
        }}>수정버튼</button>
          <span onClick={() => { 따봉변경(따봉++) }}>👍</span>{따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={() => { setModal(!modal) }}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        글제목.map(function (a, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{ setModal(true);  setTitle(i)}}>
                {글제목[i]} <span onClick={(e) => { e.stopPropagation(); //글제목 말고도 따봉버튼 눌러도 모달창이 바뀌는걸 막는 함수
                  let copy = [...따봉]; //값만 복사해 새로운 배열을 만들어줌
                  copy[i] = copy[i] + 1; //배열에서 인덱스의 값만 +1
                  따봉변경(copy) //변경된 배열을 state로 업데이트
                }}>👍</span>{따봉[i]}
              </h4>
              <p>2월 17일 발행</p>
              <button onClick={()=>{
                let copy = [...글제목];
                copy.splice(i, 1); // 배열에서 원하는 항목을 삭제
                글제목변경(copy)
              }}>삭제</button>
            </div>
          )
        })
      }



      <input onChange={(e)=>{ 입력값변경(e.target.value);}}></input>
        <button onClick={()=>{
          let copy = [...글제목];
          copy.unshift(입력값);
          글제목변경(copy)
        }}>글발행</button>
      

      {/* <button onClick={()=>{setTitle(0)}}>글제목0</button>
      <button onClick={()=>{setTitle(1)}}>글제목1</button>
      <button onClick={()=>{setTitle(2)}}>글제목2</button> */}


      {
        modal == true ? <Modal color={'skyblue'} title={title} 글제목={글제목} 글제목변경={글제목변경} /> : null
        // 조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드 
      }
    </div>
  );
}
function Modal(props) {
  return (
    <>
      <div className='modal'>
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={() => {
          let copy = [...props.글제목];
          copy[0] = '여자코트 추천'
          props.글제목변경(copy)
        }}>글수정</button>
      </div>

    </>
  )
}

export default App;
