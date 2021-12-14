import { createAction,handleActions } from "redux-actions"
import { produce } from "immer"

// axios파일
import { apis } from "../../shared/axios";

const GET_POST = "GET_POST"
const ADD_POST = "ADD_POST"

const getPostList = createAction(GET_POST,(list) => ({list}))   
const addPost = createAction(ADD_POST,(list) => ({list}))   


const initialState ={
    list:[]
}

// GET POST
const getPostListDB = () => {
    return function (dispatch, getState, { history }) {
  
      apis
        .getPost()
        .then((res) => {
          // 받는 데이터 분류
            console.log(res)
            dispatch(getPostList({res}));
        })
        .catch((err) => {
            console.log(err);
            window.alert(err.response.data.errorMessage);
            return;
        });
    };
  };

// ADD POST
const addPostDB = () => {
    return function (dispatch, getState, { history }) {
  
      apis
        .getPost()
        .then((res) => {
          // 받는 데이터 분류
            console.log(res)
            dispatch(getPostList({res}));
        })
        .catch((err) => {
            console.log(err);
            window.alert(err.response.data.errorMessage);
            return;
        });
    };
  };

export default handleActions({
    [GET_POST] : (state,action) => produce(state,(draft) => {
        draft.list = action.payload.list
    }),
    [ADD_POST] : (state,action) => produce(state,(draft) => {
        draft.list = action.payload.list
    })
},initialState)

const actionCreators = {
    getPostList,
    getPostListDB

}

export {actionCreators}