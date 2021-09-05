//로그인상태라면 유저정보를 리턴, 아니면 null
function useUser(isLoggedIn) {
  //임시, userData는 접속한 user의 정보를 가져옵니다.
  const userData = {
    httpStatus: "OK",
    result: {
      userId: 1,
      email: "123@123",
      nickname: "용상윤",
      phoneNumber: "010-@@@@-####",
      skills: null,
    },
  };
  return isLoggedIn ? userData.result : null;
}

export default useUser;
