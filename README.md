# Chat Gpt API를 활용한 요약 사이트 

## 설치 세팅 <br/>

◆`npm install react@18.2.0 react-dom@18.2.0 react-redux@9.1.2 axios@1.7.2 @reduxjs/toolkit@2.2.3 react-router-dom@6.23.0 uuid@10.0.0 date-fns@3.6.0` 설치 <br/>

◆` npm install -D autoprefixer@10.4.19 postcss@8.4.39 tailwindcss@3.4.3`  & `npm i`설치<br/>

◆`npx tailwindcss init -p`로 커스터마이징 <br/>

## Redux 중앙관리 도입 <br/>

◆ 제목을 수정하고 요약버튼을 누를때 상태가 변환되고 화면에 도출함 <br/>
◆ 부모와 자식 컴포넌트를 구분하여 Outlet으로 조정 <br/>

## 노트의 정보 가져오기 <br/>
◆ useSelector로 redux의 정보를 가지고 오기<br/>
◆ noteList에 각각의 ID를 도입 <br/>
◆ noteDetail에서 useParam으로 해당 ID값을 받음 & useDispatch로 action 받아오기<br/>

## ChatGpt API 연동 <br/> 
◆ VITE_API_KEY를 사용해서 키등록 <br/>
◆ env로 API 암호화  <br/>
index.js에서 연동 후 NoteDetail에서 dispatch로 받음 <br/>

## 날짜 설정 & 입력정보 저장 <br/> 

◆ "date-fns"로 설정 <br/> 
◆ Empty.jsx 생성 <br/> 

## 글 추가 & 리스트 정렬 <br/> 

◆ 글이 하나도 없을 시 글 생성을 통해 글 작성 <br/> 
◆ sort함수와 Date의 크기비교로 정렬(최신순) <br/> 
◆ localeCompare을 사용해서 (이름순)<br/> 

## 파이어베이스 배포하기<br/>
◆ `npm install firebase` & `npm install -g firebase-tools` 설치<br/> 

## 테스트코드 작성하기 <br/>
◆ `npm install -D vitest @testing-library/react @testing-library/user-event @testing-library/jest-dom jsdom`




