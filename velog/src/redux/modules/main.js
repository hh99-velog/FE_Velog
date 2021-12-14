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
            url: "https://run.mocky.io/v3/24e989e2-51f9-455e-ae5e-24454adef97e",
        }).then((res) => {
            const data = res.data.result
            dispatch(getPostList(data))
        }).catch((err) => {
            console.log(err)
        })
    //   apis
    //     .getPost()
    //     .then((res) => {
    //       // 받는 데이터 분류
    //         console.log(res)
    //         dispatch(getPostList({res}));
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //         window.alert(err.response.data.errorMessage);
    //         return;
    //     });
    };
};

// ADD POST
const addPostDB = (addFormData) => {
    return function (dispatch, getState, { history }) {
  
        const accessToken = window.localStorage.getItem('token')

        axios({
            method: "post",
            url: "",
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
        console.log(action.payload.list)
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