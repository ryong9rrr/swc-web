# Shall We Code(swc)

## Library

- `react-router-dom` 라이브러리를 이용해서 route를 관리합니다.

- `styled-components` 라이브러리를 이용해서 css와 컴포넌트를 생성합니다.

## Update

### 210804 (상윤)

- `Navigation.js` => `Header.js`로 이름 및 컴포넌트 약간 수정했습니다.

- `App.js`에서 로그인이 되었을 경우 `Header`에서 회원가입/로그인 버튼이 "OOO님 환영합니다" 로 바뀌는 대략적인 로직을 구현했습니다.

- `Header`에서 로고를 누르면 홈(`/`)으로, 프로젝트를 누르면 프로젝트 링크(`/project/`)로 가는 `routes`파일을 추가하고 구현했습니다.

- 회원가입/로그인 버튼을 모달로 구현했습니다. (더 좋은 로직이 있다면 조언 부탁드려요!)
