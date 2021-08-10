//로그인상태라면 유저정보를 리턴, 아니면 null
function useUser(isLoggedIn) {
  //임시, userData는 접속한 user의 정보를 가져옵니다.
  const userData = "userData";
  return isLoggedIn ? userData : null;
}

export default useUser;
