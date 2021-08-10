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

### 210811 (상윤)

- 회원가입, 로그인 모달창을 삭제하였습니다.

- `react-router-dom`의 `<Link>`를 사용하여 임시로 회원가입, 로그인 페이지로 이동하는 버튼을 만들었습니다.

- "로그인 상태"일 때 접속한 유저의 정보를 리턴하는 커스텀 훅 `useUser`를 만들었습니다. `useUser`는 `Header`로 정보를 보냅니다.

- 커스텀 Route `RestrictRoute`를 추가하였습니다. `RestrictRoute`는 주소창을 통해 회원가입, 로그인 페이지로 이동하려 할 때, 로그인상태라면 `Home`화면으로 리다이렉팅을 합니다.

- `App`의 Route에 `Redirect`를 추가하여 주소창에서 잘못된 주소(없는 주소)로 이동하려한다면 Home화면으로 리다이렉팅 시킵니다.
