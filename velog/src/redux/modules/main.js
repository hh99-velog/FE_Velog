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
  

        axios({
            method: "get",
            url: "https://run.mocky.io/v3/c86acbab-be47-4d90-a253-8bd1007ad733",
        }).then((res) => {
            const data = res.data.result
            dispatch(getPostList(data))
        }).catch((err) => {
            console.log(err)
        })

        // apis
        // .getPost()
        // .then((res) => {
        //   // 받는 데이터 분류
        //     console.log(res)
        //     dispatch(getPostList({res}));
        // })
        // .catch((err) => {
        //     console.log(err);
        //     return;
        // });
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
              "X-AUTH-TOKEN": `${accessToken}`,
            },
        })
        .then((res) => {
            console.log(res)
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
        
    })
},initialState)

const actionCreators = {
    getPostList,
    getPostListDB,
    addPost,
    addPostDB

}

export {actionCreators}