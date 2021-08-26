# Shall We Code(swc)

## Library

- `react-router-dom` 로 route를 관리합니다.

- `styled-components` 로 css와 컴포넌트를 생성합니다.

- `react-helmet-async` 로 `<title>`을 바꿉니다.

- `react-fortawesome` 로 아이콘을 추가합니다.

## Prototype

| 리소스          | 링크                                                                                   |
| --------------- | -------------------------------------------------------------------------------------- |
| 웹 UI 개발 링크 | [Figma](https://www.figma.com/file/fQ8PUNzvJyBUcUXajZX35f/Shall-we-code?node-id=0%3A1) |

- Inspect 탭에서 CSS 속성을 확인할 수 있습니다

### 디자인 업데이트 내역 (성중)

| 날짜       | 화면               | 내용                     |
| ---------- | ------------------ | ------------------------ |
| 08/21/2021 | 홈/회원가입/로그인 | 디자인 업데이트 했습니다 |

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

### 210818 (상윤)

- `react-helmet-async`라이브러리를 활용하여 `<title>`을 바꾸는 `HelmetTitle` 컴포넌트를 추가하였습니다.

- `favicon`을 바꾸었습니다.

- `Header` 컴포넌트를 생성하였습니다.

### 210820 (상윤)

- `shared.js`

  1. `Content` : "기술스택"란과 "토이 프로젝트 목록"을 감싸는 공통 컴포넌트입니다.
  2. `Separator` : "|" 모양의 컴포넌트 사이를 구분하는 구분선입니다.
  3. `Button`: 회원가입 / 로그인 / "기술스택" / "최신순" / "인기순" 버튼 등 사용성이 많은 공통 컴포넌트입니다.
  4. `AccentButton` : "글쓰기" 버튼 같이 특별한 버튼에 사용하는 컴포넌트입니다.

- `Home` 컴포넌트 구조(`HelmetTitle은 생략`)

  ```
  Home +-- Banner(배너이미지)
       +-- Skills (기술스택란) +-- SkillHeader
                              +-- SkillBtns
       +-- Projects (프로젝트 목록) +-- ProjectHeader
                                   +-- Project --map() -- Card
  ```

- `Project` 컴포넌트에서 프로젝트 data 목록을 받아와서 map함수로 각 data를 `Card` 컴포넌트로 보냅니다.

### 210822 (성중)

- `Skills` 컴포넌트를 주석처리 했습니다

- 기존 `SkillBtns`를 `Project` 컴포넌트에 구현했습니다

- `Btn` 선택에 따라 map함수로 각각의 data를 보내도록 했습니다

- `react-transition-group` 라이브러리로 `Project`에 `Animation`을 넣었습니다

  ```
  npm install react-transition-group
  npm i sass --save-dev
  ```

- `animationSwitch`를 `useEffect`로 컴포넌트가 로드될 때 `true`, 버튼을 누를 때 `false`로 바꿔 `Animation`을 구현했습니다

### 210823 (상윤)

- 이제 "기술스택" 선택란이 `Projects`아래로 내려갔으므로 `Skills` 폴더를 삭제하였습니다. (주석처리하셨던 Skills도 삭제하였습니다.)

- `Header`폴더 안에 있던 `SearchBar`를 `Component`폴더로 옮긴 뒤 `Projects`컴포넌트 안에 넣었습니다.

- `SkillBtn`을 `shared.js`폴더에 넣어 효율성을 높였습니다. 이제 만약 다른 컴포넌트에서 재사용한다면, margin만 바꾸면 될 것입니다.

- `ProjectHeader`에서, 사용자의 화면이 (가로방향으로)줄어들 때 "최신순" "인기순"의 글자가 세로로 출력되는 현상을 고치기위해 css수정했습니다.

### 210824 (성중)

- `data` 객체를 하나로 합치고 각 map 함수에 `filter`를 활용해 `skill`이라는 `key`로 데이터를 분류했습니다.

  - `skill`의 중복 체크에 대한 로직은 더 고민해볼 필요가 있습니다.

- `Card` 컴포넌트가 `skill`도 표시하도록 했습니다.

- css의 `focus` 속성으로 버튼의 활성화 상태를 유지시키도록 했습니다.
  - 활성화된 상태에서 다른 부분을 클릭하면 풀리는데 이 부분도 고민해볼 필요가 있습니다 ㅎㅎ

#### 추가

- 모든 프로젝트를 볼 수 있도록 해주는 `All` 버튼을 추가해 디폴트로 설정했습니다.

### 210825 (상윤)

- `Project`의 sample data를 `sampleData.js`로 옮겼습니다.

- `Footer`를 생성하여 `App.js`에 추가하였습니다.

### 210826 (상윤) - 로그인, 회원가입 화면 UI

#### 변경사항

- 로그인 화면을 나타내는 `SignIn`컴포넌트의 이름을 `Login`으로 변경하였습니다.

- `Project` 스크린을 삭제하고, route도 삭제하였습니다.

- `Footer` 컴포넌트를 `App`의 `Router`하단에서 각각의 스크린 컴포넌트의 하단으로 옮겼습니다. (로그인, 회원가입 화면에서는 `position:fixed`가 적용됩니다.)

#### 추가된 사항

로그인, 회원가입 UI가 추가되었습니다.

- `auth`폴더에서는 `Login`, `SignUp` 스크린에 사용되는 컴포넌트들이 들어있습니다.
