import { createAction,handleActions } from "redux-actions"
import { produce } from "immer"

// axios파일
import axios from "axios";
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
            const list = res.data.data
            dispatch(getPostList({list}));
        })
        .catch((err) => {
            console.log(err);
            return;
        });
    };
};

// ADD POST
const addPostDB = (addFormData) => {
    return function (dispatch, getState, { history }) {
  
        const accessToken = window.localStorage.getItem('token')

        axios({
            method: "post",
            url: "http://3.37.127.5/api/boards",
            data: addFormData,
            headers: {
              "Content-Type": "multipart/form-data",
              "Authorization": `Bearer ${accessToken}`,
            },
        })
        .then((res) => {
            console.log(res)
            alert('게시글 업로드 완료')
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
        draft.list = action.payload.list.list
    }),
    [ADD_POST] : (state,action) => produce(state,(draft) => {
        
    })
},initialState)

const actionCreators = {
    getPostList,
    getPostListDB,
    addPost,
    addPostDB

}

export {actionCreators}