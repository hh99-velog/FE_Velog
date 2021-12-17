import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import Swal from 'sweetalert2'

// axios파일
import { apis } from "../../shared/axios";


// 액션
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// 액션 크리에이터
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

// 초기값
const initialStat = {
    user: null,
    is_login:null
};

// 로그인
const signinDB = (id, pwd) => {
  return async function (dispatch, getState, { history }) {

    // 보내는 정보
    const data = {
        username:id,
        password:pwd,
    };

    await apis
      .signIn(data)
      .then((res) => {
        // 받는 데이터 분류
        console.log(res)
        
        const jwtToken = res.headers.authorization.split(' ')[1]
        const str = res.headers.nickname

        const nickname = decodeURIComponent(escape(window.atob(str)));

        // 받는 데이터 저장
        localStorage.setItem("token", jwtToken);
        window.sessionStorage.setItem("nickname", nickname);
        dispatch(setUser({ id: id, user_name: id }));
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          text: '회원정보가 없습니다.',
          color: '#777',
          confirmButtonColor: '#ff7777'
        })
        return
      });
      window.location.href='/'
  };
};

// 회원가입
const signupDB = (id, userName, pwd, pwdCheck) => {
  return function (dispatch, getState, { history }) {

    const data = {
        username:id,
        nickname: userName,
        password: pwd,
        passwordConfirm: pwdCheck,
    };

    apis
      .signUp(data)
      .then(() => {
      })
      .catch((err) => {
        console.log(err)
      });
  };
};

// 로그아웃
const logoutDB = () => {
  return async function (dispatch, getState, { history }) {
    await dispatch(logOut());
    Swal.fire({
      text: '로그아웃 되었습니다.',
      color: '#777',
      confirmButtonColor: '#ff7777'
    })
    history.push("/");
  };
};

//리듀서
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        localStorage.removeItem("token");
        window.sessionStorage.clear();
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
  },
  initialStat
);

const actionCreators = {
    getUser,
    signinDB,
    signupDB,
    logoutDB
};

export { actionCreators };
